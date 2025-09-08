import React from "react";
import { useNavigate } from 'react-router-dom';
import background_tablet from '../../assets/background_tablet.png';
import first_job from '../../assets/first_job.png';
import second_job from '../../assets/second_job.png';
import third_job from '../../assets/third_job.png';
import fourth_job from '../../assets/fourth_job.png';
import fifth_job from '../../assets/fifth_job.png';
import battle_board from '../../assets/battle_board.png';

export default function JobCards() {
  const navigate = useNavigate();

  // Job card data with associated cards
  const jobCards = [
    {
      id: 'first_job',
      name: '鍛錬者',
      type: 'job',
      rarity: 'N',
      image: 'first_job',
      description: '力と体力で突き進む肉体派。運動やフィジカル系タスクとの相性が抜群。力と体力特化型。運動習慣に最適',
      associatedCard: {
        id: 'n_card_4',
        name: 'カード N-4',
        type: 'normal',
        rarity: 'N',
        image: 'n (4)',
        description: '基本的なカード N-4。初心者にも使いやすい。',
        stats: {
          chika: Math.floor(Math.random() * 5) + 1,
          chishi: Math.floor(Math.random() * 5) + 1,
          tai: Math.floor(Math.random() * 5) + 1,
          kou: Math.floor(Math.random() * 5) + 1,
          kei: Math.floor(Math.random() * 5) + 1
        }
      },
      stats: {
        chika: 15, // Strength
        chishi: 5,  // Wisdom
        tai: 15,    // Vitality
        kou: 5,     // Agility
        kei: 10     // Persistence
      }
    },
    {
      id: 'second_job',
      name: '学者',
      type: 'job',
      rarity: 'N',
      image: 'second_job',
      description: '知恵と持続力で学問を極める。勉強や知識系タスクとの相性が抜群。知恵と持続力特化型。学習習慣に最適',
      associatedCard: {
        id: 'n_card_6',
        name: 'カード N-6',
        type: 'normal',
        rarity: 'N',
        image: 'n (6)',
        description: '基本的なカード N-6。初心者にも使いやすい。',
        stats: {
          chika: Math.floor(Math.random() * 5) + 1,
          chishi: Math.floor(Math.random() * 5) + 1,
          tai: Math.floor(Math.random() * 5) + 1,
          kou: Math.floor(Math.random() * 5) + 1,
          kei: Math.floor(Math.random() * 5) + 1
        }
      },
      stats: {
        chika: 5,   // Strength
        chishi: 15, // Wisdom
        tai: 5,     // Vitality
        kou: 10,    // Agility
        kei: 15     // Persistence
      }
    },
    {
      id: 'third_job',
      name: '冒険者',
      type: 'job',
      rarity: 'N',
      image: 'third_job',
      description: '敏捷性と知恵で未知の世界を探検。多様なタスクに対応できるバランス型。冒険心に最適',
      associatedCard: {
        id: 'n_card_8',
        name: 'カード N-8',
        type: 'normal',
        rarity: 'N',
        image: 'n (8)',
        description: '基本的なカード N-8。初心者にも使いやすい。',
        stats: {
          chika: Math.floor(Math.random() * 5) + 1,
          chishi: Math.floor(Math.random() * 5) + 1,
          tai: Math.floor(Math.random() * 5) + 1,
          kou: Math.floor(Math.random() * 5) + 1,
          kei: Math.floor(Math.random() * 5) + 1
        }
      },
      stats: {
        chika: 10,  // Strength
        chishi: 10, // Wisdom
        tai: 10,    // Vitality
        kou: 15,    // Agility
        kei: 5      // Persistence
      }
    },
    {
      id: 'fourth_job',
      name: '守護者',
      type: 'job',
      rarity: 'N',
      image: 'fourth_job',
      description: '体力と力で仲間を守る。健康管理や体力系タスクとの相性が抜群。体力と力特化型。健康習慣に最適',
      associatedCard: {
        id: 'n_card_5',
        name: 'カード N-5',
        type: 'normal',
        rarity: 'N',
        image: 'n (5)',
        description: '基本的なカード N-5。初心者にも使いやすい。',
        stats: {
          chika: Math.floor(Math.random() * 5) + 1,
          chishi: Math.floor(Math.random() * 5) + 1,
          tai: Math.floor(Math.random() * 5) + 1,
          kou: Math.floor(Math.random() * 5) + 1,
          kei: Math.floor(Math.random() * 5) + 1
        }
      },
      stats: {
        chika: 12,  // Strength
        chishi: 8,  // Wisdom
        tai: 15,    // Vitality
        kou: 8,     // Agility
        kei: 7      // Persistence
      }
    },
    {
      id: 'fifth_job',
      name: '調和者',
      type: 'job',
      rarity: 'N',
      image: 'fifth_job',
      description: '知恵と敏捷性で調和を保つ。社交やコミュニケーション系タスクとの相性が抜群。知恵と敏捷性特化型。社交習慣に最適',
      associatedCard: {
        id: 'n_card_7',
        name: 'カード N-7',
        type: 'normal',
        rarity: 'N',
        image: 'n (7)',
        description: '基本的なカード N-7。初心者にも使いやすい。',
        stats: {
          chika: Math.floor(Math.random() * 5) + 1,
          chishi: Math.floor(Math.random() * 5) + 1,
          tai: Math.floor(Math.random() * 5) + 1,
          kou: Math.floor(Math.random() * 5) + 1,
          kei: Math.floor(Math.random() * 5) + 1
        }
      },
      stats: {
        chika: 7,   // Strength
        chishi: 12, // Wisdom
        tai: 8,     // Vitality
        kou: 15,    // Agility
        kei: 8      // Persistence
      }
    }
  ];

  const handleJobCardClick = (jobCard) => {
    // Store the selected job card and associated card data
    const selectedCards = {
      jobCard: jobCard,
      associatedCard: jobCard.associatedCard
    };
    
    // Save to localStorage for carddesc page
    localStorage.setItem('selectedJobCards', JSON.stringify(selectedCards));
    
    // Navigate to carddesc page
    navigate('/carddesc');
  };

  return (
    <div className="flex justify-center items-center w-full h-screen relative ">
      <div className="flex justify-center items-center w-full h-full absolute">
        <img src={background_tablet} alt="" className="flex justify-center items-center w-full h-full" />
      </div>
      <div className="flex justify-center flex-col xl:flex-row items-center w-full h-auto z-[100] gap-8">
        <div className="w-[330px] lg:w-[700px] xl:w-[500px] h-auto flex justify-center items-center relative">
          <img src={battle_board} alt="" />
          <p className="absolute top-15 lg:top-30 xl:top-20 left-7 lg:left-13 w-9/10 lg:w-8/10 text-[14px] lg:text-[29px] xl:text-[20px] ">チュートリアル完了!!! <br />

            ジョブカード全種+初期装備プレゼント! <br />

            「自分にあったジョブカードを装備しよう! <br />

            (タップでカードの詳細が見れるよ)</p>
        </div>
        <div className="w-auto h-auto flex justify-center items-center flex-col gap-3 ">
          <div className="flex justify-center items-center gap-3 xl:gap-10 w-auto h-auto">
            <img 
              src={first_job} 
              alt="" 
              className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80" 
              onClick={() => handleJobCardClick(jobCards[0])}
            />
            <img 
              src={second_job} 
              alt="" 
              className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80" 
              onClick={() => handleJobCardClick(jobCards[1])}
            />
            <img 
              src={third_job} 
              alt="" 
              className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80" 
              onClick={() => handleJobCardClick(jobCards[2])}
            />
          </div>
          <div className="flex justify-center items-center gap-3 xl:gap-10 w-auto h-auto">
            <img 
              src={fourth_job} 
              alt="" 
              className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80" 
              onClick={() => handleJobCardClick(jobCards[3])}
            />
            <img 
              src={fifth_job} 
              alt="" 
              className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80" 
              onClick={() => handleJobCardClick(jobCards[4])}
            />
          </div>
        </div>
      </div>
    </div>
  )
}