// Dynamic card image loader for cards from /assets/cards/ directory
// This function dynamically imports card images based on their image key

// Function to get card image URL dynamically
export const getCardImageUrl = (imageKey) => {
    if (!imageKey) {
        return null;
    }
    
    // For cards from the cards/ directory, construct the path
    // imageKey format: "n (1)", "R (5)", "SR (10)", "UR (3)"
    try {
        // Use dynamic import to load the image
        // This will be handled by Vite's asset handling
        return new URL(`../assets/cards/${imageKey}.png`, import.meta.url).href;
    } catch (error) {
        console.error(`Failed to load card image: ${imageKey}`, error);
        return null;
    }
};

// Function to preload card images (optional optimization)
export const preloadCardImages = (cards) => {
    cards.forEach(card => {
        if (card.image) {
            const img = new Image();
            img.src = getCardImageUrl(card.image);
        }
    });
};

// Function to get fallback image URL
export const getFallbackImageUrl = () => {
    try {
        return new URL('../assets/blank_card.png', import.meta.url).href;
    } catch (error) {
        console.error('Failed to load fallback image', error);
        return null;
    }
};
