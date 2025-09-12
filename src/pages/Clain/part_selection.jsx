import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background_tablet from '../../assets/background_tablet.png';
import part_select from '../../assets/part_select.png';
import sort from '../../assets/sort.png';
import part_one from '../../assets/part_one_again.png';
import part_two from '../../assets/part_two.png';
import train_type from '../../assets/train_type.png';
import back from '../../assets/back.png';

export default function PartSelection() {
  const navigate = useNavigate();
  const [clans, setClans] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // newest, members, category

  // Clan categories mapping
  const categoryNames = {
    'study': '勉強集中型',
    'fitness': '筋トレ型',
    'task': 'タスク消化型',
    'casual': 'ゆる習慣型',
    'hardcore': 'ガチ勢型',
    'growth': '自己成長型'
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

  const sortDisplayNames = {
    'members': 'メンバー数順',
    'activity': '活動頻度順',
    'newest': '新着順',
    'joinability': '加入しやすさ順',
    'category': 'カテゴリ順'
  };

  // Get display name for sort
  const getSortDisplayName = (sortValue) => {
    return sortDisplayNames[sortValue] || sortValue;
  };

  useEffect(() => {
    // Load clans from localStorage
    const loadClans = () => {
      try {
        const clanList = JSON.parse(localStorage.getItem('clanList') || '[]');
        console.log('Loaded clans:', clanList);
        setClans(clanList);
      } catch (error) {
        console.error('Error loading clans:', error);
        setClans([]);
      }
    };

    loadClans();
  }, []);

  // Reload clans when returning from category page
  useEffect(() => {
    const handleFocus = () => {
      const loadClans = () => {
        try {
          const clanList = JSON.parse(localStorage.getItem('clanList') || '[]');
          setClans(clanList);
        } catch (error) {
          console.error('Error loading clans:', error);
          setClans([]);
        }
      };
      loadClans();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Handle back button
  const handleBackClick = () => {
    navigate('/clain-main');
  };

  // Handle category click
  const handleCategoryClick = () => {
    navigate('/part-category');
  };

  // Handle clear filter
  const handleClearFilter = () => {
    localStorage.removeItem('selectedClanCategory');
    // Reload clans to refresh the display
    const loadClans = () => {
      try {
        const clanList = JSON.parse(localStorage.getItem('clanList') || '[]');
        setClans(clanList);
      } catch (error) {
        console.error('Error loading clans:', error);
        setClans([]);
      }
    };
    loadClans();
  };

  // Handle clear sort
  const handleClearSort = () => {
    localStorage.removeItem('selectedClanSort');
    // Reload clans to refresh the display
    const loadClans = () => {
      try {
        const clanList = JSON.parse(localStorage.getItem('clanList') || '[]');
        setClans(clanList);
      } catch (error) {
        console.error('Error loading clans:', error);
        setClans([]);
      }
    };
    loadClans();
  };

  // Handle sort click
  const handleSortClick = () => {
    navigate('/sort');
  };

  // Handle sort change
  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  // Filter and sort clans based on selected criteria
  const filteredAndSortedClans = [...clans]
    .filter(clan => {
      // Apply category filter if one is selected
      const selectedCategory = localStorage.getItem('selectedClanCategory');
      if (selectedCategory && selectedCategory !== 'all') {
        return clan.category === selectedCategory;
      }
      return true;
    })
    .sort((a, b) => {
      // Check for sort selection from sort page
      const selectedSort = localStorage.getItem('selectedClanSort');
      const currentSort = selectedSort || sortBy;
      
      switch (currentSort) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'members':
          return b.members.length - a.members.length;
        case 'activity':
          // Sort by activity level (高 > 中 > 低)
          const activityOrder = { '高': 3, '中': 2, '低': 1 };
          return (activityOrder[b.activityLevel] || 0) - (activityOrder[a.activityLevel] || 0);
        case 'joinability':
          // Sort by join method (自由参加制 > 承認制)
          const joinOrder = { 'free': 2, 'approval': 1 };
          return (joinOrder[b.joinMethod] || 0) - (joinOrder[a.joinMethod] || 0);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  // Handle clan click
  const handleClanClick = (clan) => {
    // Save selected clan to localStorage for clan-desc page
    localStorage.setItem('selectedClan', JSON.stringify(clan));
    // Navigate to clan description page
    navigate('/clan-desc');
  };

  // Handle train_type click
  const handleTrainTypeClick = (e) => {
    // Prevent event bubbling to avoid triggering clan click
    e.stopPropagation();
    // Navigate to task-progress page
    navigate('/task-progress');
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
        <div className="w-[350px] lg:w-[900px] xl:w-[600px] h-auto flex justify-between items-center">
          <div className="relative">
            <img 
              src={part_select} 
              alt="" 
              className="w-[200px] lg:w-[500px] xl:w-[350px] h-[80px] lg:h-[150px] xl:h-[100px] cursor-pointer hover:opacity-80" 
              onClick={handleCategoryClick}
            />
            {/* Show active filter indicator */}
            {localStorage.getItem('selectedClanCategory') && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                !
              </div>
            )}
          </div>
          <div className="relative">
            <img 
              src={sort} 
              alt="" 
              className="w-[120px] h-[80px] lg:w-[300px] xl:w-[200px] lg:h-[150px] xl:h-[100px] cursor-pointer hover:opacity-80" 
              onClick={handleSortClick}
            />
            {/* Show active sort indicator */}
            {localStorage.getItem('selectedClanSort') && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                !
              </div>
            )}
          </div>
        </div>
        {/* Show active filter info */}
        {localStorage.getItem('selectedClanCategory') && (
          <div className="w-[350px] lg:w-[900px] xl:w-[600px] h-auto flex justify-center items-center mb-2">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
              フィルター: {localStorage.getItem('selectedClanCategory')}
              <button 
                onClick={handleClearFilter}
                className="ml-2 bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs"
              >
                クリア
              </button>
            </div>
          </div>
        )}
        {/* Show active sort info */}
        {localStorage.getItem('selectedClanSort') && (
          <div className="w-[350px] lg:w-[900px] xl:w-[600px] h-auto flex justify-center items-center mb-2">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
              ソート: {getSortDisplayName(localStorage.getItem('selectedClanSort'))}
              <button 
                onClick={handleClearSort}
                className="ml-2 bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs"
              >
                クリア
              </button>
            </div>
          </div>
        )}
        <div className="w-[300px] lg:w-[800px] xl:w-[500px] h-auto flex flex-col justify-start items-center gap-10 max-h-[700px] overflow-y-auto">
          {filteredAndSortedClans.length === 0 ? (
            <div className="w-full h-auto flex justify-center items-center relative">
              <img src={part_one} alt="" className='lg:w-[800px] lg:h-auto' />
              <p className='absolute top-15 lg:top-40 xl:top-30 w-[250px] left-5 lg:w-full lg:left-0 xl:left-0 z-[100] text-[20px] lg:text-[40px] xl:text-[30px] font-bold text-center'>
                利用可能なクランがありません
              </p>
            </div>
          ) : (
            filteredAndSortedClans.map((clan, index) => (
              <div 
                key={clan.id} 
                className="w-full h-auto flex justify-center items-center relative cursor-pointer hover:opacity-80"
                onClick={() => handleClanClick(clan)}
              >
                <img src={index % 2 === 0 ? part_one : part_one} alt="" />
                <img 
                  src={train_type} 
                  alt="" 
                  className='absolute top-5 lg:top-15 xl:top-10 left-5 lg:left-15 xl:left-10 lg:w-[200px] xl:w-[150px] cursor-pointer hover:opacity-80' 
                  onClick={handleTrainTypeClick}
                />
                <div className='absolute top-4 lg:top-45 xl:top-25 left-30 lg:left-70 xl:left-40 z-[100]  font-bold'>
                  <p className='text-[20px] lg:text-[60px] xl:text-[30px] mb-1'>{clan.name}</p>
                  <p className='text-[12px] lg:text-[20px] xl:text-[16px] opacity-80'>
                    {categoryNames[clan.category]} | {activityLevelNames[clan.activityLevel]} | {joinMethodNames[clan.joinMethod]}
                  </p>
                  <p className='text-[10px] lg:text-[16px] xl:text-[12px] opacity-60'>
                    メンバー: {clan.members.length}/{clan.maxMembers}人
                  </p>
                  {clan.description && (
                    <p className='text-[10px] lg:text-[14px] xl:text-[12px] opacity-60 mt-1 max-w-[200px] lg:max-w-[400px] xl:max-w-[300px] truncate'>
                      {clan.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
