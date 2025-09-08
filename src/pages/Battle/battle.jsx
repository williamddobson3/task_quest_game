import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import gacha_room from '../../assets/gacha_room.png';
import battle_board from '../../assets/battle_board.png';
import enemy from '../../assets/enemy.png';
import progress from '../../assets/progress.png';
import magic from '../../assets/magic.png';
import attack from '../../assets/attack.png';
import defence from '../../assets/defence.png';
import { BattleDataManager } from '../../utils/battleDataManager';
import { StatManager } from '../../utils/statSystem';
import { CardStatManager } from '../../utils/cardStatSystem';
import { BattleNotificationManager } from '../../utils/battleNotifications';
import BattleNotification from '../../components/BattleNotification';
import HPProgressBar from '../../components/HPProgressBar';


export default function Battle() {
    const navigate = useNavigate();
    const [currentStats, setCurrentStats] = useState({});
    const [pastSelfData, setPastSelfData] = useState(null);
    const [battleLog, setBattleLog] = useState([]);
    const [currentTurn, setCurrentTurn] = useState(1);
    const [playerHP, setPlayerHP] = useState(0);
    const [enemyHP, setEnemyHP] = useState(0);
    const [battleEnded, setBattleEnded] = useState(false);
    const [battleResult, setBattleResult] = useState(null);
    const [pastSelfDialogue, setPastSelfDialogue] = useState('');
    const [showDialogue, setShowDialogue] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        // Load current player stats and equipped cards
        const baseStats = StatManager.getStats();
        const equippedCards = CardStatManager.getEquippedCards();
        const totalStats = CardStatManager.getTotalStats(baseStats, equippedCards);
        setCurrentStats(totalStats);
        
        // Load past self data
        const pastData = BattleDataManager.loadPastSelfData();
        setPastSelfData(pastData);
        
        // Initialize HP based on total stamina (including card bonuses)
        const currentHP = CardStatManager.calculateHP(baseStats, equippedCards);
        const pastHP = pastData ? CardStatManager.calculateHP(pastData.stats, pastData.equippedCards || []) : currentHP;
        
        setPlayerHP(currentHP);
        setEnemyHP(pastHP);
        
        // Add initial battle log and dialogue
        const isFirstBattle = !pastData;
        const battleStartMessage = BattleNotificationManager.getBattleStartMessage(isFirstBattle);
        setBattleLog([battleStartMessage]);
        
        // Show initial past self dialogue
        const initialDialogue = BattleNotificationManager.getPastSelfDialogue('APPEARANCE', 'MALE');
        setPastSelfDialogue(initialDialogue);
        setShowDialogue(true);
        
        // Hide dialogue after 3 seconds
        setTimeout(() => {
            setShowDialogue(false);
        }, 3000);
    }, []);

    const handleAction = (action) => {
        if (battleEnded) return;
        
        // Show attack dialogue from past self
        const attackDialogue = BattleNotificationManager.getPastSelfDialogue('ATTACK', 'MALE');
        setPastSelfDialogue(attackDialogue);
        setShowDialogue(true);
        setTimeout(() => setShowDialogue(false), 1500);
        
        // Calculate player damage based on action type and stats
        const baseStats = StatManager.getStats();
        const equippedCards = CardStatManager.getEquippedCards();
        
        let playerDamage;
        if (action === '魔法') {
            playerDamage = CardStatManager.calculateBattleDamage(baseStats, equippedCards, 'magic');
        } else {
            playerDamage = CardStatManager.calculateBattleDamage(baseStats, equippedCards, 'physical');
        }
        
        // Apply player damage to enemy
        const newEnemyHP = Math.max(0, enemyHP - playerDamage);
        setEnemyHP(newEnemyHP);
        
        // Create battle log entries using notification manager
        const logEntries = BattleNotificationManager.createBattleLogEntry(
            currentTurn,
            action === '魔法' ? 'magic' : action === '防御' ? 'defend' : 'attack',
            playerDamage,
            'attack', // Enemy always attacks for now
            0, // Will be calculated below
            false, // Player not defeated yet
            newEnemyHP <= 0 // Enemy defeated check
        );
        
        // Check if enemy is defeated after player's attack
        if (newEnemyHP <= 0) {
            // Enemy defeated - show defeat dialogue and notification
            const defeatDialogue = BattleNotificationManager.getPastSelfDialogue('DEFEATED', 'MALE');
            setPastSelfDialogue(defeatDialogue);
            setShowDialogue(true);
            setTimeout(() => setShowDialogue(false), 2000);
            
            // Show victory notification
            setNotification({
                title: '敵を倒した！',
                message: '過去の自分を倒した！',
                type: 'victory',
                duration: 2000
            });
            
            setBattleLog(prev => [...prev, ...logEntries]);
            endBattle();
            return;
        }
        
        // Enemy can only act if they have HP > 0
        if (newEnemyHP > 0) {
            // Calculate enemy damage based on past self's stats and cards
            const enemyBaseStats = pastSelfData?.stats || baseStats;
            const enemyEquippedCards = pastSelfData?.equippedCards || [];
            const enemyDamage = CardStatManager.calculateBattleDamage(enemyBaseStats, enemyEquippedCards, 'physical');
            
            const newPlayerHP = Math.max(0, playerHP - enemyDamage);
            setPlayerHP(newPlayerHP);
            
            // Add enemy action to log
            const enemyLogEntries = BattleNotificationManager.createBattleLogEntry(
                currentTurn,
                action === '魔法' ? 'magic' : action === '防御' ? 'defend' : 'attack',
                playerDamage,
                'attack',
                enemyDamage,
                newPlayerHP <= 0, // Player defeated check
                false // Enemy not defeated
            );
            
            // Check if player is defeated after enemy's attack
            if (newPlayerHP <= 0) {
                // Player defeated - show victory dialogue and notification
                const victoryDialogue = BattleNotificationManager.getPastSelfDialogue('VICTORIOUS', 'MALE');
                setPastSelfDialogue(victoryDialogue);
                setShowDialogue(true);
                setTimeout(() => setShowDialogue(false), 2000);
                
                // Show defeat notification
                setNotification({
                    title: '敗北...',
                    message: '過去の自分に負けた...',
                    type: 'defeat',
                    duration: 2000
                });
                
                setBattleLog(prev => [...prev, ...logEntries, ...enemyLogEntries]);
                endBattle();
                return;
            }
            
            setBattleLog(prev => [...prev, ...logEntries, ...enemyLogEntries]);
        } else {
            setBattleLog(prev => [...prev, ...logEntries]);
        }
        
        // Check battle end conditions
        if (currentTurn >= 5) {
            endBattle();
        } else {
            setCurrentTurn(prev => prev + 1);
        }
    };

    const endBattle = () => {
        setBattleEnded(true);
        
        let result;
        
        // Determine battle result based on HP
        if (enemyHP <= 0) {
            // Enemy defeated - player wins
            result = 'victory';
            // Victory rewards: 経験値＋ガチャ券×3
            const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
            localStorage.setItem('gachaTickets', (currentTickets + 3).toString());
        } else if (playerHP <= 0) {
            // Player defeated - enemy wins
            result = 'defeat';
            // Defeat rewards: 経験値＋ガチャ券×1
            const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
            localStorage.setItem('gachaTickets', (currentTickets + 1).toString());
        } else {
            // 5 turns completed - compare HP
            if (playerHP > enemyHP) {
                result = 'victory';
                const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
                localStorage.setItem('gachaTickets', (currentTickets + 3).toString());
            } else if (enemyHP > playerHP) {
                result = 'defeat';
                const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
                localStorage.setItem('gachaTickets', (currentTickets + 1).toString());
            } else {
                // Tie - use action power (こうどうりょく) as tiebreaker
                result = (currentStats.actionPower || 0) >= (pastSelfData?.stats.actionPower || 0) ? 'victory' : 'defeat';
                const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
                localStorage.setItem('gachaTickets', (currentTickets + (result === 'victory' ? 3 : 1)).toString());
            }
        }
        
        setBattleResult(result);
        
        // Save current state for next week's battle
        BattleDataManager.saveCurrentStateForBattle();
        
        // Add result to battle log using notification manager
        const resultMessage = BattleNotificationManager.getBattleResultMessage(result);
        setBattleLog(prev => [...prev, resultMessage]);
        
        // Redirect to result page based on outcome
        if (result === 'victory') {
            // Redirect to victory result page
            setTimeout(() => {
                navigate('/result-win');
            }, 1500); // Small delay to show the battle log message
        } else if (result === 'defeat') {
            // Redirect to defeat result page
            setTimeout(() => {
                navigate('/result-lose');
            }, 1500); // Small delay to show the battle log message
        }
    };

    const handleReturnHome = () => {
        navigate('/home');
    };

    return (
        <div
            className="w-full h-screen overflow-hidden"
        >
            <div className='w-full h-full flex justify-center items-center absolute top-0 left-0'>
                <img src={gacha_room} alt="" className='w-full h-full z-[-1]' />
            </div>
            <div className="w-full h-full flex flex-col xl:flex-row-reverse justify-center items-center gap-5">
                <div className="w-auto h-auto flex justify-center items-center">
                    <div className="w-[350px] lg:w-[650px] xl:w-[400px] h-auto">
                        <img src={battle_board} alt="" className='w-full h-auto' />
                    </div>
                    <div className=" h-auto flex text-[30px] lg:text-[60px] xl:text-[40px] absolute top-25 xl:top-95 lg:top-60 left-20 lg:left-75 xl:left-215 ">
                        <p>{pastSelfData ? '俺を超えてみろ!' : '初回バトル!'}</p>
                    </div>
                    
                    {/* Past Self Dialogue */}
                    {showDialogue && pastSelfDialogue && (
                        <div className="absolute top-[-100px] xl:top-[-80px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg border-2 border-yellow-400 z-[1000001]">
                            <div className="text-center">
                                <div className="text-sm text-gray-600 mb-1">過去の自分</div>
                                <div className="text-lg font-bold text-gray-800 max-w-xs">
                                    "{pastSelfDialogue}"
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-[250px] lg:w-[500px] xl:w-[400px] h-auto flex justify-center items-center ">
                    <img src={enemy} alt="" className='xl:w-full xl:h-auto' />
                </div>
                <div className="w-[200px] lg:w-[400px] h-auto flex justify-center items-center xl:absolute xl:top-10">
                    <HPProgressBar 
                        currentHP={enemyHP}
                        maxHP={pastSelfData ? CardStatManager.calculateHP(pastSelfData.stats, pastSelfData.equippedCards) : 100}
                        label="過去の自分"
                        isEnemy={true}
                        width={200}
                        height={100}
                    />
                </div>
                <div className="w-full xl:w-auto h-auto flex flex-col justify-center items-center gap-3 xl:gap-5 z-[1000000]">
                    <div className="w-[150px] lg:w-[300px] h-auto flex justify-center items-center">
                        <img 
                            src={magic} 
                            alt="" 
                            className={`w-full h-auto ${battleEnded ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'}`}
                            onClick={() => !battleEnded && handleAction('魔法')}
                        />
                    </div>
                    <div className="w-[300px] lg:w-[600px] xl:w-[300px] h-auto flex xl:flex-col justify-center items-center gap-5">
                        <img 
                            src={attack} 
                            alt="" 
                            className={`w-1/2 xl:w-full h-auto ${battleEnded ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'}`}
                            onClick={() => !battleEnded && handleAction('攻撃')}
                        />
                        <img 
                            src={defence} 
                            alt="" 
                            className={`w-1/2 xl:w-full h-auto ${battleEnded ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:opacity-80'}`}
                            onClick={() => !battleEnded && handleAction('防御')}
                        />
                    </div>
                </div>
                <div className="w-[200px] lg:w-[400px] h-auto flex justify-center items-center xl:absolute xl:bottom-10">
                    <HPProgressBar 
                        currentHP={playerHP}
                        maxHP={CardStatManager.calculateHP(StatManager.getStats(), CardStatManager.getEquippedCards())}
                        label="あなた"
                        isEnemy={false}
                        width={200}
                        height={100}
                    />
                </div>
            </div>
            
            {/* Battle Log */}
            <div className="absolute top-4 left-4 w-80 h-60 bg-black bg-opacity-70 text-white p-4 rounded-lg overflow-y-auto text-sm">
                <h3 className="font-bold mb-2">バトルログ</h3>
                {battleLog.map((log, index) => (
                    <div key={index} className="mb-1">{log}</div>
                ))}
            </div>
            
            {/* HP Display */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                <div className="text-sm">
                    <div className="mb-2">
                        <div className="font-bold">
                            あなたのHP: {playerHP <= 0 ? '倒れた' : playerHP}
                        </div>
                        <div className="w-32 bg-gray-600 h-2 rounded">
                            <div 
                                className={`h-2 rounded ${playerHP <= 0 ? 'bg-gray-400' : 'bg-green-500'}`}
                                style={{ width: `${Math.max(0, (playerHP / CardStatManager.calculateHP(StatManager.getStats(), CardStatManager.getEquippedCards())) * 100)}%` }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            過去の自分のHP: {enemyHP <= 0 ? '倒れた' : enemyHP}
                        </div>
                        <div className="w-32 bg-gray-600 h-2 rounded">
                            <div 
                                className={`h-2 rounded ${enemyHP <= 0 ? 'bg-gray-400' : 'bg-red-500'}`}
                                style={{ width: `${Math.max(0, (enemyHP / CardStatManager.calculateHP(pastSelfData?.stats || StatManager.getStats(), pastSelfData?.equippedCards || [])) * 100)}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Battle Result - Only show for edge cases (5-turn timeout, etc.) */}
            {battleEnded && battleResult && !['victory', 'defeat'].includes(battleResult) && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            バトル終了
                        </h2>
                        <p className="mb-4">
                            5ターン経過でバトルが終了しました
                        </p>
                        <button 
                            onClick={handleReturnHome}
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                        >
                            ホームに戻る
                        </button>
                    </div>
                </div>
            )}
            
            {/* Battle Notifications */}
            {notification && (
                <BattleNotification
                    title={notification.title}
                    message={notification.message}
                    type={notification.type}
                    duration={notification.duration}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    )
}
