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
// score image replaced with dynamic chart
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
import ten_pull from '../../assets/ten_pull.png';
import { getRandomCard } from '../../utils/cardData';
import { getCardImageUrl, getFallbackImageUrl } from '../../utils/cardImageLoader';
import StatDisplay from '../../components/StatDisplay';
import PentagonChart from '../../components/PentagonChart';
import { StatManager } from '../../utils/statSystem';
import { CardStatManager } from '../../utils/cardStatSystem';

// Card images - now using dynamic loading from /assets/cards/


export default function Room() {
    const navigate = useNavigate();
    const [collectedCards, setCollectedCards] = useState([]);
    const [pendingCard, setPendingCard] = useState(null);
    const [equippedCards, setEquippedCards] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [statRefreshTrigger, setStatRefreshTrigger] = useState(0);
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        // Load ticket count from localStorage
        const savedTickets = localStorage.getItem('gachaTickets');
        setTicketCount(savedTickets ? parseInt(savedTickets) : 0);

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
        
        // Load equipped cards from localStorage
        const savedEquippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
        console.log('Equipped cards:', savedEquippedCards);
        setEquippedCards(savedEquippedCards);
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
            
            // Reload equipped cards
            const savedEquippedCards = JSON.parse(localStorage.getItem('equippedCards') || '[]');
            setEquippedCards(savedEquippedCards);
            console.log('Refreshed equipped cards:', savedEquippedCards);
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

    const handleEmptyItemClick = () => {
        // Navigate to ticket-empty page when clicking empty item
        navigate('/ticket-empty');
    };

    const handleItemsBoxCardClick = (card) => {
        if (card) {
            // Special handling for job cards
            if (card.type === 'job') {
                // Check if there's already a job card in main_item slot
                const currentJobCard = equippedCards.find(equippedCard => equippedCard.type === 'job');
                
                if (currentJobCard) {
                    // There's already a job card in main_item, don't allow adding another
                    alert('You already have a job card equipped! Please unequip the current job card first.');
                    return;
                } else {
                    // No job card in main_item, equip this job card
                    const updatedEquippedCards = [...equippedCards];
                    
                    // If there's a card in the main_item slot, move it to the end
                    if (updatedEquippedCards.length > 0) {
                        const mainItemCard = updatedEquippedCards.shift();
                        updatedEquippedCards.push(mainItemCard);
                    }
                    
                    // Add the job card as the first card (main_item slot)
                    updatedEquippedCards.unshift(card);
                    
                    // Save to localStorage
                    localStorage.setItem('equippedCards', JSON.stringify(updatedEquippedCards));
                    
                    // Save job card to character's job in localStorage
                    localStorage.setItem('characterJob', JSON.stringify(card));
                    
                    // Update state
                    setEquippedCards(updatedEquippedCards);
                    setStatRefreshTrigger(prev => prev + 1); // Trigger stat refresh
                    
                    console.log('✅ Job card equipped from items-box:', card);
                    console.log('✅ Updated equipped cards:', updatedEquippedCards);
                    console.log('✅ Character job saved:', card);
                    
                    // Show success message
                    alert(`"${card.name}" has been equipped as your job card!`);
                    return;
                }
            }
            
            // For all cards (including job cards), show in ticket-ency page
            localStorage.setItem('selectedCard', JSON.stringify(card));
            navigate('/ticket-ency');
        }
    };

    const handleFilterClick = () => {
        // Navigate to ticket-filter page
        navigate('/ticket-filter');
    };

    const handleTicketClick = () => {
        // Navigate to gacha-room page
        navigate('/gacha-room');
    };

    const handleHomeClick = () => navigate('/home');
    const handleCharacterClick = () => navigate('/character-room');
    const handleBattleClick = () => navigate('/battle-main');
    const handleClanClick = () => {
        const userClan = localStorage.getItem('userClan');
        if (userClan) {
            const clanData = JSON.parse(userClan);
            const currentUser = localStorage.getItem('userName') || 'Player';
            
            if (clanData.leaderId === currentUser) {
                navigate('/clan-leader');
            } else {
                navigate('/clan-member');
            }
        } else {
            navigate('/clain-main');
        }
    };

    const handleOnePullClick = () => {
        // Check if player has at least 1 ticket
        const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
        
        if (currentTickets >= 1) {
            // Generate random card
            const randomCard = getRandomCard();
            
            // Store the drawn card in localStorage for gacha-one page to display
            localStorage.setItem('drawnCard', JSON.stringify(randomCard));
            
            console.log('New card generated:', randomCard);
            
            // Navigate to gacha-one page to show the result
            navigate('/gacha-one');
        } else {
            // Redirect to gacha-lack page if no tickets
            navigate('/gacha-lack');
        }
    };

    const handleTenPullClick = () => {
        // Check if player has enough tickets (10 or more)
        const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
        
        if (currentTickets >= 10) {
            // Generate 10 random cards
            const drawnCards = [];
            for (let i = 0; i < 10; i++) {
                drawnCards.push(getRandomCard());
            }
            
            // Store the drawn cards in localStorage for gacha-ten page to display
            localStorage.setItem('drawnCards', JSON.stringify(drawnCards));
            
            console.log('10 cards generated:', drawnCards);
            
            // Navigate to gacha-ten page to show the results
            navigate('/gacha-ten');
        } else {
            // Redirect to gacha-lack page if insufficient tickets
            navigate('/gacha-lack');
        }
    };

    // Test function for stat growth (for development/testing)
    const handleTestStatGrowth = () => {
        const testStats = StatManager.improveStats('study');
        alert('Test stat growth applied! Check the stat display.');
        // Force re-render of stat display
        setStatRefreshTrigger(prev => prev + 1);
    };

    // Function to refresh stats display
    const refreshStatsDisplay = () => {
        setStatRefreshTrigger(prev => prev + 1);
    };

    // Function to get the correct card image based on card data
    const getCardImage = (card) => {
        if (!card) {
            console.log('getCardImage: No card provided');
            return getFallbackImageUrl();
        }
        
        console.log('getCardImage: Card data:', card);
        console.log('getCardImage: Card image key:', card.image);
        
        // Try to get the dynamic image URL for cards from /assets/cards/
        const dynamicImageUrl = getCardImageUrl(card.image);
        if (dynamicImageUrl) {
            return dynamicImageUrl;
        }
        
        // Fallback to blank card if no image found
        console.log('getCardImage: Using fallback image');
        return getFallbackImageUrl();
    };

    // Get equipped cards for display in equipment slots (max 5 cards)
    // Ensure job cards are always in the main_item slot (first slot)
    const getDisplayCards = () => {
        const jobCard = equippedCards.find(card => card.type === 'job');
        const nonJobCards = equippedCards.filter(card => card.type !== 'job');
        
        return [
            jobCard || null,           // main_item slot - always job card if available
            nonJobCards[0] || null,    // first_item slot
            nonJobCards[1] || null,    // second_item slot
            nonJobCards[2] || null,    // third_item slot
            nonJobCards[3] || null     // fourth_item slot
        ];
    };

    // Function to get unique cards with their total quantities
    const getUniqueCardsWithQuantities = () => {
        const cardMap = new Map();
        
        // Process collected cards
        collectedCards.forEach(card => {
            if (card) {
                const key = card.id || card.name || card.image; // Use id, name, or image as unique identifier
                if (cardMap.has(key)) {
                    // If card already exists, add to quantity
                    const existingCard = cardMap.get(key);
                    existingCard.quantity = (existingCard.quantity || 1) + (card.quantity || 1);
                } else {
                    // Add new card with quantity
                    cardMap.set(key, {
                        ...card,
                        quantity: card.quantity || 1
                    });
                }
            }
        });
        
        // Process pending card if it exists
        if (pendingCard) {
            const key = pendingCard.id || pendingCard.name || pendingCard.image;
            if (cardMap.has(key)) {
                const existingCard = cardMap.get(key);
                existingCard.quantity = (existingCard.quantity || 1) + (pendingCard.quantity || 1);
            } else {
                cardMap.set(key, {
                    ...pendingCard,
                    quantity: pendingCard.quantity || 1
                });
            }
        }
        
        return Array.from(cardMap.values());
    };
    
    const displayCards = getDisplayCards();

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
                            <img src={one} alt="one" className='w-full one cursor-pointer hover:opacity-80' onClick={handleOnePullClick} />
                        </div>
                        <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
                            <img src={alarm} alt="alarm" className='w-full' />
                        </div>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto relative'>
                            <img src={gacha} alt="gacha" className='w-full cursor-pointer hover:opacity-80' onClick={handleTenPullClick}/>
                            <div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg lg:text-4xl xl:text-2xl text-center'>
                                {ticketCount}
                            </div>
                        </div>
                    </div>
                </header>
                <main className='w-full flex flex-col justify-start items-center'>
                    <div className='w-full flex flex-col justify-center items-end pl-12 lg:pl-20 lg:pt-20 xl:pr-[150px] xl:pt-20'>
                        <div className='flex justify-center items-center gap-3 relative w-[230px] lg:w-[550px] xl:w-[300px] h-[200px] lg:h-[400px] xl:h-[250px]'>
                            <PentagonChart refreshTrigger={statRefreshTrigger} />
                        </div>
                        {/* Ten Pull Button */}
                    </div>
                    <div className='w-full h-[250px] flex justify-end items-end xl:pl-[200px] relative pr-5 lg:pr-50 lg:mt-30 xl:mt-0 xl:pr-120'>
                        <div className='w-[250px] lg:w-[600px] xl:w-[500px] h-auto absolute lg:top-[-380px] xl:top-[-200px] left-0 xl:left-20'>
                            <img src={hero_man} alt="hero_man" className='w-full h-auto'/>
                        </div>
                        {/* Stat Display */}
                        <div className='absolute lg:top-[-200px] xl:top-[-50px] right-0 xl:right-20 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg opacity-0'>
                            <StatDisplay refreshTrigger={statRefreshTrigger} />
                            {/* Test button for development */}
                            <button 
                                onClick={handleTestStatGrowth}
                                className='mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600'
                            >
                                Test Stat Growth
                            </button>
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto xl:mb-50 relative'>
                            <img src={main_item} alt="main_item" className='w-full h-auto'/>
                            {displayCards[0] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 absolute'
                                    onClick={() => handleCardClick(displayCards[0])}
                                >
                                    <img 
                                        src={getCardImage(displayCards[0])} 
                                        alt={displayCards[0].name}
                                        className='w-3/4 h-3/4 object-contain'
                                    />
                                    {/* Show quantity if more than 1 */}
                                    {displayCards[0].quantity && displayCards[0].quantity > 1 && (
                                        <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white'>
                                            {displayCards[0].quantity}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-full h-[200px] lg:h-[400px] xl:h-[200px] flex justify-center items-center xl:justify-end xl:pr-10 xl:pb-60 gap-3 mt-[75px] lg:mt-[25px] xl:mt-0'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto relative'>
                            <img src={first_item} alt="first_item" className='w-full h-auto'/>
                            {displayCards[1] && (
                                <div 
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 absolute'
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
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 absolute'
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
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 absolute'
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
                                    className='absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 absolute   '
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
                                    const uniqueCards = getUniqueCardsWithQuantities();
                                    const card = uniqueCards[index] || null;
                                    
                                    if (card) {
                                        console.log(`Slot ${index} - Unique card:`, card);
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
                                                     className='w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 relative'
                                                     onClick={() => handleItemsBoxCardClick(card)}
                                                 >
                                                     <img 
                                                         src={getCardImage(card)} 
                                                         alt={card.name}
                                                         className='w-full h-full object-contain'
                                                     />
                                                     {/* Show quantity if more than 1 */}
                                                     {card.quantity && card.quantity > 1 && (
                                                         <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white'>
                                                             {card.quantity}
                                                         </div>
                                                     )}
                                                 </div>
                                             ) : (
                                                <img 
                                                    src={empty_item} 
                                                    alt="empty_item" 
                                                    className='w-full h-auto cursor-pointer hover:opacity-80'
                                                    onClick={handleEmptyItemClick}
                                                />
                                            )}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-center items-center gap-3 mt-[20px] xl:pr-[450px] xl:gap-15'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto  z-[100000]'>
                            <img src={possession} alt="possession" className='w-full h-auto'/>
                        </div>
                        <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto  z-[100000] '>
                            <img 
                                src={filter} 
                                alt="filter" 
                                className='w-full h-auto cursor-pointer '
                                onClick={handleFilterClick}
                            />
                        </div>
                    </div>
                </main>
                <footer className='w-full h-1/20 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-0 lg:bottom-5'>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleHomeClick}>
                        <img src={home} alt="home" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleCharacterClick}>
                        <img src={character} alt="character" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleTicketClick}>
                        <img 
                            src={ticket} 
                            alt="ticket" 
                            className='w-full h-auto'
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleBattleClick}>
                        <img src={battle} alt="battle" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleClanClick}>
                        <img src={clan} alt="clan" className='w-full h-auto'/>
                    </div>
                </footer>
            </div>
        </div>
    )
}
