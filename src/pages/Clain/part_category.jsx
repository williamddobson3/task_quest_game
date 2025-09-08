import React from "react";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  // Category mapping based on the specification
  const categoryMapping = {
    'serious_type': 'ガチ勢型',
    'self_type': '自己成長型', 
    'task_type': 'タスク消化型',
    'easy_type': 'ゆる習慣型',
    'study_intensive': '勉強集中型',
    'muscle_type': '筋トレ型'
  };

  // Handle back button
  const handleBackClick = () => {
    navigate('/part-selection');
  };

  // Handle category selection
  const handleCategoryClick = (categoryKey) => {
    const categoryName = categoryMapping[categoryKey];
    if (categoryName) {
      // Save selected category to localStorage
      localStorage.setItem('selectedClanCategory', categoryName);
      // Navigate back to part-selection with filter applied
      navigate('/part-selection');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="w-full h-full flex opacity-50 z-[-1] ">
        <PartSelection />
      </div>
      <div className="w-full h-full flex z-[1] absolute top-0 left-0 absolute ">
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img 
            src={back} 
            alt="" 
            className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' 
            onClick={handleBackClick}
          />
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
                <img 
                  src={serious_type} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('serious_type')}
                />
                <img 
                  src={self_type} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('self_type')}
                />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img 
                  src={task_type} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('task_type')}
                />
                <img 
                  src={easy_type} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('easy_type')}
                />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img 
                  src={study_intensive} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('study_intensive')}
                />
                <img 
                  src={muscle_type} 
                  alt="" 
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80" 
                  onClick={() => handleCategoryClick('muscle_type')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}