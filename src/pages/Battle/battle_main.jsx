import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ok from '../../assets/ok.png';
import cancel from '../../assets/cancel.png';
import gacha_buy from '../../assets/gacha_buy.png';
import battle_alarm from '../../assets/battle_alarm.png';
import Main from '../Home/main';
import { BattleDataManager } from '../../utils/battleDataManager';


export default function BattleMain() {
    const navigate = useNavigate();
    const [battleStatus, setBattleStatus] = useState({
        canBattle: false,
        message: '',
        hasBattledToday: false
    });

    useEffect(() => {
        // Check battle status on component mount
        const canBattle = BattleDataManager.isBattleDay() && !BattleDataManager.hasBattledToday();
        const hasBattledToday = BattleDataManager.hasBattledToday();
        const message = BattleDataManager.getBattleEligibilityMessage();
        
        setBattleStatus({
            canBattle,
            message,
            hasBattledToday
        });
    }, []);

    const handleOkClick = () => {
        // Check if it's Monday (battle day)
        if (!BattleDataManager.isBattleDay()) {
            //alert(BattleDataManager.getBattleEligibilityMessage());
            return;
        }
        
        // Check if player has already battled today
        if (BattleDataManager.hasBattledToday()) {
            //alert(BattleDataManager.getBattleEligibilityMessage());
            return;
        }
        
        // Check if we have past battle data
        const battleDataSummary = BattleDataManager.getBattleDataSummary();
        
        if (!battleDataSummary.hasData) {
            // First battle - save current state and proceed
            BattleDataManager.saveCurrentStateForBattle();
            //alert('初回バトルです！今の状態が来週の対戦相手として保存されました。');
        }
        
        // Mark that player is about to battle today
        BattleDataManager.markBattleToday();
        
        // Navigate to battle (Monday only, once per day)
        navigate('/battle');
    };

    const handleCancelClick = () => {
        navigate('/home');
    };

    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50 '>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center z-[100] opacity-100  opacity-100'>
                {/* Battle Status Display */}
                <div className='mb-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-lg max-w-md text-center'>
                    <div className={`text-lg font-bold mb-2 ${battleStatus.canBattle ? 'text-green-600' : 'text-red-600'}`}>
                        {battleStatus.hasBattledToday ? '今日のバトル完了' : 
                         BattleDataManager.isBattleDay() ? 'バトル可能' : 'バトル待機中'}
                    </div>
                    <div className='text-sm text-gray-700'>
                        {battleStatus.message}
                    </div>
                </div>
                
                <div className='w-full h-auto flex justify-center items-center relative '>
                    <div className='w-[300px] lg:w-[800px] xl:w-[600px] h-[100px] flex justify-center items-center relative'>
                        <img src={battle_alarm} alt="" className='w-full'/>
                    </div>
                    <div className='w-[80px] lg:w-[200px] h-[100px] flex justify-center items-center absolute top-15 lg:top-40 xl:top-30 left-40 lg:left-110 xl:left-140 gap-3'>
                        <img 
                            src={ok} 
                            alt="" 
                            className={`w-full ${battleStatus.canBattle ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed opacity-50'}`}
                            onClick={battleStatus.canBattle ? handleOkClick : undefined}
                        />
                        <img 
                            src={cancel} 
                            alt="" 
                            className='w-full cursor-pointer hover:opacity-80'
                            onClick={handleCancelClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
