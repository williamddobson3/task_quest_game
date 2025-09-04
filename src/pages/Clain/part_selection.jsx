import React from 'react';
import background_tablet from '../../assets/background_tablet.png';
import part_select from '../../assets/part_select.png';
import sort from '../../assets/sort.png';
import part_one from '../../assets/part_one.png';
import part_two from '../../assets/part_two.png';
import train_type from '../../assets/train_type.png';
import back from '../../assets/back.png';

export default function PartSelection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='w-full h-full flex justify-center items-center absolute overflow-hidden z-[-1]'>
        <img src={background_tablet} alt="" className="w-full h-full" />
      </div>
      <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
        <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="w-[350px] lg:w-[900px] xl:w-[600px] h-auto flex justify-between items-center">
          <img src={part_select} alt="" className="w-[200px] lg:w-[500px] xl:w-[350px] h-[80px] lg:h-[150px] xl:h-[100px] " />
          <img src={sort} alt="" className="w-[120px] h-[80px] lg:w-[300px] xl:w-[200px] lg:h-[150px] xl:h-[100px] " />
        </div>
        <div className="w-[300px] lg:w-[800px] xl:w-[500px] h-auto flex flex-col justify-center items-center gap-10 ">
          <div className="w-full h-auto flex justify-center items-center relative">
            <img src={part_one} alt="" />
            <img src={train_type} alt="" className='absolute top-5 lg:top-15 xl:top-10 left-5 lg:left-15 xl:left-10 lg:w-[200px] xl:w-[150px] ' />
            <p className='absolute top-4 lg:top-10 left-30 lg:left-70 xl:left-60 z-[100] text-[30px] lg:text-[80px] xl:text-[40px] text-white font-bold '>クラン名</p>
          </div>
          <div className="w-full h-auto flex justify-center items-center relative">
            <img src={part_two} alt="" />
            <img src={train_type} alt="" className='absolute top-5 lg:top-15 xl:top-10 left-5 lg:left-15 xl:left-10 lg:w-[200px] xl:w-[150px] ' />
            <p className='absolute top-4 lg:top-10 left-30 lg:left-70 xl:left-60 z-[100] text-[30px] lg:text-[80px] xl:text-[40px] text-white font-bold '>クラン名</p>
          </div>
        </div>
      </div>
    </div>
  )
}
