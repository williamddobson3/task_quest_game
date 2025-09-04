import React from 'react';
import background_tablet from '../../assets/background_tablet.png';
import part_select from '../../assets/part_select.png';
import sort from '../../assets/sort.png';
import part_one from '../../assets/part_one.png';
import part_two from '../../assets/part_two.png';
import train_type from '../../assets/train_type.png';
import back from '../../assets/back.png';
import frame from '../../assets/frame.png';
import unit from '../../assets/unit.png';
import system from '../../assets/system.png';
import board_phone from '../../assets/board_phone.png';
import production from '../../assets/production.png';
import radio from '../../assets/radio.png';

export default function CreateSelection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='w-full h-full flex justify-center items-center absolute overflow-hidden z-[-1]'>
        <img src={background_tablet} alt="" className="w-full h-full" />
      </div>
      <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
        <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
          <div className="w-full h-auto flex flex-col xl:flex-row justify-center items-center xl:items-end gap-4">
            <div className='w-[300px] lg:w-[500px] xl:w-[300px] h-auto flex flex-col justify-center items-center  '>
              <p className='text-left text-[30px] lg:text-[70px] font-bold w-full '>クラン名</p>
              <div className='w-full h-auto'>
                <img src={frame} alt="" />
              </div>
            </div>
            <div className="w-[200px] lg:w-[350px] xl: h-auto flex justify-center items-center">
              <img src={part_select} alt="" />
            </div>
          </div>

          <div className="w-full h-auto px-[10px] lg:px-[50px] xl:px-[270px] flex justify-between items-center xl:gap-5 ">
            <div className=" flex flex-col justify-start items-center">
              <p className="w-full lg:text-[50px] lg:ml-[40px] ">活動頻度</p>
              <div className='w-[200px] lg:w-[400px] h-auto flex justify-center items-center'>
                <img src={unit} alt="" className="w-full h-auto" />
                <div className='absolute top-85 lg:top-158 xl:top-85 left-12 lg:left-32 xl:left-85 flex justify-center items-center gap-8 lg:gap-14 xl:gap-15 '>
                  <img src={radio} alt="" className='lg:w-[60px] ' />
                  <img src={radio} alt="" className='lg:w-[60px] ' />
                  <img src={radio} alt="" className='lg:w-[60px] ' />
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center w-[150px] lg:w-[400px] '>
              <img src={system} alt="" className='w-full h-auto' />
              <div className='absolute top-78 lg:top-140 xl:top-68 right-30 lg:right-85 xl:right-125 flex justify-center items-center flex-col lg:gap-3 xl:gap-0'>
                <img src={radio} alt="" className="lg:w-[60px] " />
                <img src={radio} alt="" className="lg:w-[60px] " />
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex xl:flex-row flex-col justify-center xl:justify-center items-center xl:pl-[200px] xl:gap-5 ">
            <div className='w-[300px] lg:w-[500px] xl:w-[400px] h-auto flex '>
              <img src={board_phone} alt="" className="w-full h-auto" />
            </div>
            <div className='flex flex-col justify-start items-center xl:items-start w-[200px] lg:w-[400px] xl:w-[500px] h-auto'>
              <p className="w-full lg:text-[30px] xl:w-auto xl:pl-[30px] ">Discord URL&nbsp;&nbsp;&nbsp;記入欄</p>
              <img src={frame} alt="" className='' />
            </div>
          </div>
          <div className='w-[250px] lg:w-[450px] xl:w-[300px] h-auto xl:ml-[900px] '>
            <img src={production} alt="" className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}
