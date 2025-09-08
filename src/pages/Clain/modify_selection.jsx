import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background_tablet from '../../assets/background_tablet.png';
import part_select from '../../assets/part_select.png';
import sort from '../../assets/sort.png';
import part_one from '../../assets/part_one.png';
import part_two from '../../assets/part_two.png';
import train_type from '../../assets/train_type.png';
import back from '../../assets/back.png';
import frame from '../../assets/frame.png';
import unit from '../../assets/unit.png';
import system from '../../assets/system.png';
import board_phone from '../../assets/board_phone.png';
import production from '../../assets/production.png';
import radio from '../../assets/radio.png';
import quit_modify from '../../assets/quit_modify.png';

export default function ModifySelection() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    activityLevel: '',
    joinMethod: '',
    discordUrl: '',
    description: ''
  });

  // Load current clan data
  useEffect(() => {
    const loadClanData = () => {
      try {
        const userClan = localStorage.getItem('userClan');
        if (userClan) {
          const clanData = JSON.parse(userClan);
          setFormData({
            name: clanData.name || '',
            category: clanData.category || '',
            activityLevel: clanData.activityLevel || '',
            joinMethod: clanData.joinMethod || '',
            discordUrl: clanData.discordUrl || '',
            description: clanData.description || ''
          });
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

  // Clan categories
  const categories = [
    { id: 'study', name: '勉強集中型', description: '学習習慣に特化' },
    { id: 'fitness', name: '筋トレ型', description: '運動・健康重視' },
    { id: 'task', name: 'タスク消化型', description: 'とにかく実行重視' },
    { id: 'casual', name: 'ゆる習慣型', description: 'マイペース／スローペース' },
    { id: 'hardcore', name: 'ガチ勢型', description: '全タスク達成を目指す' },
    { id: 'growth', name: '自己成長型', description: '目標意識・改善重視' }
  ];

  // Activity levels
  const activityLevels = [
    { id: 'high', name: '高', description: '毎日タスク完了を目指す' },
    { id: 'medium', name: '中', description: '週5-6日程度の活動' },
    { id: 'low', name: '低', description: '週3-4日程度のゆるい活動' }
  ];

  // Join methods
  const joinMethods = [
    { id: 'free', name: '自由参加制', description: '誰でも即座に参加可能' },
    { id: 'approval', name: '承認制', description: 'リーダーの承認が必要' }
  ];

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle back button
  const handleBackClick = () => {
    navigate('/clan-leader');
  };

  // Handle quit modify button
  const handleQuitModifyClick = () => {
    navigate('/quit-create');
  };

  // Handle form submission (modify existing clan)
  const handleModifyClan = () => {
    // Validate required fields
    if (!formData.name.trim()) {
      alert('クラン名を入力してください');
      return;
    }
    if (!formData.category) {
      alert('カテゴリを選択してください');
      return;
    }
    if (!formData.activityLevel) {
      alert('活動頻度を選択してください');
      return;
    }
    if (!formData.joinMethod) {
      alert('参加方式を選択してください');
      return;
    }

    // Get current clan data
    const currentClan = localStorage.getItem('userClan');
    if (!currentClan) {
      alert('クラン情報が見つかりません。');
      navigate('/clain-main');
      return;
    }

    try {
      const clanData = JSON.parse(currentClan);
      
      // Update clan data with new form data
      const updatedClanData = {
        ...clanData,
        name: formData.name.trim(),
        category: formData.category,
        activityLevel: formData.activityLevel,
        joinMethod: formData.joinMethod,
        discordUrl: formData.discordUrl.trim(),
        description: formData.description.trim()
      };

      // Save updated clan data
      localStorage.setItem('userClan', JSON.stringify(updatedClanData));
      
      // Update in clan list
      const existingClans = JSON.parse(localStorage.getItem('clanList') || '[]');
      const clanIndex = existingClans.findIndex(clan => clan.id === clanData.id);
      if (clanIndex !== -1) {
        existingClans[clanIndex] = updatedClanData;
        localStorage.setItem('clanList', JSON.stringify(existingClans));
      }

      alert(`クラン「${formData.name}」の情報を更新しました！`);
      navigate('/clan-leader');
    } catch (error) {
      console.error('Error updating clan:', error);
      alert('クラン情報の更新に失敗しました。');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='w-full h-full flex justify-center items-center absolute overflow-hidden z-[-1]'>
        <img src={background_tablet} alt="" className="w-full h-full" />
      </div>
      <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
        <img 
          src={back} 
          alt="" 
          className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' 
          onClick={handleBackClick}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
          <div className="w-full h-auto flex flex-col xl:flex-row justify-center items-center xl:items-end gap-4">
            <div className='w-[300px] lg:w-[500px] xl:w-[300px] h-auto flex flex-col justify-center items-center relative'>
              <p className='text-left text-[30px] lg:text-[70px] font-bold w-full '>クラン名</p>
              <div className='w-full h-auto relative'>
                <img src={frame} alt="" className='w-full h-auto' />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="クラン名を入力"
                  maxLength={8}
                  className='absolute inset-0 w-full h-full bg-transparent border-none outline-none text-center text-[20px] lg:text-[40px] xl:text-[30px] font-bold placeholder-gray-500'
                />
              </div>
            </div>
            <div className="w-[200px] lg:w-[350px] xl:w-[300px] h-auto flex flex-col justify-center items-center relative">
              <p className='text-center text-[20px] lg:text-[40px] xl:text-[30px] font-bold mb-2'>カテゴリ</p>
              <div className='w-full h-auto relative'>
                <img src={frame} alt="" className='w-full h-auto' />
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className='absolute inset-0 w-full h-full bg-transparent border-none outline-none text-center text-[16px] lg:text-[30px] xl:text-[20px] font-bold appearance-none cursor-pointer'
                >
                  <option value="">カテゴリを選択</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full h-auto px-[10px] lg:px-[50px] xl:px-[270px] flex justify-between items-center xl:gap-5 ">
            <div className=" flex flex-col justify-start items-center relative">
              <p className="w-full lg:text-[50px] lg:ml-[40px] ">活動頻度</p>
              <div className='w-[200px] lg:w-[400px] h-auto flex justify-center items-center relative'>
                <img src={unit} alt="" className="w-full h-auto" />
                <div className='absolute top-3 lg:top-5 xl:top-5 left-9 lg:left-20 xl:left-20 flex justify-center items-center gap-8 lg:gap-14 xl:gap-15 '>
                  {activityLevels.map((level, index) => (
                    <div key={level.id} className="flex flex-col items-center">
                      <img 
                        src={radio} 
                        alt="" 
                        className={`lg:w-[60px] cursor-pointer hover:opacity-80 ${
                          formData.activityLevel === level.id ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => handleInputChange('activityLevel', level.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center w-[150px] lg:w-[400px] relative'>
              <img src={system} alt="" className='w-full h-auto' />
              <div className='absolute top-4 lg:top-12 xl:top-9 right-27 lg:right-75 xl:right-59 flex justify-center items-center flex-col lg:gap-3 xl:gap-0'>
                {joinMethods.map((method, index) => (
                  <div key={method.id} className="flex flex-col items-center">
                    <img 
                      src={radio} 
                      alt="" 
                      className={`lg:w-[60px] cursor-pointer hover:opacity-80 ${
                        formData.joinMethod === method.id ? 'opacity-100' : 'opacity-50'
                      }`}
                      onClick={() => handleInputChange('joinMethod', method.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex xl:flex-row flex-col justify-center xl:justify-center items-center xl:pl-[200px] xl:gap-5 ">
            <div className='w-[300px] lg:w-[500px] xl:w-[400px] h-auto flex relative'>
              <img src={board_phone} alt="" className="w-full h-auto" />
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                maxLength={200}
                className='absolute inset-2 w-full h-full bg-transparent border-none outline-none text-center text-[16px] lg:text-[30px] xl:text-[20px] font-bold placeholder-gray-500 resize-none p-8'
              />
            </div>
            <div className='flex flex-col justify-start items-center xl:items-start w-[200px] lg:w-[400px] xl:w-[500px] h-auto relative'>
              <p className="w-full lg:text-[30px] xl:w-auto xl:pl-[30px] ">Discord URL&nbsp;&nbsp;&nbsp;記入欄</p>
              <div className='w-full h-auto relative'>
                <img src={frame} alt="" className='w-full h-auto' />
                <input
                  type="url"
                  value={formData.discordUrl}
                  onChange={(e) => handleInputChange('discordUrl', e.target.value)}
                  placeholder="Discord招待リンク（任意）"
                  className='absolute inset-0 w-full h-full bg-transparent border-none outline-none text-center text-[16px] lg:text-[30px] xl:text-[20px] font-bold placeholder-gray-500'
                />
              </div>
            </div>
          </div>
          <div className='w-[250px] lg:w-[450px] xl:w-[300px] h-auto xl:ml-[900px] flex justify-center items-center gap-5 '>
            <img 
              src={production} 
              alt="" 
              className='w-1/2 h-auto cursor-pointer hover:opacity-80'
              onClick={handleModifyClan}
            />
            <img 
              src={quit_modify} 
              alt="" 
              className='w-1/2 h-auto cursor-pointer hover:opacity-80'
              onClick={handleQuitModifyClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
