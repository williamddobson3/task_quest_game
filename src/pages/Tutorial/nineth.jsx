import React from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import gacha_room from '../../assets/gacha_room.png';
import battle_board from '../../assets/battle_board.png';
import enemy from '../../assets/enemy.png';
import progress from '../../assets/progress.png';
import magic from '../../assets/magic.png';
import attack from '../../assets/attack.png';
import defence from '../../assets/defence.png';
import nineth_tutorial from '../../assets/nine_tutorial.png';
import hero_man from '../../assets/hero_man.png';
import next from '../../assets/next.png';


export default function Nineth() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/tenth-tutorial');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div
        className="w-full h-screen overflow-hidden opacity-50"
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
      <div className='flex justify-center items-center w-full h-full z-[100] absolute '>
        <div className='w-[330px] lg:w-[700px] xl:w-[400px] absolute top-40 lg:top-50 xl:top-50 left-10 lg:left-40 xl:left-100 flex justify-center items-center '>
          <img src={nineth_tutorial} alt="" className='w-full h-auto ' />
        </div>
        <div className='w-[250px] lg:w-[500px] xl:w-[400px] absolute top-120 lg:top-200 xl:top-90 left-0 xl:left-10 flex justify-center items-center '>
          <img src={hero_man} alt="" />
        </div>
        <div className='w-[150px] lg:w-[300px] xl:w-[200px] absolute top-150 lg:top-280 xl:top-150 right-0 lg:right-10 flex justify-center items-center '>
          <img src={next} alt="" className='cursor-pointer hover:opacity-80' onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}
