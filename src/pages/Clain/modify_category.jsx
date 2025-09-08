import React from "react";
import { useNavigate } from "react-router-dom";
import ModifySelection from "./modify_selection";
import back from '../../assets/back.png';
import part_select from '../../assets/part_select.png';
import filter_box from '../../assets/filter_box.png';
import serious_type from '../../assets/serious_type.png';
import self_type from '../../assets/self_type.png';
import task_type from '../../assets/task_type.png';
import easy_type from '../../assets/easy_type.png';
import study_intensive from '../../assets/study_intensive.png';
import muscle_type from '../../assets/muscle_type.png';


export default function ModifyCategory() {
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate('/modify-selection');
  };

  // Handle category selection
  const handleCategoryClick = (categoryId) => {
    // Save selected category to localStorage for modify-selection page
    localStorage.setItem('selectedCategory', categoryId);
    
    // Navigate back to modify-selection page
    navigate('/modify-selection');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center absolute overflow-hidden z-[-1] opacity-50">
        <ModifySelection />
      </div>
      <div className="w-full h-full flex z-[1] absolute left-0 top-0 ">
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img
            src={back}
            alt=""
            className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80'
            onClick={handleBackClick}
          />
        </div>
        <div className="absolute top-35 lg:top-80 xl:top-50 left-0 w-full h-full flex justify-center items-center">
          <div className='w-full lg:w-[800px] xl:w-[500px] h-auto flex justify-center items-center'>
            <img src={filter_box} alt="" className="lg:w-full lg:h-[700px]  xl:h-[400px]" />
          </div>
          <div className="absolute top-60 lg:top-120 xl:top-60 w-full h-auto flex flex-col gap-2 justify-center items-center ">
            <div className="w-[200px] lg:w-[500px] xl:w-[350px] h-auto flex justify-center items-center absolute top-[-110px] xl:left-[630px] lg:top-[-370px] xl:top-[-280px]   ">
              <img src={part_select} alt="" className="w-full h-[60px] lg:h-[150px] xl:h-[100px] " />
            </div>
            <div className="w-auto h-auto flex flex-col justify-center items-center gap-20 lg:gap-30 xl:gap-10">
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img
                  src={serious_type}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('hardcore')}
                />
                <img
                  src={self_type}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('growth')}
                />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img
                  src={task_type}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('task')}
                />
                <img
                  src={easy_type}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('casual')}
                />
              </div>
              <div className="w-[270px] lg:w-[550px] xl:w-[350px] h-auto flex justify-center items-center gap-5 lg:gap-20 xl:gap-10">
                <img
                  src={study_intensive}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('study')}
                />
                <img
                  src={muscle_type}
                  alt=""
                  className="w-1/2 h-auto cursor-pointer hover:opacity-80"
                  onClick={() => handleCategoryClick('fitness')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}