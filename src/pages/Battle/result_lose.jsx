import React from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room from '../../assets/gacha_room.png';
import battle_board from '../../assets/battle_board.png';
import chief from '../../assets/chief.png';
import backward from '../../assets/backward.png';

export default function ResultLose() {
    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/home');
    };

    return (
        <div
            className="w-full h-screen overflow-hidden"
        >
            <div className='w-full h-full flex justify-center items-center absolute top-0 left-0'>
                <img src={gacha_room} alt="" className='w-full h-full z-[-1]' />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-15  xl:gap-5">
                <div className="w-[300px] lg:w-[500px] xl:w-[400px] h-auto flex justify-center items-center">
                    <img src={chief} alt="" className="w-full h-auto" />
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-[350px] lg:w-[650px] xl:w-[500px] h-auto flex justify-center items-center ">
                        <img src={battle_board} alt=""  className="w-full h-auto" />
                    </div>
                    <div className='flex flex-col justify-center items-center text-center text-[20px] lg:text-[40px] xl:text-[30px] xl:text-[20px] absolute'>
                        <p>まだまだ成長段階だ！</p>
                        <p>ガチャ券×1獲得！</p>
                    </div>
                </div>
                <div className="w-[250px] lg:w-[400px] xl:w-[300px] h-auto flex justify-center items-center pt-10 z-[100000]">
                    <img 
                        src={backward} 
                        alt="" 
                        className="w-full h-auto cursor-pointer hover:opacity-80"
                        onClick={handleBackwardClick}
                    />
                </div>
            </div>
        </div>
    )
}