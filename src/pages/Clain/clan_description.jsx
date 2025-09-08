import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import back from '../../assets/back.png';
import muscle_type from '../../assets/muscle_type.png';
import clan_desc from '../../assets/clan_desc.png';
import partisipant from '../../assets/partisipant.png';
import background_tablet from '../../assets/background_tablet.png';
import serious_type from '../../assets/serious_type.png';
import self_type from '../../assets/self_type.png';
import task_type from '../../assets/task_type.png';
import easy_type from '../../assets/easy_type.png';
import study_intensive from '../../assets/study_intensive.png';
import filter_box from '../../assets/filter_box.png';


export default function ClanDescription() {
  const navigate = useNavigate();
  const [clan, setClan] = useState(null);

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
    // Load selected clan from localStorage
    const loadClan = () => {
      try {
        const selectedClan = localStorage.getItem('selectedClan');
        if (selectedClan) {
          const clanData = JSON.parse(selectedClan);
          setClan(clanData);
        } else {
          // If no clan selected, redirect back to part-selection
          navigate('/part-selection');
        }
      } catch (error) {
        console.error('Error loading clan:', error);
        navigate('/part-selection');
      }
    };
    loadClan();
  }, [navigate]);

  // Handle back button
  const handleBackClick = () => {
    localStorage.removeItem('selectedClan');
    navigate('/part-selection');
  };

  // Handle join clan (login/logout logic)
  const handleJoinClan = () => {
    if (!clan) return;

    const currentUser = localStorage.getItem('userName') || 'Player';
    const userClan = localStorage.getItem('userClan');
    
    // Check if user is already logged into a clan
    if (userClan) {
      // User is already logged into a clan
      const currentUserClan = JSON.parse(userClan);
      
      // Check if user is the leader of their current clan
      if (currentUserClan.leaderId === currentUser) {
        // User is a leader - redirect to clan-leader
        navigate('/clan-leader');
      } else {
        // User is a member - redirect to clan-member
        navigate('/clan-member');
      }
    } else {
      // User is not logged into any clan (logout state)
      
      // Check if user is the leader of the viewed clan
      if (clan.leaderId === currentUser) {
        // User is the leader of this clan - login and redirect to clan-leader
        localStorage.setItem('userClan', JSON.stringify(clan));
        alert(`クラン「${clan.name}」にログインしました！`);
        navigate('/clan-leader');
      } else {
        // User is not the leader - check if they can join as member
        if (clan.members.includes(currentUser)) {
          // User is already a member of this clan - login and redirect to clan-member
          localStorage.setItem('userClan', JSON.stringify(clan));
          alert(`クラン「${clan.name}」にログインしました！`);
          navigate('/clan-member');
        } else {
          // User is not a member - try to join the clan
          if (clan.members.length >= clan.maxMembers) {
            alert('このクランは満員です。');
            return;
          }
          
          if (clan.joinMethod === 'free') {
            // Free join - add user immediately
            const updatedClan = {
              ...clan,
              members: [...clan.members, currentUser]
            };
            
            // Update clan in localStorage
            const clanList = JSON.parse(localStorage.getItem('clanList') || '[]');
            const updatedClans = clanList.map(c => c.id === clan.id ? updatedClan : c);
            localStorage.setItem('clanList', JSON.stringify(updatedClans));
            localStorage.setItem('userClan', JSON.stringify(updatedClan));
            
            alert(`クラン「${clan.name}」に参加しました！`);
            navigate('/clan-member');
          } else {
            // Approval required - show message
            alert(`クラン「${clan.name}」への参加申請を送信しました。リーダーの承認をお待ちください。`);
          }
        }
      }
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
      <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0 z-[100000]'>
        <img 
          src={back} 
          alt="" 
          className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' 
          onClick={handleBackClick}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center z-[-1] ">
          <img src={background_tablet} alt="" className="w-full h-full" />
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center gap-5 absolute top-0 left-0" >
          <div className="text-[40px] lg:text-[100px] font-bold " >
            <p>クラン詳細</p>
          </div>
          <div className="w-[400px] lg:w-[900px] xl:w-[500px] h-auto flex justify-center xl:justify-between items-center xl:mr-100" >
            <img 
              src={categoryMapping[clan.category] || muscle_type} 
              alt="" 
              className="w-[120px] lg:w-[350px] xl:w-[200px] h-auto " 
            />
            <p className="text-[40px] lg:text-[100px] xl:text-[50px] font-bold text-white ">{clan.name}</p>
          </div>
          <div className="w-[300px] lg:w-[900px] xl:w-[500px] h-auto flex justify-center items-center xl:mr-100 relative">
            <img src={filter_box} alt="" className="w-full h-auto" />
            {/* Clan information overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <div className="text-center space-y-4">
                <div className="text-[16px] lg:text-[50px] xl:text-[35px] font-bold">
                  <p>カテゴリ: {clan.category}</p>
                  <p>活動頻度: {activityLevelNames[clan.activityLevel]}</p>
                  <p>参加方式: {joinMethodNames[clan.joinMethod]}</p>
                  <p>メンバー数: {clan.members.length}/{clan.maxMembers}人</p>
                  <p>リーダー: {clan.leaderId}</p>
                </div>
                {clan.description && (
                  <div className="text-[12px] lg:text-[18px] xl:text-[16px] mt-4 max-w-[250px] lg:max-w-[600px] xl:max-w-[400px]">
                    <p className="font-bold mb-2">説明:</p>
                    <p className="text-left">{clan.description}</p>
                  </div>
                )}
                {clan.discordUrl && (
                  <div className="text-[12px] lg:text-[18px] xl:text-[16px] mt-2">
                    <p className="font-bold">Discord: {clan.discordUrl}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-[150px] lg:w-[500px] xl:w-[300px] h-auto flex justify-center items-center xl:absolute xl:right-10 xl:bottom-10">
            <img 
              src={partisipant} 
              alt="" 
              className="cursor-pointer hover:opacity-80"
              onClick={handleJoinClan}
            />
          </div>
        </div>
      </div>
    </div>
  )
}