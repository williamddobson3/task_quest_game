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

export default function GachaTen() {
    const navigate = useNavigate();
    const [drawnCards, setDrawnCards] = useState([]);

    useEffect(() => {
        // Load the drawn cards from localStorage
        const cardsData = localStorage.getItem('drawnCards');
        if (cardsData) {
            try {
                const parsedCards = JSON.parse(cardsData);
                setDrawnCards(parsedCards);
                console.log('Loaded 10 drawn cards:', parsedCards);
            } catch (error) {
                console.error('Error parsing drawn cards:', error);
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
        if (drawnCards.length > 0) {
            // Add all cards to player's collection
            const currentCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
            
            // Add new cards (avoid duplicates)
            const updatedCards = [...currentCards];
            drawnCards.forEach(newCard => {
                const cardExists = updatedCards.some(card => card.id === newCard.id);
                if (!cardExists) {
                    updatedCards.push(newCard);
                }
            });
            
            localStorage.setItem('playerCards', JSON.stringify(updatedCards));
            console.log('10 cards added to collection:', drawnCards);
            
            // Clear the drawn cards from localStorage
            localStorage.removeItem('drawnCards');
        }
        
        // Navigate back to character-room
        navigate('/character-room');
    };

    if (drawnCards.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-white text-xl">Loading...</p>
            </div>
        );
    }

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
                
                <div className='w-full flex flex-col justify-center items-center gap-6 h-full'>
                    {/* 10 Cards Display */}
                    <div className='flex flex-col justify-center items-center gap-4'>
                        {/* First Row - 5 Cards */}
                        <div className='flex justify-center items-center gap-2'>
                            {drawnCards.slice(0, 5).map((card, index) => {
                                const cardImage = getCardImage(card);
                                return (
                                    <div key={index} className='w-[80px] lg:w-[120px] xl:w-[100px] h-auto'>
                                        {cardImage && (
                                            <img 
                                                src={cardImage} 
                                                alt={card.name} 
                                                className='w-full h-auto'
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Second Row - 5 Cards */}
                        <div className='flex justify-center items-center gap-2'>
                            {drawnCards.slice(5, 10).map((card, index) => {
                                const cardImage = getCardImage(card);
                                return (
                                    <div key={index + 5} className='w-[80px] lg:w-[120px] xl:w-[100px] h-auto'>
                                        {cardImage && (
                                            <img 
                                                src={cardImage} 
                                                alt={card.name} 
                                                className='w-full h-auto'
                                            />
                                        )}
                                    </div>
                                );
                            })}
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
