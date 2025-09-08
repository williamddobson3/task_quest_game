import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import login_background_iphone from '../../assets/background_iphone.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import task_not from '../../assets/task_not.png';
import gear from '../../assets/gear.png';
import hero_man from '../../assets/hero_man.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import process from '../../assets/process.png';
import task_archieve from '../../assets/task_archieve.png';
import back from '../../assets/back.png';
import task_all from '../../assets/task_all.png';

export default function TaskArchieve() {
  const navigate = useNavigate();

  useEffect(() => {
    // Award clan task completion rewards
    const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
    localStorage.setItem('gachaTickets', (currentTickets + 5).toString());
    
    // Show success message
    alert('クランタスク達成！全メンバーにガチャ券×5を配布しました！');
  }, []);

  const handleBackClick = () => {
    // Return to appropriate clan page based on user role
    const userClan = localStorage.getItem('userClan');
    if (userClan) {
      const clanData = JSON.parse(userClan);
      const currentUser = localStorage.getItem('userName') || 'Player';
      
      if (clanData.leaderId === currentUser) {
        navigate('/clan-leader');
      } else {
        navigate('/clan-member');
      }
    } else {
      navigate('/clain-main');
    }
  };

  return (
    <div
      className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
      style={{
        backgroundImage: `url(${login_background_iphone})`
      }}
    >
      <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
        <main className='w-full flex flex-col justify-start items-center'>
          <div className='w-[120px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center absolute top-0 left-0 cursor-pointer hover:opacity-80' onClick={handleBackClick}>
            <img src={back} alt="back" />
          </div>
          <div className='w-full flex flex-col justify-start items-end lg:pl-20 xl:pl-[160px] xl:pt-0 gap-5'>
            <div className='text-[48px] lg:text-7xl xl:text-5xl font-bold text-white text-center mr-[50px] lg:mr-[300px] [-webkit-text-stroke:3px_brown] '>
              <p>クランタスク <br /> 達成!</p>
            </div>
            <div className='flex justify-center items-center w-[150px] lg:w-[300px] mr-[150px] lg:mr-[300px]  xl:mr-[700px] '>
              <img src={task_all} alt="" />
            </div>
            <div className='flex justify-center items-center gap-3 relative mr-10'>
              <div className='w-[300px] lg:w-[600px] xl:w-[500px] xl:absolute xl:top-[-100px] xl:right-[100px]   h-auto'>
                <img src={task_archieve} alt="work_progress" className='w-full h-auto' />
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
