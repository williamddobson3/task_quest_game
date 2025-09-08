// Card data structure for the game - using only cards from /assets/cards/ directory
export const cardDatabase = {
    // All N rarity cards (46 cards from cards/n (1).png to n (46).png)
    normalCards: Array.from({ length: 46 }, (_, i) => ({
        id: `n_card_${i + 1}`,
        name: `カード N-${i + 1}`,
        type: 'normal',
        rarity: 'N',
        image: `n (${i + 1})`,
        description: `基本的なカード N-${i + 1}。初心者にも使いやすい。`,
        stats: {
            chika: Math.floor(Math.random() * 5) + 1,
            chishi: Math.floor(Math.random() * 5) + 1,
            tai: Math.floor(Math.random() * 5) + 1,
            kou: Math.floor(Math.random() * 5) + 1,
            kei: Math.floor(Math.random() * 5) + 1
        }
    })),
    
    // All R rarity cards (20 cards from cards/R (1).png to R (20).png)
    rareCards: Array.from({ length: 20 }, (_, i) => ({
        id: `r_card_${i + 1}`,
        name: `レアカード R-${i + 1}`,
        type: 'rare',
        rarity: 'R',
        image: `R (${i + 1})`,
        description: `希少なレアカード R-${i + 1}。通常のカードより強力。`,
        stats: {
            chika: Math.floor(Math.random() * 8) + 3,
            chishi: Math.floor(Math.random() * 8) + 3,
            tai: Math.floor(Math.random() * 8) + 3,
            kou: Math.floor(Math.random() * 8) + 3,
            kei: Math.floor(Math.random() * 8) + 3
        }
    })),
    
    // All SR rarity cards (19 cards from cards/SR (1).png to SR (19).png)
    superRareCards: Array.from({ length: 19 }, (_, i) => ({
        id: `sr_card_${i + 1}`,
        name: `スーパーレアカード SR-${i + 1}`,
        type: 'super_rare',
        rarity: 'SR',
        image: `SR (${i + 1})`,
        description: `非常に希少なスーパーレアカード SR-${i + 1}。強力な効果を持つ。`,
        stats: {
            chika: Math.floor(Math.random() * 12) + 8,
            chishi: Math.floor(Math.random() * 12) + 8,
            tai: Math.floor(Math.random() * 12) + 8,
            kou: Math.floor(Math.random() * 12) + 8,
            kei: Math.floor(Math.random() * 12) + 8
        }
    })),
    
    // All UR rarity cards (10 cards from cards/UR (1).png to UR (10).png)
    ultraRareCards: Array.from({ length: 10 }, (_, i) => ({
        id: `ur_card_${i + 1}`,
        name: `ウルトラレアカード UR-${i + 1}`,
        type: 'ultra_rare',
        rarity: 'UR',
        image: `UR (${i + 1})`,
        description: `究極のウルトラレアカード UR-${i + 1}。最高の性能を持つ。`,
        stats: {
            chika: Math.floor(Math.random() * 15) + 15,
            chishi: Math.floor(Math.random() * 15) + 15,
            tai: Math.floor(Math.random() * 15) + 15,
            kou: Math.floor(Math.random() * 15) + 15,
            kei: Math.floor(Math.random() * 15) + 15
        }
    }))
};

// Rarity probabilities for gacha system
export const RARITY_PROBABILITIES = {
    'N': 70,  // 70% chance for Normal cards
    'R': 20,  // 20% chance for Rare cards
    'SR': 8,  // 8% chance for Super Rare cards
    'UR': 2   // 2% chance for Ultra Rare cards
};

// Function to get a random card based on rarity probabilities
export const getRandomCard = () => {
    const allCards = [
        ...cardDatabase.normalCards,
        ...cardDatabase.rareCards,
        ...cardDatabase.superRareCards,
        ...cardDatabase.ultraRareCards
    ];
    
    // Generate random number (0-99)
    const random = Math.floor(Math.random() * 100);
    
    let selectedRarity = 'N'; // Default to Normal
    
    // Determine rarity based on probabilities
    if (random < RARITY_PROBABILITIES.UR) {
        selectedRarity = 'UR';
    } else if (random < RARITY_PROBABILITIES.UR + RARITY_PROBABILITIES.SR) {
        selectedRarity = 'SR';
    } else if (random < RARITY_PROBABILITIES.UR + RARITY_PROBABILITIES.SR + RARITY_PROBABILITIES.R) {
        selectedRarity = 'R';
    } else {
        selectedRarity = 'N';
    }
    
    // Filter cards by selected rarity
    const cardsOfRarity = allCards.filter(card => card.rarity === selectedRarity);
    
    // If no cards of that rarity exist, fallback to Normal
    if (cardsOfRarity.length === 0) {
        const normalCards = allCards.filter(card => card.rarity === 'N');
        if (normalCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * normalCards.length);
            return normalCards[randomIndex];
        }
    }
    
    // Return random card of selected rarity
    const randomIndex = Math.floor(Math.random() * cardsOfRarity.length);
    return cardsOfRarity[randomIndex];
};

// Legacy functions removed - using only cards from /assets/cards/ directory

// Function to get 10 random cards for ten-pull (with guaranteed SR+ on 10th pull)
export const getTenRandomCards = () => {
    const cards = [];
    
    // First 9 cards use normal probabilities
    for (let i = 0; i < 9; i++) {
        cards.push(getRandomCard());
    }
    
    // 10th card has guaranteed SR or UR (50% chance each)
    const allCards = [
        ...cardDatabase.normalCards,
        ...cardDatabase.rareCards,
        ...cardDatabase.superRareCards,
        ...cardDatabase.ultraRareCards
    ];
    
    const srCards = allCards.filter(card => card.rarity === 'SR');
    const urCards = allCards.filter(card => card.rarity === 'UR');
    
    // 50% chance for SR, 50% chance for UR
    const isSR = Math.random() < 0.5;
    
    if (isSR && srCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * srCards.length);
        cards.push(srCards[randomIndex]);
    } else if (urCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * urCards.length);
        cards.push(urCards[randomIndex]);
    } else if (srCards.length > 0) {
        // Fallback to SR if no UR cards available
        const randomIndex = Math.floor(Math.random() * srCards.length);
        cards.push(srCards[randomIndex]);
    } else {
        // Ultimate fallback to normal card
        cards.push(getRandomCard());
    }
    
    return cards;
};
