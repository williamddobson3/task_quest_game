import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import once_pull from '../../assets/once_pull.png';
import ten_pull from '../../assets/ten_pull.png';
import { getRandomCard, getTenRandomCards } from '../../utils/cardData';

export default function GachaRoom() {
    const navigate = useNavigate();
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        // Load ticket count from localStorage
        const savedTickets = localStorage.getItem('gachaTickets');
        setTicketCount(savedTickets ? parseInt(savedTickets) : 0);
    }, []);

    const handleGearClick = () => {
        navigate('/setting');
    };

    const handleOneClick = () => {
        navigate('/gacha-buy');
    };

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleCharacterClick = () => {
        navigate('/character-room');
    };

    const handleTicketClick = () => {
        navigate('/gacha-room');
    };

    const handleBattleClick = () => {
        navigate('/battle-main');
    };

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

    const handleOncePullClick = () => {
        if (ticketCount >= 1) {
            // Deduct 1 ticket
            const newTicketCount = ticketCount - 1;
            setTicketCount(newTicketCount);
            localStorage.setItem('gachaTickets', newTicketCount.toString());
            
            // Generate random card
            const randomCard = getRandomCard();
            
            // Store the drawn card in localStorage for gacha-one page to display
            localStorage.setItem('drawnCard', JSON.stringify(randomCard));
            
            // Navigate to gacha-one page
            navigate('/gacha-one');
        } else {
            // Redirect to gacha-lack page if no tickets
            navigate('/gacha-lack');
        }
    };

    const handleTenPullClick = () => {
        if (ticketCount >= 10) {
            // Deduct 10 tickets
            const newTicketCount = ticketCount - 10;
            setTicketCount(newTicketCount);
            localStorage.setItem('gachaTickets', newTicketCount.toString());
            
            // Generate 10 random cards with guaranteed SR+ on 10th pull
            const drawnCards = getTenRandomCards();
            
            // Store the drawn cards in localStorage for gacha-ten page to display
            localStorage.setItem('drawnCards', JSON.stringify(drawnCards));
            
            // Navigate to gacha-ten page
            navigate('/gacha-ten');
        } else {
            // Redirect to gacha-lack page if insufficient tickets
            navigate('/gacha-lack');
        }
    };

    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${gacha_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
                <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
                    <div className=' h-full flex justify-start items-center'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
                            <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
                        </div>
                        <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto'>
                            <img 
                                src={imgear} 
                                alt="imgear" 
                                className='cursor-pointer hover:opacity-80'
                                onClick={handleGearClick}
                            />
                        </div>
                    </div>
                    <div className=' h-full flex justify-center items-center gap-3'>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                            <img 
                                src={one} 
                                alt="one" 
                                className='w-full cursor-pointer hover:opacity-80'
                                onClick={handleOneClick}
                            />
                        </div>
                        <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
                            <img src={alarm} alt="alarm" className='w-full' />
                        </div>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                            <img src={gacha} alt="gacha" className='w-full'/>
                        </div>
                    </div>
                </header>
                <main className='w-full h-full flex flex-col justify-center items-center pb-40'>
                    {/* Ticket Counter Display */}
                    <div className='absolute top-32 lg:top-40 xl:top-32 right-5 lg:right-10 xl:right-20 bg-black text-white px-4 py-2 rounded-lg'>
                        <p className='text-lg lg:text-2xl xl:text-xl font-bold'>
                            Tickets: {ticketCount}
                        </p>
                    </div>
                    
                    <div className='w-full flex flex-col justify-center items-center gap-10 h-full z-[1000000]'>
                        <img 
                            src={once_pull} 
                            alt="once_pull"  
                            className={`w-[200px] lg:w-[300px] xl:w-[200px] h-auto ${ticketCount >= 1 ? 'cursor-pointer' : ' cursor-not-allowed'}`}
                            onClick={handleOncePullClick}
                        />
                        <img 
                            src={ten_pull} 
                            alt="ten_pull" 
                            className={`w-[200px] lg:w-[300px] xl:w-[200px] h-auto ${ticketCount >= 10 ? 'cursor-pointer' : ' cursor-not-allowed'}`}
                            onClick={handleTenPullClick}
                        />
                    </div>
                </main>
                <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5'>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img 
                            src={home} 
                            alt="home" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleHomeClick}
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img 
                            src={character} 
                            alt="character" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleCharacterClick}
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img 
                            src={ticket} 
                            alt="ticket" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleTicketClick}
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img 
                            src={battle} 
                            alt="battle" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleBattleClick}
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img 
                            src={clan} 
                            alt="clan" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleClanClick}
                        />
                    </div>
                </footer>
            </div>
        </div>
    )
}
