// Battle Data Manager for Task Quest
// Manages weekly battle data storage and retrieval for "past self" battles

export class BattleDataManager {
    // Save current character state for next week's battle
    static saveCurrentStateForBattle() {
        try {
            // Get current stats
            const currentStats = JSON.parse(localStorage.getItem('playerStats') || '{}');
            
            // Get current equipped cards
            const currentEquippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
            
            // Get current job (if available)
            const currentJob = localStorage.getItem('currentJob') || 'scholar';
            
            // Create battle data object
            const battleData = {
                stats: currentStats,
                equippedCards: currentEquippedCards,
                job: currentJob,
                savedDate: new Date().toISOString(),
                weekNumber: this.getCurrentWeekNumber()
            };
            
            // Save to localStorage (overwrites previous week's data)
            localStorage.setItem('battleData', JSON.stringify(battleData));
            
            console.log('Battle data saved for next week:', battleData);
            return battleData;
            
        } catch (error) {
            console.error('Error saving battle data:', error);
            return null;
        }
    }
    
    // Load past self data for battle
    static loadPastSelfData() {
        try {
            const battleData = localStorage.getItem('battleData');
            
            if (!battleData) {
                console.log('No past battle data found - this is the first battle');
                return null;
            }
            
            const parsedData = JSON.parse(battleData);
            console.log('Loaded past self data:', parsedData);
            return parsedData;
            
        } catch (error) {
            console.error('Error loading battle data:', error);
            return null;
        }
    }
    
    // Check if battle data exists
    static hasBattleData() {
        return localStorage.getItem('battleData') !== null;
    }
    
    // Get current week number (for tracking)
    static getCurrentWeekNumber() {
        const startDate = new Date('2024-01-01'); // Reference date
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - startDate.getTime();
        const weekDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));
        return weekDiff;
    }
    
    // Check if it's Sunday (battle day)
    static isBattleDay() {
        const today = new Date().getDay();
        return today === 1; // 0 = Sunday
    }

    // Check if player has already battled today
    static hasBattledToday() {
        try {
            const lastBattleDate = localStorage.getItem('lastBattleDate');
            if (!lastBattleDate) return false;
            
            const lastBattle = new Date(lastBattleDate);
            const today = new Date();
            
            // Check if it's the same day
            return lastBattle.toDateString() === today.toDateString();
        } catch (error) {
            console.error('Error checking battle status:', error);
            return false;
        }
    }

    // Mark that player has battled today
    static markBattleToday() {
        try {
            const today = new Date().toISOString();
            localStorage.setItem('lastBattleDate', today);
            console.log('Battle marked for today:', today);
        } catch (error) {
            console.error('Error marking battle date:', error);
        }
    }

    // Get time until next battle (next Monday)
    static getTimeUntilNextBattle() {
        const today = new Date();
        const daysUntilMonday = (1 - today.getDay() + 7) % 7;
        const nextMonday = new Date(today);
        nextMonday.setDate(today.getDate() + (daysUntilMonday === 0 ? 7 : daysUntilMonday));
        nextMonday.setHours(0, 0, 0, 0);
        
        const timeDiff = nextMonday.getTime() - today.getTime();
        const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        return {
            days,
            nextBattleDate: nextMonday,
            timeDiff
        };
    }
    
    // Get battle eligibility message
    static getBattleEligibilityMessage() {
        if (!this.isBattleDay()) {
            const daysUntilMonday = (1 - new Date().getDay() + 7) % 7;
            return `バトルは月曜日のみです。あと${daysUntilMonday}日待ってください。`;
        }
        
        if (this.hasBattledToday()) {
            return '今日はすでにバトルを完了しています。来週の月曜日までお待ちください。';
        }
        
        if (!this.hasBattleData()) {
            return '初回バトルです。今の状態が来週の対戦相手として保存されます。';
        }
        
        return '過去の自分とのバトルが可能です！';
    }
    
    // Clear battle data (for testing or reset)
    static clearBattleData() {
        localStorage.removeItem('battleData');
        console.log('Battle data cleared');
    }
    
    // Get battle data summary for display
    static getBattleDataSummary() {
        const battleData = this.loadPastSelfData();
        
        if (!battleData) {
            return {
                hasData: false,
                message: '過去のデータなし（初回バトル）'
            };
        }
        
        const savedDate = new Date(battleData.savedDate);
        const daysAgo = Math.floor((new Date() - savedDate) / (1000 * 60 * 60 * 24));
        
        return {
            hasData: true,
            savedDate: savedDate.toLocaleDateString('ja-JP'),
            daysAgo: daysAgo,
            weekNumber: battleData.weekNumber,
            stats: battleData.stats,
            equippedCardsCount: battleData.equippedCards.length,
            message: `${daysAgo}日前の自分とバトル`
        };
    }
}

export default BattleDataManager;
