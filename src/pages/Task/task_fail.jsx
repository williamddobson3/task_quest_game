import React from 'react';
import login_background_iphone from '../../assets/background_iphone.png';
import hero_man from '../../assets/hero_man.png';
import process from '../../assets/process.png';
import task_fail from '../../assets/task_fail.png';
import back from '../../assets/back.png';

export default function TaskFail() {
  return (
    <div
      className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
      style={{
        backgroundImage: `url(${login_background_iphone})`
      }}
    >
      <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
        <main className='w-full flex flex-col justify-start items-center mt-[150px] xl:mt-[0] '>
          <div className='w-[120px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center absolute top-0 left-0'>
            <img src={back} alt="back" />
          </div>
          <div className='w-full flex flex-col justify-start items-end lg:pl-20 xl:pl-[160px] xl:pt-0 gap-5'>
            <div className='flex justify-center items-center w-[150px] lg:w-[300px] mr-[150px] lg:mr-[300px]  xl:mr-[700px] '>
              <img src={process} alt="" />
            </div>
            <div className='flex justify-center items-center gap-3 relative mr-10'>
              <div className='w-[300px] lg:w-[600px] xl:w-[500px] xl:absolute xl:top-[-100px] xl:right-[100px]   h-auto'>
                <img src={task_fail} alt="work_progress" className='w-full h-auto' />
              </div>
            </div>

          </div>
          <div className='w-full flex justify-start items-start pl-5 xl:pl-[200px] xl:absolute xl:top-80'>
            <div className='w-[230px] lg:w-[600px] xl:w-[400px] h-auto'>
              <img src={hero_man} alt="hero_man" className='w-full h-auto' />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
