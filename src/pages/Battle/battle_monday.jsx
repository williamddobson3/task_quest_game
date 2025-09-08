import React from 'react';
import { useNavigate } from 'react-router-dom';
import battle_monday from '../../assets/battle_monday.png';
import back from '../../assets/back.png';
import Main from '../Home/main';
import battle from '../../assets/battle.png';

export default function BattleMonday() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/home');
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
          <div className='w-full h-full opacity-50'>
            <Main />
          </div>
            <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 z-[100000000]'>
                <img src={battle_monday} alt="battle_monday" className='w-[350px] lg:w-[700px] xl:w-[600px] h-auto' />
                
                {/* Back Button */}
                <div className='absolute top-5 left-5 z-10 '>
                    <img 
                        src={back} 
                        alt="back" 
                        className='w-[150px] lg:w-[250px] xl:w-[200px] h-auto cursor-pointer hover:opacity-80'
                        onClick={handleBackClick}
                    />
                </div>
            </div>
            <div className='w-[65px] lg:w-[150px] xl:w-[80px] h-auto flex justify-center items-center absolute bottom-7 lg:bottom-5 xl:bottom-5 right-21 lg:right-57 xl:right-24'>
              <img src={battle} alt="" />
            </div>
        </div>
    )
}