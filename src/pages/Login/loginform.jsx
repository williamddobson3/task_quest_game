import React from 'react';
import login_background_iphone from '../../assets/background_iphone.png';
import task_quest from '../../assets/task_quest.png';
import frame from '../../assets/frame.png';
import complete from '../../assets/complete.png';

export default function LoginForm() {
  return (
    <div
      className="w-full min-h-screen h-full lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
      style={{
        backgroundImage: `url(${login_background_iphone})`
      }}
    >
      <div className='w-full min-h-screen h-full flex flex-col justify-center items-center py-4'>

        <div className='flex flex-col gap-2.5 justify-center items-center lg:px-10 lg:pt-10 lg:pb-70 flex-1'>
          <div className='flex justify-center w-3/5 pt-[clamp(0px,5vh,50px)]'>
            <img src={task_quest} alt="task_quest" className='lg:max-w-300 w-full h-auto' />
          </div>
          <div className='flex justify-center w-full'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full text-center '>
              <div className='flex flex-col gap-4 justify-center items-center w-full lg:w-1/2'>
                <p className="text-2xl sm:text-4xl lg:text-4xl font-bold">ユーザー名を決めよう!!</p>
                <p className='text-2xl sm:text-4xl lg:text-4xl font-bold'> ひらがな・カタカナ・英数字 <br /> が使えます</p>
              </div>
              <div className='flex flex-col gap-2.5 justify-center items-center w-4/5 lg:w-1/2 flex-1 mt-8'>
                <img src={frame} alt="frame" className='max-w-90 w-full h-auto' />
                <img src={complete} alt="complete" className='max-w-50 w-full h-auto' />
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
