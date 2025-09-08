import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import return_png from '../../assets/return.png';

// Card images
import first_job from '../../assets/first_job.png';
import second_job from '../../assets/second_job.png';
import third_job from '../../assets/third_job.png';
import fourth_job from '../../assets/fourth_job.png';
import fifth_job from '../../assets/fifth_job.png';
import card_two from '../../assets/card_two.png';
import card_free from '../../assets/card_free.png';

export default function GachaOne() {
    const navigate = useNavigate();
    const [drawnCard, setDrawnCard] = useState(null);

    useEffect(() => {
        // Load the drawn card from localStorage
        const cardData = localStorage.getItem('drawnCard');
        if (cardData) {
            try {
                const parsedCard = JSON.parse(cardData);
                setDrawnCard(parsedCard);
                console.log('Loaded drawn card:', parsedCard);
            } catch (error) {
                console.error('Error parsing drawn card:', error);
                // Redirect back to character-room if no valid card data
                navigate('/character-room');
            }
        } else {
            // Redirect back to character-room if no card data
            navigate('/character-room');
        }
    }, [navigate]);

    // Function to get the correct card image based on card data
    const getCardImage = (card) => {
        if (!card) return null;
        
        const imageMap = {
            'first_job': first_job,
            'second_job': second_job,
            'third_job': third_job,
            'fourth_job': fourth_job,
            'fifth_job': fifth_job,
            'card_two': card_two,
            'card_free': card_free
        };
        
        return imageMap[card.image] || null;
    };

    const handleReturnClick = () => {
        if (drawnCard) {
            // Add the card to player's collection with quantity tracking
            const currentCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
            
            // Find existing card or add new one
            const existingCardIndex = currentCards.findIndex(card => card.id === drawnCard.id);
            
            if (existingCardIndex >= 0) {
                // Card exists, increment quantity (max 3)
                const existingCard = currentCards[existingCardIndex];
                const newQuantity = Math.min((existingCard.quantity || 1) + 1, 3);
                currentCards[existingCardIndex] = {
                    ...existingCard,
                    quantity: newQuantity
                };
            } else {
                // New card, add with quantity 1
                currentCards.push({
                    ...drawnCard,
                    quantity: 1
                });
            }
            
            localStorage.setItem('playerCards', JSON.stringify(currentCards));
            console.log('Card added to collection with quantity:', currentCards);
            
            // Clear the drawn card from localStorage
            localStorage.removeItem('drawnCard');
        }
        
        // Navigate back to character-room
        navigate('/character-room');
    };

    if (!drawnCard) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-white text-xl">Loading...</p>
            </div>
        );
    }

    const cardImage = getCardImage(drawnCard);

    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${gacha_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
                <div className='w-full flex justify-start items-start pl-12 lg:pl-65 xl:pl-123'>
                    <p className='text-red-500 text-2xl lg:text-6xl xl:text-2xl'>NEW !!</p>
                </div>
                
                <div className='w-full flex flex-col justify-center items-center gap-8 h-full'>
                    {/* Card Display */}
                    <div className='flex flex-col justify-center items-center gap-4'>
                        {/* Card Image */}
                        {cardImage && (
                            <div className='w-[300px] lg:w-[400px] xl:w-[300px] h-auto'>
                                <img 
                                    src={cardImage} 
                                    alt={drawnCard.name} 
                                    className='w-full h-auto'
                                />
                            </div>
                        )}
                        
                        {/* Card Information */}
                        <div className='bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-[400px] text-center'>
                            <h2 className='text-xl lg:text-2xl xl:text-xl font-bold mb-2'>
                                {drawnCard.name}
                            </h2>
                            <p className='text-sm lg:text-base xl:text-sm mb-2'>
                                Type: {drawnCard.type} | Rarity: {drawnCard.rarity}
                            </p>
                            <p className='text-xs lg:text-sm xl:text-xs leading-relaxed'>
                                {drawnCard.description}
                            </p>
                        </div>
                    </div>
                    
                    {/* Return Button */}
                    <div className='w-[150px] lg:w-[200px] xl:w-[150px] h-auto'>
                        <img 
                            src={return_png} 
                            alt="return" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleReturnClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
