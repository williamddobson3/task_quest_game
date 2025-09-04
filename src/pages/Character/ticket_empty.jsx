import React from 'react';
import Room from './room';
import card from '../../assets/card.png';
import use from '../../assets/use.png';
import remove from '../../assets/remove.png';
import board_phone from '../../assets/board_phone.png';
import possession from '../../assets/possession.png';
import empty_board from '../../assets/empty_board.png';
import back from '../../assets/back.png';

export default function Ticket() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center items-end opacity-50 absolute overflow-hidden'>
        <Room />
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center opacity-100 relative xl:flex-row'>
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
        </div>
        <div className='w-8/10 lg:w-6/10 xl:w-1/2 h-auto flex justify-center items-center lg:px-6 xl:pl-[100px]'>
          <img src={empty_board} alt="" className='w-full xl:w-[400px] h-full' />
        </div>
        <div className='w-full xl:w-1/2 h-auto flex justify-center xl:justify-start xl:h-[550px] items-center px-10 xl:flex-col'>
          <div className='w-full lg:w-6/10 xl:w-9/10 h-auto flex justify-center items-center xl:mr-60'>
            <img src={board_phone} alt="" className='w-full' />
          </div>
          <div className='absolute top-42 left-0 w-full h-full flex flex-col justify-center items-center gap-3 xl:top-[-120px] xl:pl-[350px]'>
            <div className='w-6/10 text-left text-[18px] lg:text-[30px] lg:w-4/10 lg:pt-100 xl:pt-0 xl:text-[25px] flex flex-col gap-2 lg:gap-7'>
              <p>
                ガチャを引いたり、条件を達成してカードをゲットしよう!!</p>
            </div>
          </div>
        </div>
        <div className='w-auto h-auto flex justify-center items-center block absolute top-[10px] right-[10px]'>
          <img src={possession} alt="possession" className='' />
        </div>
        <div className='w-full h-auto flex justify-center items-center gap-4 mt-5 xl:absolute xl:bottom-[200px] xl:right-[-225px] opacity-50'>
          <img src={use} alt="" className='w-[150px]' />
        </div>
      </div>
    </div>
  )
}
