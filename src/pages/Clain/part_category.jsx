import React from "react";
import PartSelection from "./part_selection";
import back from '../../assets/back.png';
import part_select from '../../assets/part_select.png';
import filter_box from '../../assets/filter_box.png';
import serious_type from '../../assets/serious_type.png';
import self_type from '../../assets/self_type.png';
import task_type from '../../assets/task_type.png';
import easy_type from '../../assets/easy_type.png';
import study_intensive from '../../assets/study_intensive.png';
import muscle_type from '../../assets/muscle_type.png';

export default function PartCategory() {
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
          <div className="absolute top-60 lg:top-120 xl:top-60 w-full h-auto flex flex-col gap-2 justify-center items-center ">
            <div className="w-[200px] lg:w-[500px] xl:w-[350px] h-auto flex justify-center items-center mr-[150px] lg:mr-[400px] xl:mr-[250px] absolute top-[-140px] lg:top-[-370px] xl:top-[-280px] ">
              <img src={part_select} alt="" className="w-full h-[80px] lg:h-[150px] xl:h-[100px] " />
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-20 lg:gap-30 xl:gap-10">
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={serious_type} alt="" className="w-1/2 h-auto" />
                <img src={self_type} alt="" className="w-1/2 h-auto" />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={task_type} alt="" className="w-1/2 h-auto" />
                <img src={easy_type} alt="" className="w-1/2 h-auto" />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img src={study_intensive} alt="" className="w-1/2 h-auto" />
                <img src={muscle_type} alt="" className="w-1/2 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}