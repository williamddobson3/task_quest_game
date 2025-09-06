import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './main';
import card_free from '../../assets/card_free.png';
import board_phone from '../../assets/board_phone.png';
import complete from '../../assets/complete.png';
import back from '../../assets/back.png';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import first_job from '../../assets/first_job.png';
import second_job from '../../assets/second_job.png';
import third_job from '../../assets/third_job.png';
import fourth_job from '../../assets/fourth_job.png';
import fifth_job from '../../assets/fifth_job.png';
import card_two from '../../assets/card_two.png';
import { getRandomCard } from '../../utils/cardData';

export default function CardSun() {
    const navigate = useNavigate();
    const [randomCard, setRandomCard] = useState(null);

    useEffect(() => {
        // Check if user already got a card today
        const today = new Date().toDateString();
        const lastCardDate = localStorage.getItem('lastCardDate');
        
        if (lastCardDate === today) {
            // User already got a card today, show a message or redirect
            navigate('/home');
            return;
        }
        
        // Check if there's already a pending card for today
        const pendingCard = localStorage.getItem('pendingCard');
        const pendingCardDate = localStorage.getItem('pendingCardDate');
        
        if (pendingCard && pendingCardDate === today) {
            // Use the existing pending card
            setRandomCard(JSON.parse(pendingCard));
        } else {
            // Generate a new random card and save it as pending
            const card = getRandomCard();
            setRandomCard(card);
            localStorage.setItem('pendingCard', JSON.stringify(card));
            localStorage.setItem('pendingCardDate', today);
        }
    }, [navigate]);

    const handleBackClick = () => {
        navigate('/bonus-sun');
    };

    const handleCompleteClick = () => {
        // Save the random card to localStorage
        if (randomCard) {
            const savedCards = JSON.parse(localStorage.getItem('playerCards') || '[]');
            savedCards.push(randomCard);
            localStorage.setItem('playerCards', JSON.stringify(savedCards));
            
            // Mark that user got a card today
            const today = new Date().toDateString();
            localStorage.setItem('lastCardDate', today);
            
            // Clear the pending card since it's now collected
            localStorage.removeItem('pendingCard');
            localStorage.removeItem('pendingCardDate');
        }
        navigate('/home');
    };

    // Function to get the correct image based on card type
    const getCardImage = (card) => {
        if (!card) return card_free;
        
        const imageMap = {
            'first_job': first_job,
            'second_job': second_job,
            'third_job': third_job,
            'fourth_job': fourth_job,
            'fifth_job': fifth_job,
            'card_two': card_two,
            'card_free': card_free
        };
        
        return imageMap[card.image] || card_free;
    };

    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50'>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-start z-[100] opacity-100 pt-25 xl:gap-10'>
                <div className='w-[120px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center absolute top-5 left-5'>
                    <img src={back} alt="back" className='cursor-pointer hover:opacity-80' onClick={handleBackClick} />
                </div>
                <div className='w-[250px] lg:w-[600px] xl:w-[400px] h-auto flex justify-center items-center relative  '>
                    <img src={getCardImage(randomCard)} alt={randomCard?.name || "card"} className='w-full' />
                </div>
                <div className='w-full xl:w-auto h-auto flex flex-col justify-center items-center relative xl:mt-10'>
                    <div className='w-[360px] lg:w-[600px] xl:w-[500px] h-full flex justify-center items-center'>
                        <img src={board_phone} alt="" className='w-full' />
                    </div>
                    <div className=' w-[300px] lg:w-[500px] xl:w-[400px] text-[17px] lg:text-[30px] xl:text-[25px] h-full flex justify-center items-center absolute left-[40x] lg:left-65 xl:left-10 top-[-20px] lg:top-[-50px]'>
                        <p>
                            ログインボーナス獲得!! <br /> 
                            {randomCard ? `${randomCard.name}をゲット!!` : 'カードをゲット!!'} <br />
                            ({randomCard?.type === 'destiny' ? '運命カードは完了を押すと自動的に使用されます。' : 'カードは完了を押すとコレクションに追加されます。'}) <br />
                            カードアイコンタップでカード詳細
                        </p>
                    </div>
                    <div className='w-full h-full flex justify-center items-center relative gap-3'>
                        <div className='w-[70px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center '>
                            <img src={left} alt="left" />
                        </div>
                        <div className='w-[70px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center '>
                            <img src={right} alt="right" />
                        </div>
                    </div>
                </div>


                <div className='w-[180px] lg:w-[300px] h-auto flex justify-center items-center  xl:absolute xl:bottom-30 xl:right-0 pt-10 xl:opacity-50'>
                    <img src={complete} alt="complete" className='cursor-pointer hover:opacity-80' onClick={handleCompleteClick} />
                </div>
            </div>

        </div>
    )
}
