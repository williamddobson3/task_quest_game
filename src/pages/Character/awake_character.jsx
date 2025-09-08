import React, { useState, useEffect } from 'react';
import character_room_tablet from '../../assets/character_room_tablet.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import hero_woman from '../../assets/hero_woman.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import score from '../../assets/score.png';
import main_item from '../../assets/main_item.png';
import first_item from '../../assets/first_item.png';
import second_item from '../../assets/second_item.png';
import third_item from '../../assets/third_item.png';
import fourth_item from '../../assets/fourth_item.png';
import items_box from '../../assets/items_box.png';
import each_item from '../../assets/each_item.png';
import possession from '../../assets/possession.png';
import filter from '../../assets/filter.png';
import empty_item from '../../assets/empty_item.png';
import awake from '../../assets/awake.png';


export default function AwakeCharacter() {
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    // Load ticket count from localStorage
    const savedTickets = localStorage.getItem('gachaTickets');
    setTicketCount(savedTickets ? parseInt(savedTickets) : 0);
  }, []);

  const handleGearClick = () => {
    // Navigate to setting page
    console.log('Gear clicked');
  };

  const handleOneClick = () => {
    // Give player 1 ticket
    const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
    const newTicketCount = currentTickets + 1;
    localStorage.setItem('gachaTickets', newTicketCount.toString());
    
    // Update state
    setTicketCount(newTicketCount);
    
    // Show success message
    alert('You received 1 gacha ticket!');
    
    console.log('Tickets updated:', newTicketCount);
  };
  return (
    <div
      className="w-full h-[200vh] lg:bg-[url('/src/assets/character_room_mac.png')] bg-cover bg-center"
      style={{
        backgroundImage: `url(${character_room_tablet})`
      }}
    >
      <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16 relative'>
        <header className='w-full h-1/20 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
          <div className=' h-full flex justify-start items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
              <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
              <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
            </div>
          <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto'>
            <img src={imgear} alt="imgear" className='cursor-pointer hover:opacity-80' onClick={handleGearClick} />
          </div>
          </div>
          <div className=' h-full flex justify-center items-center gap-3'>
            <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
              <img src={one} alt="one" className='w-full cursor-pointer hover:opacity-80' onClick={handleOneClick} />
            </div>
            <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
              <img src={alarm} alt="alarm" className='w-full' />
            </div>
            <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto relative'>
              <img src={gacha} alt="gacha" className='w-full' />
              <div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg lg:text-4xl xl:text-2xl text-center'>
                {ticketCount}
              </div>
            </div>
          </div>
        </header>
        <main className='w-full flex flex-col justify-start items-center'>
          <div className='w-full flex flex-col justify-center items-end pl-12 lg:pl-20 lg:pt-20 xl:pr-[150px] xl:pt-20'>
            <div className='flex justify-center items-center gap-3 relative w-[230px] lg:w-[550px] xl:w-[300px] h-auto z-[100]'>
              <img src={score} alt="score" className='w-full h-auto' />
              <p>100</p>
            </div>
          </div>
          <div className='w-full h-[250px] flex justify-end items-end xl:pl-[200px] relative pr-5 lg:pr-50 lg:mt-30 xl:mt-0 xl:pr-120'>
            <div className='w-[250px] lg:w-[600px] xl:w-[500px] h-auto absolute lg:top-[-380px] xl:top-[-200px] left-0 xl:left-20 z-[100]'>
              <img src={hero_woman} alt="hero_man" className='w-full h-auto' />
            </div>
            <div className="absolute flex justify-center items-center bottom-0 xl:bottom-[-70px] right-28 lg:right-90 xl:right-170 w-[300px] lg:w-[700px] xl:w-[500px] ">
              <img src={awake} alt="" className="w-full h-auto" />
            </div>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto xl:mb-50'>
              <img src={main_item} alt="main_item" className='w-full h-auto ' />
            </div>
          </div>
          <div className='w-full h-[200px] lg:h-[400px] xl:h-[200px] flex justify-center items-center xl:justify-end xl:pr-10 xl:pb-60 gap-3 mt-[75px] lg:mt-[25px] xl:mt-0'>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={first_item} alt="first_item" className='w-full h-auto' />
            </div>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={second_item} alt="second_item" className='w-full h-auto' />
            </div>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={third_item} alt="third_item" className='w-full h-auto' />
            </div>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={fourth_item} alt="fourth_item" className='w-full h-auto' />
            </div>
          </div>
          <div className='w-full lg:w-[700px] xl:w-full h-auto  flex justify-center items-center gap-3 mt-[75px] xl:mt-0 '>
            <div className='w-full h-auto xl:h-[500px] xl:pr-[600px] xl:pl-[100px]'>
              <img src={items_box} alt="items_box" className='w-full h-full' />
            </div>
            <div className='grid grid-cols-5 gap-3 xl:gap-1 z-10 absolute xl:h-[400px] xl:pr-[500px] xl:pt-[60px]'>
              {
                Array.from({ length: 15 }, (_, index) => (
                  <div key={index} className='w-[50px] lg:w-[100px] xl:w-[70px] h-auto'>
                    <img src={each_item} alt="each_item" className='w-full h-auto' />
                  </div>
                ))
              }
              {
                Array.from({ length: 5 }, (_, index) => (
                  <div key={index} className='w-[50px] lg:w-[100px] xl:w-[70px] h-auto xl:mt-[-112px]'>
                    <img src={empty_item} alt="empty_item" className='w-full h-auto' />
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full h-auto flex justify-center items-center gap-3 mt-[20px] xl:pr-[450px] xl:gap-15'>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={possession} alt="possession" className='w-full h-auto' />
            </div>
            <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto'>
              <img src={filter} alt="filter" className='w-full h-auto' />
            </div>
          </div>
        </main>
        <footer className='w-full h-1/20 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-0 lg:bottom-5'>
          <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
            <img src={home} alt="home" className='w-full h-auto' />
          </div>
          <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
            <img src={character} alt="character" className='w-full h-auto' />
          </div>
          <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
            <img src={ticket} alt="ticket" className='w-full h-auto' />
          </div>
          <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
            <img src={battle} alt="battle" className='w-full h-auto' />
          </div>
          <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
            <img src={clan} alt="clan" className='w-full h-auto' />
          </div>
        </footer>
      </div>
    </div>
  )
}
