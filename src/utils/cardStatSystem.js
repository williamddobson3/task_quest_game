// Card Stat Bonus System for Task Quest
// Manages stat bonuses from equipped cards

import { STATS } from './statSystem';

// Card stat bonus definitions based on specification
export const CARD_STAT_BONUSES = {
    // Job Cards (provide base stat bonuses)
    'first_job': { // 鍛錬者
        [STATS.STRENGTH]: 2.0,
        [STATS.STAMINA]: 1.5
    },
    'second_job': { // 学者
        [STATS.KNOWLEDGE]: 2.0,
        [STATS.PERSISTENCE]: 1.5
    },
    'third_job': { // 忍者
        [STATS.ACTION_POWER]: 2.0,
        [STATS.STRENGTH]: 1.0
    },
    'fourth_job': { // 星見士
        [STATS.KNOWLEDGE]: 1.5,
        [STATS.ACTION_POWER]: 1.5
    },
    'fifth_job': { // 書庫守
        [STATS.PERSISTENCE]: 2.5,
        [STATS.KNOWLEDGE]: 1.0
    },
    
    // Weapon Cards (provide attack bonuses)
    'card_two': { // Example weapon
        [STATS.STRENGTH]: 1.5,
        [STATS.ACTION_POWER]: 0.5
    },
    'card_free': { // Example weapon
        [STATS.STRENGTH]: 1.0
    },
    
    // Magic Cards (provide magic bonuses)
    'magic_card_1': {
        [STATS.KNOWLEDGE]: 1.5,
        [STATS.PERSISTENCE]: 0.5
    },
    
    // Support Cards (provide various bonuses)
    'support_card_1': {
        [STATS.STAMINA]: 1.0,
        [STATS.PERSISTENCE]: 1.0
    },
    'support_card_2': {
        [STATS.ACTION_POWER]: 1.0,
        [STATS.STRENGTH]: 0.5
    },
    
    // Legendary Cards (provide significant bonuses)
    'legendary_card_1': {
        [STATS.STRENGTH]: 3.0,
        [STATS.KNOWLEDGE]: 2.0,
        [STATS.STAMINA]: 2.0,
        [STATS.ACTION_POWER]: 1.5,
        [STATS.PERSISTENCE]: 1.5
    }
};

// Card categories for different bonus types
export const CARD_CATEGORIES = {
    JOB: 'job',
    WEAPON: 'weapon', 
    MAGIC: 'magic',
    SUPPORT: 'support',
    DESTINY: 'destiny',
    MEMORY: 'memory',
    LEGENDARY: 'legendary'
};

export class CardStatManager {
    // Calculate total stat bonuses from equipped cards
    static calculateCardBonuses(equippedCards) {
        if (!equippedCards || !Array.isArray(equippedCards)) {
            return {
                [STATS.STRENGTH]: 0,
                [STATS.KNOWLEDGE]: 0,
                [STATS.STAMINA]: 0,
                [STATS.ACTION_POWER]: 0,
                [STATS.PERSISTENCE]: 0
            };
        }

        const bonuses = {
            [STATS.STRENGTH]: 0,
            [STATS.KNOWLEDGE]: 0,
            [STATS.STAMINA]: 0,
            [STATS.ACTION_POWER]: 0,
            [STATS.PERSISTENCE]: 0
        };

        // Apply bonuses from each equipped card
        equippedCards.forEach(card => {
            if (card && card.image && CARD_STAT_BONUSES[card.image]) {
                const cardBonuses = CARD_STAT_BONUSES[card.image];
                
                Object.keys(cardBonuses).forEach(stat => {
                    if (bonuses.hasOwnProperty(stat)) {
                        bonuses[stat] += cardBonuses[stat];
                    }
                });
            }
        });

        console.log('Card bonuses calculated:', bonuses);
        return bonuses;
    }

    // Get total stats (base stats + card bonuses)
    static getTotalStats(baseStats, equippedCards) {
        const cardBonuses = this.calculateCardBonuses(equippedCards);
        
        const totalStats = {
            [STATS.STRENGTH]: (baseStats[STATS.STRENGTH] || 0) + cardBonuses[STATS.STRENGTH],
            [STATS.KNOWLEDGE]: (baseStats[STATS.KNOWLEDGE] || 0) + cardBonuses[STATS.KNOWLEDGE],
            [STATS.STAMINA]: (baseStats[STATS.STAMINA] || 0) + cardBonuses[STATS.STAMINA],
            [STATS.ACTION_POWER]: (baseStats[STATS.ACTION_POWER] || 0) + cardBonuses[STATS.ACTION_POWER],
            [STATS.PERSISTENCE]: (baseStats[STATS.PERSISTENCE] || 0) + cardBonuses[STATS.PERSISTENCE]
        };

        console.log('Total stats calculated:', {
            base: baseStats,
            bonuses: cardBonuses,
            total: totalStats
        });

        return totalStats;
    }

    // Calculate battle damage with card bonuses
    static calculateBattleDamage(stats, equippedCards, damageType = 'physical') {
        const totalStats = this.getTotalStats(stats, equippedCards);
        
        let damage = 0;
        
        if (damageType === 'physical') {
            // Physical attack: (ちから×1.2 + 武器×2.0)
            damage = (totalStats[STATS.STRENGTH] * 1.2) + (totalStats[STATS.STRENGTH] * 2.0);
        } else if (damageType === 'magic') {
            // Magic attack: (ちしき×1.2 + 魔法威力×2.0)
            damage = (totalStats[STATS.KNOWLEDGE] * 1.2) + (totalStats[STATS.KNOWLEDGE] * 2.0);
        }
        
        // Apply persistence bonus for damage stability (±10% variance)
        const persistenceBonus = totalStats[STATS.PERSISTENCE] * 0.1;
        const variance = (Math.random() - 0.5) * 2 * persistenceBonus;
        damage += variance;
        
        return Math.max(1, Math.floor(damage));
    }

    // Calculate HP with card bonuses
    static calculateHP(stats, equippedCards) {
        const totalStats = this.getTotalStats(stats, equippedCards);
        // HP = たいりょく × 10
        return Math.floor(totalStats[STATS.STAMINA] * 10);
    }

    // Get card bonus description for display
    static getCardBonusDescription(card) {
        if (!card || !card.image || !CARD_STAT_BONUSES[card.image]) {
            return 'ボーナスなし';
        }

        const bonuses = CARD_STAT_BONUSES[card.image];
        const descriptions = [];

        Object.keys(bonuses).forEach(stat => {
            const statName = this.getStatDisplayName(stat);
            descriptions.push(`${statName} +${bonuses[stat]}`);
        });

        return descriptions.join(', ');
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

    // Get equipped cards from localStorage
    static getEquippedCards() {
        try {
            return JSON.parse(localStorage.getItem('equippedCards') || '[]');
        } catch (error) {
            console.error('Error loading equipped cards:', error);
            return [];
        }
    }

    // Get base stats from localStorage
    static getBaseStats() {
        try {
            return JSON.parse(localStorage.getItem('playerStats') || '{}');
        } catch (error) {
            console.error('Error loading base stats:', error);
            return {};
        }
    }

    // Get total stats for current character
    static getCurrentTotalStats() {
        const baseStats = this.getBaseStats();
        const equippedCards = this.getEquippedCards();
        return this.getTotalStats(baseStats, equippedCards);
    }
}

export default CardStatManager;
