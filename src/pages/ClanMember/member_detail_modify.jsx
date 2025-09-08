import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Home/main';
import muscle_type from '../../assets/muscle_type.png';
import member from '../../assets/member.png';
import process from '../../assets/process.png';
import clan_mem from '../../assets/clan_mem.png';
import quit from '../../assets/quit.png';
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
import clain from '../../assets/clan.png';
import name_job from '../../assets/name_job.png';
import star from '../../assets/star.png';
import serious_type from '../../assets/serious_type.png';
import self_type from '../../assets/self_type.png';
import task_type from '../../assets/task_type.png';
import easy_type from '../../assets/easy_type.png';
import study_intensive from '../../assets/study_intensive.png';
import back from '../../assets/back.png';
import frame from '../../assets/frame.png';
import delete_member from '../../assets/delete_member.png';
import ModifySelection from '../Clain/modify_selection';


export default function MemberDetailModify() {
  const navigate = useNavigate();
  const [clan, setClan] = useState(null);
  const [userName, setUserName] = useState('');
  const [ticketCount, setTicketCount] = useState(0);

  // Category mapping for display
  const categoryMapping = {
    'ガチ勢型': serious_type,
    '自己成長型': self_type,
    'タスク消化型': task_type,
    'ゆる習慣型': easy_type,
    '勉強集中型': study_intensive,
    '筋トレ型': muscle_type
  };

  useEffect(() => {
    // Load user clan and username
    const loadClanData = () => {
      try {
        const userClan = localStorage.getItem('userClan');
        const userName = localStorage.getItem('userName') || 'Player';
        const gachaTickets = parseInt(localStorage.getItem('gachaTickets') || '0');

        if (userClan) {
          const clanData = JSON.parse(userClan);
          setClan(clanData);
          setUserName(userName);
          setTicketCount(gachaTickets);
        } else {
          // If no clan, redirect to clan-main
          navigate('/clain-main');
        }
      } catch (error) {
        console.error('Error loading clan data:', error);
        navigate('/clain-main');
      }
    };
    loadClanData();
  }, [navigate]);

  // Handle navigation
  const handleHomeClick = () => navigate('/home');
  const handleCharacterClick = () => navigate('/character-room');
  const handleTicketClick = () => navigate('/gacha-room');
  const handleBattleClick = () => navigate('/battle-main');
  const handleClanClick = () => {
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
  const handleGearClick = () => navigate('/setting');
  const handleOneClick = () => {
    const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
    const newTickets = currentTickets + 1;
    localStorage.setItem('gachaTickets', newTickets.toString());
    setTicketCount(newTickets);
  };
  const handleBackClick = () => {
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

  if (!clan) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p>クラン情報を読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
     
      <div className='w-full h-full flex justify-center items-center absolute '>
        <div
          className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
          style={{
            backgroundImage: `url(${login_background_iphone})`
          }}
        >
          <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
            <div className='w-vw h-full flex justify-start items-start absolute top-0 left-0 z-[100000]'>
              <img
                src={back}
                alt=""
                className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80'
                onClick={handleBackClick}
              />
            </div>
            <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5 opacity-0'>
              <div className=' h-full flex justify-start items-center'>
                <div className='flex flex-col justify-center items-center text-center'>
                  <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>{userName}</p>
                  <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
                </div>
                <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleGearClick}>
                  <img src={imgear} alt="imgear" />
                </div>
              </div>
              <div className=' h-full flex justify-center items-center gap-3'>
                <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto cursor-pointer hover:opacity-80' onClick={handleOneClick}>
                  <img src={one} alt="one" className='w-full' />
                </div>
                <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
                  <img src={alarm} alt="alarm" className='w-full' />
                </div>
                <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto relative'>
                  <img src={gacha} alt="gacha" className='w-full' />
                  <div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2  font-bold text-lg lg:text-4xl xl:text-2xl text-center'>
                    {ticketCount}
                  </div>
                </div>
              </div>
            </header>
            <main className='w-full flex flex-col justify-start items-center'>
              <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 gap-5">
                <div className="text-[35px] lg:text-[90px] font-bold  opacity-0">
                  <p>{clan.name}</p>
                </div>
                <div className="w-auto h-auto flex flex-col xl:flex-row justify-center items-center xl:gap-40 gap-5">
                  <div className='w-[200px] lg:w-[900px] xl:w-[300px] h-auto flex flex-col lg:flex-row xl:flex-col justify-center items-center gap-5'>
                    <div className="w-[300px] lg:w-[900px] xl:w-[300px] h-auto flex xl:flex-col justify-center items-center lg:gap-10">
                      <img src={categoryMapping[clan.category] || muscle_type} alt="" className='w-1/2 lg:w-[300px] h-auto opacity-0' />
                      <img src={member} alt="" className='w-1/2 h-auto lg:w-[300px] lg:mr-150 xl:mr-0 xl:ml-400 xl:mb-80' />
                    </div>
                    <div className='w-[150px] lg:w-[400px] xl:w-[300px] h-auto flex justify-center items-center  opacity-0'>
                      <img src={process} alt="" />
                    </div>
                  </div>
                  <div className='w-[300px] lg:w-[900px] xl:w-[500px]  h-auto flex justify-center items-start relative '>
                    <div className='absolute top-0 lg:top-[-10px] left-[-10px] lg:left-[50px] xl:left-[30px] w-[50px] lg:w-[170px] xl:w-[70px] '>
                      <img src={star} alt="" />
                    </div>
                    <div className='w-[200px] lg:w-[500px] xl:w-[250px] space-y-2'>
                      {clan.members.map((memberName, index) => (
                        <div key={index} className="relative flex">
                          <img src={frame} alt="" className="w-full h-auto" />
                          <div className="absolute inset-0 flex items-center justify-center ">
                            <div className="text-center flex justify-center items-center">
                              <p className="text-[20px] lg:text-[46px] xl:text-[30px] font-bold">{memberName}</p>
                              <p className="text-[20px] lg:text-[46px] xl:text-[30px] font-bold">+</p>
                              <p className="text-[20px] lg:text-[46px] xl:text-[30px]">
                                {memberName === clan.leaderId ? 'リーダー' : 'メンバー'}
                              </p>
                            </div>
                          </div>
                          {memberName !== clan.leaderId && (
                            <div className=' w-[70px] lg:w-[200px] xl:w-[130px] h-[50px] cursor-pointer hover:opacity-80 z-[1000000] absolute right-[-80px] lg:right-[-220px] xl:right-[-180px] top-[15px]  ' >
                              <img src={delete_member} alt="" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5 opacity-0'>
              <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleHomeClick}>
                <img src={home} alt="home" className='w-full h-auto' />
              </div>
              <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleCharacterClick}>
                <img src={character} alt="character" className='w-full h-auto' />
              </div>
              <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleTicketClick}>
                <img src={ticket} alt="ticket" className='w-full h-auto' />
              </div>
              <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleBattleClick}>
                <img src={battle} alt="battle" className='w-full h-auto' />
              </div>
              <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleClanClick}>
                <img src={clain} alt="clan" className='w-full h-auto' />
              </div>
            </footer>
          </div>
        </div>
      </div>

    </div >
  )
}

