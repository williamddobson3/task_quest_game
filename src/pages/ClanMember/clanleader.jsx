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
import Clan from '../../assets/clan.png';
import serious_type from '../../assets/serious_type.png';
import self_type from '../../assets/self_type.png';
import task_type from '../../assets/task_type.png';
import easy_type from '../../assets/easy_type.png';
import study_intensive from '../../assets/study_intensive.png';
import board from '../../assets/board.png';

export default function ClanLeader() {
  const navigate = useNavigate();
  const [clan, setClan] = useState(null);
  const [userName, setUserName] = useState('');

  // Category mapping for display
  const categoryMapping = {
    'ガチ勢型': serious_type,
    '自己成長型': self_type,
    'タスク消化型': task_type,
    'ゆる習慣型': easy_type,
    '勉強集中型': study_intensive,
    '筋トレ型': muscle_type
  };

  // Activity level names
  const activityLevelNames = {
    'high': '高',
    'medium': '中',
    'low': '低'
  };

  // Join method names
  const joinMethodNames = {
    'free': '自由参加制',
    'approval': '承認制'
  };

  useEffect(() => {
    // Load user clan and username
    const loadClanData = () => {
      try {
        const userClan = localStorage.getItem('userClan');
        const userName = localStorage.getItem('userName') || 'Player';
        
        if (userClan) {
          const clanData = JSON.parse(userClan);
          setClan(clanData);
          setUserName(userName);
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

  // Handle quit clan (redirect to quit-member page)
  const handleQuitClan = () => {
    navigate('/quit-member');
  };

  // Handle navigation
  const handleHomeClick = () => navigate('/home');
  const handleCharacterClick = () => navigate('/character-room');
  const handleTicketClick = () => navigate('/gacha-room');
  const handleBattleClick = () => navigate('/battle-main');
  const handleClanClick = () => navigate('/clan-leader'); // Stay on same page
  const handleGearClick = () => navigate('/setting');
  const handleOneClick = () => {
    const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
    localStorage.setItem('gachaTickets', (currentTickets + 1).toString());
  };

  const handleMemberClick = () => {
    navigate('/member-detail');
  };

  const handleSettingClick = () => {
    navigate('/modify-selection');
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
      <div className='w-full h-full flex justify-center items-center'>
        <div
          className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
          style={{
            backgroundImage: `url(${login_background_iphone})`
          }}
        >
          <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
            <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
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
                <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                  <img src={gacha} alt="gacha" className='w-full' />
                </div>
              </div>
            </header>
            <main className='w-full flex flex-col justify-start items-center'>
              <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 gap-5">
                <div className="text-[35px] lg:text-[90px] font-bold">
                  <p>{clan.name}</p>
                </div>
                <div className="w-auto h-auto flex flex-col xl:flex-row justify-center items-center xl:gap-40">
                  <div className='w-[200px] lg:w-[900px] xl:w-[300px] h-auto flex flex-col lg:flex-row xl:flex-col justify-center items-center gap-5'>
                    <div className="w-[300px] lg:w-[900px] xl:w-[300px] h-auto flex xl:flex-col justify-center items-center lg:gap-10">
                      <img src={categoryMapping[clan.category] || muscle_type} alt="" className='w-1/2 lg:w-[300px] h-auto' />
                      <img src={member} alt="" className='w-1/2 h-auto lg:w-[300px] cursor-pointer hover:opacity-80' onClick={handleMemberClick} />
                    </div>
                    <div className='w-[150px] lg:w-[400px] xl:w-[300px] h-auto flex justify-center items-center'>
                      <img src={process} alt="" />
                    </div>
                  </div>
                  <div className='w-[300px] lg:w-[900px] xl:w-[500px]  h-auto flex justify-center items-center relative '>
                    <div className='w-full h-auto flex justify-center items-center'>
                      <img src={board} alt="" className='w-full h-auto' />
                    </div>
                      <div className="absolute top-7 lg:top-15 xl:top-10 right-9 lg:right-[-40px] xl:right-10 w-[30px] lg:w-[200px] xl:w-[130px] cursor-pointer hover:opacity-80 z-[1000000]" onClick={handleSettingClick}>
                        <img src={gear} alt="" className='setting' />
                      </div>
                    <div className="absolute bottom-10 lg:bottom-30 xl:bottom-15 right-7 lg:right-35 xl:right-15 w-[70px] lg:w-[200px] xl:w-[130px] cursor-pointer hover:opacity-80 z-[1000000]" onClick={handleQuitClan}>
                      <img src={quit} alt="" />
                    </div>
                    {/* Clan information overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                      <div className="text-left space-y-2">
                        <div className="text-[12px] lg:text-[40px] xl:text-[25px] font-bold">
                          <p>カテゴリ: {clan.category}</p>
                          <p>活動頻度: {activityLevelNames[clan.activityLevel]}</p>
                          <p>参加方式: {joinMethodNames[clan.joinMethod]}</p>
                          <p>メンバー数: {clan.members.length}/{clan.maxMembers}人</p>
                          <p>リーダー: {clan.leaderId}</p>
                        </div>
                        {clan.description && (
                          <div className="text-[10px] lg:text-[16px] xl:text-[12px] mt-2 max-w-[200px] lg:max-w-[600px] xl:max-w-[400px]">
                            <p className="font-bold mb-1">説明:</p>
                            <p className="text-left">{clan.description}</p>
                          </div>
                        )}
                        {clan.discordUrl && (
                          <div className="text-[10px] lg:text-[16px] xl:text-[12px] mt-1">
                            <p className="font-bold">Discord: {clan.discordUrl}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5'>
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
                <img src={Clan} alt="clan" className='w-full h-auto' />
              </div>
            </footer>
          </div>
        </div>
      </div>

    </div >
  )
}

