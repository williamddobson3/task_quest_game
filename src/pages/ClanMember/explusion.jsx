import React from 'react';
import ok from '../../assets/ok.png';
import cancel from '../../assets/cancel.png';
import gacha_buy from '../../assets/gacha_buy.png';
import battle_alarm from '../../assets/battle_alarm.png';
import Main from '../Home/main';
import dissolve_sure from '../../assets/dissolve_sure.png';
import explusion from '../../assets/explusion.png';


export default function Explusion() {
  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-full absolute top-0 left-0 opacity-50 '>
        <Main />
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center z-[100] opacity-100  opacity-100'>
        <div className='w-full h-auto flex justify-center items-center relative '>
          <div className='w-[300px] lg:w-[800px] xl:w-[600px] h-[100px] flex justify-center items-center relative'>
            <img src={dissolve_sure} alt="" className='w-full' />
          </div>
          <div className='w-[80px] lg:w-[200px] h-[100px] flex justify-center items-center absolute top-15 lg:top-40 xl:top-30 left-40 lg:left-110 xl:left-140 gap-10'>
            <img src={explusion} alt="" className='w-full' />
            <img src={cancel} alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
