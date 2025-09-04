import React from 'react';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import gacha_room from '../../assets/gacha_room.png';
import battle_board from '../../assets/battle_board.png';
import enemy from '../../assets/enemy.png';
import progress from '../../assets/progress.png';
import magic from '../../assets/magic.png';
import attack from '../../assets/attack.png';
import defence from '../../assets/defence.png';


export default function Battle() {
    return (
        <div
            className="w-full h-screen overflow-hidden"
        >
            <div className='w-full h-full flex justify-center items-center absolute top-0 left-0'>
                <img src={gacha_room} alt="" className='w-full h-full z-[-1]' />
            </div>
            <div className="w-full h-full flex flex-col xl:flex-row-reverse justify-center items-center gap-5">
                <div className="w-auto h-auto flex justify-center items-center">
                    <div className="w-[350px] lg:w-[650px] xl:w-[400px] h-auto">
                        <img src={battle_board} alt="" className='w-full h-auto' />
                    </div>
                    <div className=" h-auto flex text-[30px] lg:text-[60px] xl:text-[40px] absolute top-25 xl:top-95 lg:top-60 left-20 lg:left-75 xl:left-215 ">
                        <p>俺を超えてみろ!</p>
                    </div>
                </div>
                <div className="w-[250px] lg:w-[500px] xl:w-[400px] h-auto flex justify-center items-center ">
                    <img src={enemy} alt="" className='xl:w-full xl:h-auto' />
                </div>
                <div className="w-[200px] lg:w-[400px] h-auto flex justify-center items-center xl:absolute xl:top-10">
                    <img src={progress} alt="" />
                </div>
                <div className="w-full xl:w-auto h-auto flex flex-col justify-center items-center gap-3 xl:gap-5">
                    <div className="w-[150px] lg:w-[300px] h-auto flex justify-center items-center">
                        <img src={magic} alt="" className="w-full h-auto" />
                    </div>
                    <div className="w-[300px] lg:w-[600px] xl:w-[300px] h-auto flex xl:flex-col justify-center items-center gap-5">
                        <img src={attack} alt="" className="w-1/2 xl:w-full h-auto" />
                        <img src={defence} alt="" className="w-1/2 xl:w-full h-auto" />
                    </div>
                </div>
                <div className="w-[200px] lg:w-[400px] h-auto flex justify-center items-center xl:absolute xl:bottom-10">
                    <img src={progress} alt="" className="w-full h-auto" />
                </div>
            </div>
        </div>
    )
}
