// Stat System for Task Quest
// Manages the 5 core stats: Strength, Knowledge, Stamina, Action Power, Persistence

// Stat names and their Japanese equivalents
export const STATS = {
    STRENGTH: 'strength',      // ちから (チカ) - Physical attack power
    KNOWLEDGE: 'knowledge',    // ちしき (チシ) - Magic attack power  
    STAMINA: 'stamina',        // たいりょく (タイ) - HP
    ACTION_POWER: 'actionPower', // こうどうりょく (コウ) - Turn order & battle priority
    PERSISTENCE: 'persistence'  // けいぞくりょく (ケイ) - Task success rate & damage stability
};

// Task categories and their stat improvements
export const TASK_CATEGORIES = {
    WORK: 'work',           // 仕事 - Improves: Persistence + Stamina
    STUDY: 'study',         // 勉強 - Improves: Knowledge + Persistence
    LIFE: 'life',           // 生活 - Improves: Stamina + Strength
    HEALTH: 'health',       // 健康 - Improves: Strength + Action Power
    SOCIAL: 'social'        // 社交 - Improves: Action Power + Knowledge
};

// Stat improvement mapping based on task category
export const STAT_IMPROVEMENTS = {
    'work': {
        [STATS.PERSISTENCE]: 1.0,
        [STATS.STAMINA]: 0.8
    },
    'study': {
        [STATS.KNOWLEDGE]: 1.2,
        [STATS.PERSISTENCE]: 0.8
    },
    'life': {
        [STATS.STAMINA]: 1.0,
        [STATS.STRENGTH]: 0.8
    },
    'health': {
        [STATS.STRENGTH]: 1.0,
        [STATS.ACTION_POWER]: 0.8
    },
    'social': {
        [STATS.ACTION_POWER]: 1.0,
        [STATS.KNOWLEDGE]: 0.8
    }
};

// Default stat values for new users
export const DEFAULT_STATS = {
    [STATS.STRENGTH]: 1.0,
    [STATS.KNOWLEDGE]: 1.0,
    [STATS.STAMINA]: 1.0,
    [STATS.ACTION_POWER]: 1.0,
    [STATS.PERSISTENCE]: 1.0
};

// Job-based initial stats (from specification)
export const JOB_INITIAL_STATS = {
    'scholar': {      // 学者
        [STATS.STRENGTH]: 1.0,
        [STATS.KNOWLEDGE]: 5.0,
        [STATS.STAMINA]: 2.0,
        [STATS.ACTION_POWER]: 3.0,
        [STATS.PERSISTENCE]: 4.0
    },
    'ninja': {        // 忍者
        [STATS.STRENGTH]: 3.0,
        [STATS.KNOWLEDGE]: 2.0,
        [STATS.STAMINA]: 3.0,
        [STATS.ACTION_POWER]: 5.0,
        [STATS.PERSISTENCE]: 2.0
    },
    'stargazer': {    // 星見士
        [STATS.STRENGTH]: 2.0,
        [STATS.KNOWLEDGE]: 4.0,
        [STATS.STAMINA]: 2.0,
        [STATS.ACTION_POWER]: 4.0,
        [STATS.PERSISTENCE]: 3.0
    },
    'librarian': {    // 書庫守
        [STATS.STRENGTH]: 2.0,
        [STATS.KNOWLEDGE]: 3.0,
        [STATS.STAMINA]: 2.0,
        [STATS.ACTION_POWER]: 2.0,
        [STATS.PERSISTENCE]: 6.0
    },
    'warrior': {      // 鍛錬者
        [STATS.STRENGTH]: 5.0,
        [STATS.KNOWLEDGE]: 1.0,
        [STATS.STAMINA]: 5.0,
        [STATS.ACTION_POWER]: 2.0,
        [STATS.PERSISTENCE]: 2.0
    }
};

// Stat management functions
export class StatManager {
    // Initialize stats for new user
    static initializeStats(jobType = 'scholar') {
        const initialStats = JOB_INITIAL_STATS[jobType] || JOB_INITIAL_STATS['scholar'];
        localStorage.setItem('playerStats', JSON.stringify(initialStats));
        console.log('Stats initialized for job:', jobType, initialStats);
        return initialStats;
    }

    // Get current stats from localStorage
    static getStats() {
        try {
            const stats = localStorage.getItem('playerStats');
            if (!stats) {
                // Initialize with default stats if none exist
                return this.initializeStats();
            }
            return JSON.parse(stats);
        } catch (error) {
            console.error('Error loading stats:', error);
            return this.initializeStats();
        }
    }

    // Save stats to localStorage
    static saveStats(stats) {
        try {
            localStorage.setItem('playerStats', JSON.stringify(stats));
            console.log('Stats saved:', stats);
        } catch (error) {
            console.error('Error saving stats:', error);
        }
    }

    // Improve stats based on task category
    static improveStats(taskCategory) {
        const currentStats = this.getStats();
        const improvements = STAT_IMPROVEMENTS[taskCategory];
        
        console.log('improveStats called with category:', taskCategory);
        console.log('Available improvements:', STAT_IMPROVEMENTS);
        console.log('Found improvements:', improvements);
        
        if (!improvements) {
            console.warn('Unknown task category:', taskCategory);
            console.warn('Available categories:', Object.keys(STAT_IMPROVEMENTS));
            return currentStats;
        }

        const newStats = { ...currentStats };
        
        // Apply exponential decay growth (gets harder as stats increase)
        Object.keys(improvements).forEach(stat => {
            const improvement = improvements[stat];
            const currentValue = currentStats[stat] || 0;
            
            // Exponential decay formula: improvement decreases as stat increases
            const decayFactor = Math.max(0.1, 1 - (currentValue / 100));
            const actualImprovement = improvement * decayFactor;
            
            newStats[stat] = Math.min(120, currentValue + actualImprovement); // Max 120 after awakening
        });

        this.saveStats(newStats);
        console.log(`Stats improved for ${taskCategory}:`, improvements, 'New stats:', newStats);
        return newStats;
    }

    // Get stat display name in Japanese
    static getStatDisplayName(stat) {
        const displayNames = {
            [STATS.STRENGTH]: 'チカ',
            [STATS.KNOWLEDGE]: 'チシ', 
            [STATS.STAMINA]: 'タイ',
            [STATS.ACTION_POWER]: 'コウ',
            [STATS.PERSISTENCE]: 'ケイ'
        };
        return displayNames[stat] || stat;
    }

    // Get stat full name in Japanese
    static getStatFullName(stat) {
        const fullNames = {
            [STATS.STRENGTH]: 'ちから',
            [STATS.KNOWLEDGE]: 'ちしき',
            [STATS.STAMINA]: 'たいりょく', 
            [STATS.ACTION_POWER]: 'こうどうりょく',
            [STATS.PERSISTENCE]: 'けいぞくりょく'
        };
        return fullNames[stat] || stat;
    }

    // Check if character can awaken (one stat at 100+ and two others at 80+)
    static checkAwakening() {
        const stats = this.getStats();
        const values = Object.values(stats);
        
        const maxStat = Math.max(...values);
        const sortedStats = values.sort((a, b) => b - a);
        
        const canAwaken = maxStat >= 100 && sortedStats[1] >= 80 && sortedStats[2] >= 80;
        
        if (canAwaken && !localStorage.getItem('isAwakened')) {
            localStorage.setItem('isAwakened', 'true');
            console.log('Character has awakened!');
            return true;
        }
        
        return false;
    }

    // Get awakening status
    static isAwakened() {
        return localStorage.getItem('isAwakened') === 'true';
    }

    // Reset all stats (for testing or new game)
    static resetStats() {
        localStorage.removeItem('playerStats');
        localStorage.removeItem('isAwakened');
        return this.initializeStats();
    }
}

// Utility function to get task category from task data
export const getTaskCategory = (taskData) => {
    if (!taskData || !taskData.type) {
        console.warn('Task data missing type:', taskData);
        return TASK_CATEGORIES.WORK; // Default fallback
    }
    
    const categoryMap = {
        'work': TASK_CATEGORIES.WORK,
        'study': TASK_CATEGORIES.STUDY,
        'life': TASK_CATEGORIES.LIFE,
        'health': TASK_CATEGORIES.HEALTH,
        'socializing': TASK_CATEGORIES.SOCIAL
    };
    
    return categoryMap[taskData.type] || TASK_CATEGORIES.WORK;
};

export default StatManager;
