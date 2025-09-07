import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import character_room_tablet from '../../assets/character_room_tablet.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import hero_man from '../../assets/hero_man.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import score from '../../assets/score.png';
import main_item from '../../assets/main_item.png';
import first_item from '../../assets/first_item.png';
import second_item from '../../assets/second_item.png';
import third_item from '../../assets/third_item.png';
import fourth_item from '../../assets/fourth_item.png';
import items_box from '../../assets/items_box.png';
import each_item from '../../assets/each_item.png';
import possession from '../../assets/possession.png';
import filter from '../../assets/filter.png';
import empty_item from '../../assets/empty_item.png';

// Card images
import first_job from '../../assets/first_job.png';
import second_job from '../../assets/second_job.png';
import third_job from '../../assets/third_job.png';
import fourth_job from '../../assets/fourth_job.png';
import fifth_job from '../../assets/fifth_job.png';
import card_two from '../../assets/card_two.png';
import card_free from '../../assets/card_free.png';


export default function Room() {
    const navigate = useNavigate();
    const [collectedCards, setCollectedCards] = useState([]);
    const [pendingCard, setPendingCard] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Load collected cards from localStorage
        const savedCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
        console.log('Collected cards:', savedCards);
        
        // Only add test cards if localStorage is completely empty (first time user)
        const hasAnyData = localStorage.getItem('playerCards') || 
                          localStorage.getItem('pendingCard') || 
                          localStorage.getItem('userName');
        
        if (savedCards.length === 0 && !hasAnyData) {
            const testCards = [
                {
                    id: 'first_job',
                    name: '鍛錬者',
                    type: 'job',
                    rarity: 'N',
                    image: 'first_job',
                    description: '力と体力で突き進む肉体派。'
                },
                {
                    id: 'second_job',
                    name: '学者',
                    type: 'job',
                    rarity: 'N',
                    image: 'second_job',
                    description: '知恵と持続力で学問を極める。'
                }
            ];
            localStorage.setItem('playerCards', JSON.stringify(testCards));
            setCollectedCards(testCards);
            console.log('Added test cards for new user:', testCards);
        } else {
            setCollectedCards(savedCards);
            console.log('Loaded existing cards:', savedCards);
        }
        
        // Load pending card from localStorage
        const today = new Date().toDateString();
        const pendingCardData = localStorage.getItem('pendingCard');
        const pendingCardDate = localStorage.getItem('pendingCardDate');
        
        console.log('Pending card data:', pendingCardData);
        console.log('Pending card date:', pendingCardDate);
        console.log('Today:', today);
        
        if (pendingCardData && pendingCardDate === today) {
            const parsedPendingCard = JSON.parse(pendingCardData);
            console.log('Parsed pending card:', parsedPendingCard);
            setPendingCard(parsedPendingCard);
        }
    }, []);

    // Add focus event listener to refresh data when returning to this page
    useEffect(() => {
        const handleFocus = () => {
            console.log('Character room page focused - refreshing data');
            // Reload collected cards (don't add test cards on refresh)
            const savedCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
            setCollectedCards(savedCards);
            console.log('Refreshed cards from localStorage:', savedCards);
            
            // Reload pending card
            const today = new Date().toDateString();
            const pendingCardData = localStorage.getItem('pendingCard');
            const pendingCardDate = localStorage.getItem('pendingCardDate');
            
            if (pendingCardData && pendingCardDate === today) {
                const parsedPendingCard = JSON.parse(pendingCardData);
                setPendingCard(parsedPendingCard);
                console.log('Refreshed pending card:', parsedPendingCard);
            } else {
                setPendingCard(null);
                console.log('No pending card found');
            }
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    // Track window width changes
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGearClick = () => {
        navigate('/setting');
    };

    const handleCardClick = (card) => {
        if (card) {
            // Store the clicked card data in localStorage for the room-ticket page to access
            localStorage.setItem('selectedCard', JSON.stringify(card));
            navigate('/room-ticket');
        }
    };

    // Function to get the correct card image based on card data
    const getCardImage = (card) => {
        if (!card) {
            console.log('getCardImage: No card provided');
            return null;
        }
        
        console.log('getCardImage: Card data:', card);
        console.log('getCardImage: Card image key:', card.image);
        
        const imageMap = {
            'first_job': first_job,
            'second_job': second_job,
            'third_job': third_job,
            'fourth_job': fourth_job,
            'fifth_job': fifth_job,
            'card_two': card_two,
            'card_free': card_free
        };
        
        const selectedImage = imageMap[card.image] || card_free;
        console.log('getCardImage: Selected image:', selectedImage);
        
        return selectedImage;
    };

    // Get the first 5 cards for display
    const displayCards = collectedCards.slice(0, 5);

    return (
        <div
            className="w-full h-[200vh] lg:bg-[url('/src/assets/character_room_mac.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${character_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16 relative'>
                <header className='w-full h-1/20 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
                    <div className=' h-full flex justify-start items-center'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
                            <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
                        </div>
                        <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto'>
                            <img src={imgear} alt="imgear" className='cursor-pointer hover:opacity-80 imgear' onClick={handleGearClick} />
                        </div>
                    </div>
                    <div className=' h-full flex justify-center items-center gap-3'>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                            <img src={one} alt="one" className='w-full one cursor-pointer hover:opacity-80' onClick={() => navigate('/gacha-buy')} />
                        </div>
                        <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
                            <img src={alarm} alt="alarm" className='w-full' />
                        </div>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                            <img src={gacha} alt="gacha" className='w-full'/>
                        </div>
                    </div>
                </header>
                <main className='w-full flex flex-col justify-start items-center'>
                    <div className='w-full flex flex-col justify-center items-end pl-12 lg:pl-20 lg:pt-20 xl:pr-[150px] xl:pt-20'>
                        <div className='flex justify-center items-center gap-3 relative w-[230px] lg:w-[550px] xl:w-[300px] h-auto'>
                            <img src={score} alt="score" className='w-full h-auto'/>
                            <p>100</p>
                        </div>
                    </div>
                    <div className='w-full h-[250px] flex justify-end items-end xl:pl-[200px] relative pr-5 lg:pr-50 lg:mt-30 xl:mt-0 xl:pr-120'>
                        <div className='w-[250px] lg:w-[600px] xl:w-[500px] h-auto absolute lg:top-[-380px] xl:top-[-200px] left-0 xl:left-20'>
                            <img src={hero_man} alt="hero_man" className='w-full h-auto'/>
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto xl:mb-50 relative'>
                            <img src={main_item} alt="main_item" className='w-full h-auto'/>
                            {displayCards[0] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80'
                                    onClick={() => handleCardClick(displayCards[0])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[0])} 
                                        alt={displayCards[0].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-full h-[200px] lg:h-[400px] xl:h-[200px] flex justify-center items-center xl:justify-end xl:pr-10 xl:pb-60 gap-3 mt-[75px] lg:mt-[25px] xl:mt-0'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto relative'>
                            <img src={first_item} alt="first_item" className='w-full h-auto'/>
                            {displayCards[1] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80'
                                    onClick={() => handleCardClick(displayCards[1])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[1])} 
                                        alt={displayCards[1].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                </div>
                            )}
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto relative'>
                            <img src={second_item} alt="second_item" className='w-full h-auto'/>
                            {displayCards[2] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80'
                                    onClick={() => handleCardClick(displayCards[2])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[2])} 
                                        alt={displayCards[2].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                </div>
                            )}
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto relative'>
                            <img src={third_item} alt="third_item" className='w-full h-auto'/>
                            {displayCards[3] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80'
                                    onClick={() => handleCardClick(displayCards[3])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[3])} 
                                        alt={displayCards[3].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                </div>
                            )}
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto relative'>
                            <img src={fourth_item} alt="fourth_item" className='w-full h-auto'/>
                            {displayCards[4] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80'
                                    onClick={() => handleCardClick(displayCards[4])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[4])} 
                                        alt={displayCards[4].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-full lg:w-[700px] xl:w-full h-auto  flex justify-center items-center gap-3 mt-[75px] xl:mt-0 '>
                        <div className='w-full h-auto xl:h-[500px] xl:pr-[600px] xl:pl-[100px]'>
                            <img src={items_box} alt="items_box" className='w-full h-full'/>
                        </div>
                        <div className='grid grid-cols-5 gap-3 xl:gap-1 z-10 absolute xl:h-[400px] xl:pr-[500px] xl:pt-[60px]'>
                            {
                                Array.from({ length: 20 }, (_, index) => {
                                    let card = null;
                                    
                                    // First slot shows pending card if available
                                    if (index === 0 && pendingCard) {
                                        card = pendingCard;
                                        console.log('Slot 0 - Pending card:', card);
                                    } else {
                                        // Other slots show collected cards (offset by 1 if pending card exists)
                                        const cardIndex = pendingCard ? index - 1 : index;
                                        card = collectedCards[cardIndex];
                                        if (card) {
                                            console.log(`Slot ${index} - Collected card:`, card);
                                        }
                                    }
                                    
                                    // Show only 3 rows (15 cards) when width is 1280px
                                    const shouldShow = windowWidth === 1280 ? index < 15 : true;
                                    
                                    return (
                                        <div 
                                            key={index} 
                                            className={`w-[50px] lg:w-[100px] xl:w-[70px] h-auto relative ${
                                                !shouldShow ? 'hidden' : ''
                                            }`}
                                        >
                                            {card ? (
                                                <div 
                                                    className='w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80'
                                                    onClick={() => handleCardClick(card)}
                                                >
                                                    <img 
                                                        src={getCardImage(card)} 
                                                        alt={card.name}
                                                        className='w-full h-full object-contain'
                                                    />
                                                </div>
                                            ) : (
                                                <img src={empty_item} alt="empty_item" className='w-full h-auto'/>
                                            )}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-center items-center gap-3 mt-[20px] xl:pr-[450px] xl:gap-15'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
                            <img src={possession} alt="possession" className='w-full h-auto'/>
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
                            <img src={filter} alt="filter" className='w-full h-auto'/>
                        </div>
                    </div>
                </main>
                <footer className='w-full h-1/20 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-0 lg:bottom-5'>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={home} alt="home" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={character} alt="character" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={ticket} alt="ticket" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={battle} alt="battle" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={clan} alt="clan" className='w-full h-auto'/>
                    </div>
                </footer>
            </div>
        </div>
    )
}
