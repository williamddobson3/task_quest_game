import React from "react";
import background_tablet from '../../assets/background_tablet.png';
import enemy from '../../assets/enemy.png';
import hero_man from '../../assets/hero_man.png';
import hero_woman from '../../assets/hero_woman.png';
import hero_other from '../../assets/hero_other.png';
import choice from '../../assets/choice.png';
import character_tutorial from '../../assets/character_tutorial.png';
import next from '../../assets/next.png';

export default function ChracterTutorial() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-full h-screen flex justify-center items-center  opacity-50">
        <div className="w-full h-screen flex justify-center items-center">
          <img src={background_tablet} alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
          <div className="w-auto xl:w-full h-auto flex xl:flex-col-reverse justify-end items-start flex-col gap-5 ">
            <div className="w-auto h-auto xl:w-1/2 xl:ml-60 flex flex-col justify-center items-center xl:items-between ">
              <img src={enemy} alt="" className=" w-[150px] lg:w-[450px] xl:w-[350px] h-[200px] lg:h-[500px] xl:h-[400px] " />
              <img src={choice} alt="" className=" w-[100px] h-auto lg:w-[200px] xl:w-[130px] " />
            </div>
            <div className="w-auto xl:w-1/2 xl:mr-20  h-auto flex flex-col justify-center items-center xl:mb-[-140px]">
              <img src={hero_man} alt="" className="w-[150px] lg:w-[450px] xl:w-[350px] h-[200px] lg:h-[500px] xl:h-[400px] opacity-0 " />
              <img src={choice} alt="" className=" w-[100px] h-auto lg:w-[200px] xl:w-[130px]   " />
            </div>
          </div>
          <div className="w-auto xl:w-full h-auto flex xl:flex-col-reverse justify-end items-start flex-col gap-5 ">
            <div className="w-auto h-auto xl:w-1/2 xl:ml-60 flex flex-col xl:m5-[100px] justify-center items-center xl:items-between ">
              <img src={hero_other} alt="" className=" w-[150px] lg:w-[450px] xl:w-[350px] h-[200px] lg:h-[500px] xl:h-[400px] " />
              <img src={choice} alt="" className=" w-[100px] h-auto lg:w-[200px] xl:w-[130px] " />
            </div>
            <div className="w-auto xl:w-1/2 xl:mr-20  h-auto flex flex-col justify-center items-center xl:mb-[-140px]">
              <img src={hero_woman} alt="" className="w-[150px] lg:w-[450px] xl:w-[350px] h-[200px] lg:h-[500px] xl:h-[400px] " />
              <img src={choice} alt="" className=" w-[100px] h-auto lg:w-[200px] xl:w-[130px]   " />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-full z-[100] absolute '>
        <div className='w-[330px] lg:w-[700px] xl:w-[600px] absolute top-40 lg:top-50 xl:top-30 left-10 lg:left-40 xl:left-140 flex justify-center items-center '>
          <img src={character_tutorial} alt="" className='w-full h-auto ' />
        </div>
        <div className='w-[180px] lg:w-[500px] xl:w-[400px] absolute top-110 lg:top-195 xl:top-0 left-5 xl:left-0 flex justify-center items-center '>
          <img src={hero_man} alt="" />
        </div>
        <div className='w-[150px] lg:w-[300px] xl:w-[200px] absolute top-150 lg:top-280 xl:top-120 right-0 lg:right-10 xl:right-70 flex justify-center items-center '>
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  )
}
