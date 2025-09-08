// Battle Notification System for Task Quest
// Manages various notification messages during battle

export const BATTLE_DIALOGUES = {
    // Past self dialogue when battle starts
    APPEARANCE: {
        MALE: [
            '昔のオレを超えてみろ！',
            'ここが、お前の成長の答えか？'
        ],
        FEMALE: [
            'あの頃の私、超えられる？',
            '今の私に、勝てるの？'
        ]
    },
    
    // Past self dialogue during attacks
    ATTACK: {
        MALE: [
            'いくぞ！',
            '甘いな！'
        ],
        FEMALE: [
            '覚悟してね！',
            'いくよ！'
        ]
    },
    
    // Past self dialogue when defeated
    DEFEATED: {
        MALE: [
            'やるじゃないか、今のオレ',
            'もう負けたってのか…？'
        ],
        FEMALE: [
            'ふふっ…成長したね、今の私',
            '強くなったね…びっくりしたよ'
        ]
    },
    
    // Past self dialogue when victorious
    VICTORIOUS: {
        MALE: [
            'まだまだ甘いな、未来のオレ',
            '努力が足りないな'
        ],
        FEMALE: [
            'まだまだね、これからでしょ？',
            '次はもう少し頑張ってね'
        ]
    }
};

export const BATTLE_LOG_MESSAGES = {
    // Turn start messages
    TURN_START: (turnNumber) => `【ターン${turnNumber}】`,
    
    // Player action messages
    PLAYER_ATTACK: (damage) => `▶ あなたの行動：攻撃！\n　→ 過去の自分に ${damage} ダメージ！`,
    PLAYER_MAGIC: (damage) => `▶ あなたの行動：魔法！\n　→ 過去の自分に ${damage} ダメージ！`,
    PLAYER_DEFEND: () => `▶ あなたの行動：防御！\n　→ ダメージを軽減！`,
    
    // Enemy action messages
    ENEMY_ATTACK: (damage) => `▶ 過去の自分の行動：攻撃！\n　→ あなたに ${damage} ダメージ！`,
    ENEMY_MAGIC: (damage) => `▶ 過去の自分の行動：魔法！\n　→ あなたに ${damage} ダメージ！`,
    ENEMY_DEFEND: () => `▶ 過去の自分の行動：防御！\n　→ ダメージを軽減！`,
    
    // Defeat messages
    PLAYER_DEFEATED: () => `▶ あなたは倒れた！`,
    ENEMY_DEFEATED: () => `▶ 過去の自分は倒れた！`,
    
    // Battle end messages
    BATTLE_START: (isFirstBattle) => 
        isFirstBattle 
            ? `【バトル開始】初回バトル！今の自分と戦う！`
            : `【バトル開始】過去の自分との戦いが始まった！`,
    
    VICTORY: () => `【勝利】過去の自分を超えた！ガチャ券×3獲得！`,
    DEFEAT: () => `【敗北】まだまだ成長段階だ！来週は自分を超えよう！ガチャ券×1獲得！`
};

export const REWARD_NOTIFICATIONS = {
    VICTORY: {
        title: '勝利！',
        message: '過去の自分を超えた！ガチャ券×3獲得！',
        tickets: 3,
        experience: true
    },
    DEFEAT: {
        title: '敗北...',
        message: 'まだまだ成長段階だ！ガチャ券×1獲得！',
        tickets: 1,
        experience: true
    }
};

export class BattleNotificationManager {
    // Get random dialogue from array
    static getRandomDialogue(dialogueArray) {
        if (!dialogueArray || dialogueArray.length === 0) return '';
        return dialogueArray[Math.floor(Math.random() * dialogueArray.length)];
    }
    
    // Get past self dialogue based on situation
    static getPastSelfDialogue(situation, gender = 'MALE') {
        const dialogues = BATTLE_DIALOGUES[situation]?.[gender];
        return this.getRandomDialogue(dialogues);
    }
    
    // Get battle log message
    static getBattleLogMessage(type, ...params) {
        const messageFunction = BATTLE_LOG_MESSAGES[type];
        if (typeof messageFunction === 'function') {
            return messageFunction(...params);
        }
        return messageFunction || '';
    }
    
    // Get reward notification
    static getRewardNotification(result) {
        return REWARD_NOTIFICATIONS[result.toUpperCase()] || REWARD_NOTIFICATIONS.DEFEAT;
    }
    
    // Create comprehensive battle log entry
    static createBattleLogEntry(turnNumber, playerAction, playerDamage, enemyAction, enemyDamage, playerDefeated = false, enemyDefeated = false) {
        const entries = [];
        
        // Turn start
        entries.push(this.getBattleLogMessage('TURN_START', turnNumber));
        
        // Player action
        if (playerAction === 'attack') {
            entries.push(this.getBattleLogMessage('PLAYER_ATTACK', playerDamage));
        } else if (playerAction === 'magic') {
            entries.push(this.getBattleLogMessage('PLAYER_MAGIC', playerDamage));
        } else if (playerAction === 'defend') {
            entries.push(this.getBattleLogMessage('PLAYER_DEFEND'));
        }
        
        // Check if enemy was defeated
        if (enemyDefeated) {
            entries.push(this.getBattleLogMessage('ENEMY_DEFEATED'));
            return entries;
        }
        
        // Enemy action (only if not defeated)
        if (enemyAction === 'attack') {
            entries.push(this.getBattleLogMessage('ENEMY_ATTACK', enemyDamage));
        } else if (enemyAction === 'magic') {
            entries.push(this.getBattleLogMessage('ENEMY_MAGIC', enemyDamage));
        } else if (enemyAction === 'defend') {
            entries.push(this.getBattleLogMessage('ENEMY_DEFEND'));
        }
        
        // Check if player was defeated
        if (playerDefeated) {
            entries.push(this.getBattleLogMessage('PLAYER_DEFEATED'));
        }
        
        return entries;
    }
    
    // Get battle start message
    static getBattleStartMessage(isFirstBattle) {
        return this.getBattleLogMessage('BATTLE_START', isFirstBattle);
    }
    
    // Get battle result message
    static getBattleResultMessage(result) {
        return result === 'victory' 
            ? this.getBattleLogMessage('VICTORY')
            : this.getBattleLogMessage('DEFEAT');
    }
    
    // Create notification for display
    static createNotification(title, message, type = 'info', duration = 3000) {
        return {
            id: Date.now(),
            title,
            message,
            type, // 'success', 'error', 'info', 'warning'
            duration,
            timestamp: new Date()
        };
    }
    
    // Get all available dialogues for a situation
    static getAllDialogues(situation, gender = 'MALE') {
        return BATTLE_DIALOGUES[situation]?.[gender] || [];
    }
}

export default BattleNotificationManager;
