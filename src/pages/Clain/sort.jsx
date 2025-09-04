import React from "react";
import PartSelection from "./part_selection";
import back from '../../assets/back.png';
import part_select from '../../assets/part_select.png';
import filter_box from '../../assets/filter_box.png';
import sortbynum from '../../assets/sortbynum.png';
import sortbtn from '../../assets/sortbtn.png';

export default function Sort() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="w-full h-full flex opacity-50 z-[-1] ">
        <PartSelection />
      </div>
      <div className="w-full h-full flex z-[1] absolute top-0 left-0 absolute ">
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
        </div>
        <div className="absolute top-20 left-0 w-full h-full flex justify-center items-center">
          <div className='w-full lg:w-[800px] xl:w-[500px] h-auto flex justify-center items-center'>
            <img src={filter_box} alt="" className="lg:w-full" />
          </div>
          <div className="absolute top-55 lg:top-90 xl:top-40 w-full h-auto flex flex-col gap-2 justify-center items-center ">
            <div className="w-[130px] lg:w-[300px] xl:w-[200px] h-auto flex justify-center items-center mr-[-230px] lg:mr-[-600px] xl:mr-[-400px] absolute top-[-130px] lg:top-[-250px] xl:top-[-200px] ">
              <img src={sortbtn} alt="" className="w-full h-[80px] lg:h-[150px] xl:h-[100px] " />
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-5 lg:gap-10 xl:gap-5">
              <div className="w-[200px] lg:w-[400px] xl:w-[250px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={sortbynum} alt="" className="w-full h-auto" />
              </div>
              <div className="w-[200px] lg:w-[400px] xl:w-[250px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={sortbynum} alt="" />
              </div>
              <div className="w-[200px] lg:w-[400px] xl:w-[250px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={sortbynum} alt="" />
              </div>
              <div className="w-[200px] lg:w-[400px] xl:w-[250px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={sortbynum} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}