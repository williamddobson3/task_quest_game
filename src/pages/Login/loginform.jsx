import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login_background_iphone from '../../assets/background_iphone.png';
import task_quest from '../../assets/task_quest.png';
import frame from '../../assets/frame.png';
import complete from '../../assets/complete.png';
import { StatManager } from '../../utils/statSystem';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleComplete = () => {
    if (userName.trim() === '') {
      alert('ユーザー名を入力してください');
      return;
    }

    // Check if user already has a username stored (returning user)
    const existingUser = localStorage.getItem('userName');
    
    // Save username to localStorage
    localStorage.setItem('userName', userName);

    if (existingUser) {
      // User already exists, go to home
      navigate('/home');
    } else {
      // New user, initialize stats and go to tutorial
      StatManager.initializeStats('scholar'); // Default to scholar job
      navigate('/first-tutorial');
    }
  };

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
            <img src={task_quest} alt="task_quest" className='lg:max-w-300 w-full h-auto ' />
          </div>
          <div className='flex justify-center w-full'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full text-center '>
              <div className='flex flex-col gap-4 justify-center items-center w-full lg:w-1/2'>
                <p className="text-2xl sm:text-4xl lg:text-4xl font-bold">ユーザー名を決めよう!!</p>
                <p className='text-2xl sm:text-4xl lg:text-4xl font-bold'> ひらがな・カタカナ・英数字 <br /> が使えます</p>
              </div>
              <div className='flex flex-col gap-2.5 justify-center items-center w-4/5 lg:w-1/2 flex-1 mt-8'>
                <div className='relative max-w-90 w-full'>
                  <img src={frame} alt="task_quest" className='w-full h-auto task_quest' />
                  <input 
                    type="text" 
                    placeholder='ユーザー名' 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-10 text-center text-lg bg-transparent border-none outline-none user_name' 
                  />
                </div>
                <img 
                  src={complete} 
                  alt="complete" 
                  className='max-w-50 w-full h-auto complete cursor-pointer hover:opacity-80' 
                  onClick={handleComplete}
                />
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
