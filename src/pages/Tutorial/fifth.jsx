
import React from 'react';
import task_input_panel from '../../assets/task_input_panel.png';
import work from '../../assets/work.png';
import study from '../../assets/study.png';
import life from '../../assets/life.png';
import health from '../../assets/health.png';
import socializing from '../../assets/socializing.png';
import add from '../../assets/add.png';
import board_phone from '../../assets/board_phone.png';
import back from '../../assets/back.png';
import fifth_tutorial from '../../assets/fifth_tutorial.png';
import fifth from '../../assets/fifth.png';
import hero_man from '../../assets/hero_man.png';
import next from '../../assets/next.png';
import complete from '../../assets/complete.png';
import delete_task from '../../assets/delete.png';
import archieve from '../../assets/archieve.png';


export default function Fifth() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-full h-screen flex justify-center items-center bg-[url('src/assets/background_iphone.png')] bg-cover bg-center relative opacity-50">
        <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
          <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
        </div>
        <div className="w-full xl:w-1/3 h-full flex flex-col justify-center items-center">
          <div className='w-[200px] lg:w-[400px] xl:w-full flex flex-col justify-between items-between xl:mr-60'>
            <div className='w-full text-left xl:text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
              <p>タスク&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className='w-full text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
              <p>の入力</p>
            </div>
          </div>
          <div className='w-9/10 lg:w-7/10 xl:w-full h-auto flex flex-col justify-center items-center relative xl:mr-60 gap-3'>
            <div className='w-full h-auto flex justify-center items-center'>
              <img src={task_input_panel} alt="" className='w-full h-auto' />
            </div>
            <div className='absolute top-0 left-0 w-full flex flex-col justify-center items-center z-100 pt-20 lg:pt-40 xl:pt-25 gap-2'>
              <div className='w-8/10 h-auto'>
                <img src={board_phone} alt="" className='w-full h-auto' />
                <textarea name="task" id="task" className='w-full h-auto bg-transparent border-none outline-none resize-none hidden'></textarea>
              </div>
              <div className='w-full h-auto flex flex-col justify-center items-center gap-2'>
                <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                  <img src={work} alt="" />
                  <img src={study} alt="" />
                  <img src={life} alt="" />
                </div>
                <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                  <img src={health} alt="" />
                  <img src={socializing} alt="" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 xl:absolute bottom-0 right-[-400px] gap-2 xl:gap-4 '>
              <div className='justify-center items-center gap-2 hidden xl:flex'>
                <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
              </div>
              <div className='flex justify-center items-center gap-2 xl:flex-col xl:gap-4'>
                <img src={complete} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                <img src={delete_task} alt="" className='w-[150px] lg:w-[200px] h-auto' />
              </div>
              <div className='flex justify-center items-center gap-2 xl:hidden'>
                <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-full z-[100] absolute '>
        <div className='w-[330px] lg:w-[700px] xl:w-[400px] absolute top-30 lg:top-50 xl:top-30 left-10 lg:left-40 xl:left-140 flex justify-center items-center flex-col gap-3 '>
          <img src={fifth} alt="" className='w-[200px] lg:w-[400px] xl:w-[300px] h-auto ' />
          <img src={fifth_tutorial} alt="" className='w-full h-auto lg:ml-[300px] lg:w-[600px] xl:ml-0' />
        </div>
        <div className='w-[250px] lg:w-[500px] xl:w-[400px] absolute top-120 lg:top-200 xl:top-90 left-0 xl:left-50 flex justify-center items-center '>
          <img src={hero_man} alt="" />
        </div>
        <div className='w-[150px] lg:w-[300px] xl:w-[200px] absolute top-150 lg:top-280 xl:top-150 right-0 lg:right-10 flex justify-center items-center '>
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  )
}
