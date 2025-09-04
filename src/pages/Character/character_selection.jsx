import React from "react";
import background_tablet from '../../assets/background_tablet.png';
import enemy from '../../assets/enemy.png';
import hero_man from '../../assets/hero_man.png';
import hero_woman from '../../assets/hero_woman.png';
import hero_other from '../../assets/hero_other.png';
import choice from '../../assets/choice.png';

export default function ChracterSelect() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
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
            <img src={hero_man} alt="" className="w-[150px] lg:w-[450px] xl:w-[350px] h-[200px] lg:h-[500px] xl:h-[400px] " />
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
  )
}
