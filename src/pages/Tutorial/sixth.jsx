import React from 'react';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import once_pull from '../../assets/once_pull.png';
import ten_pull from '../../assets/ten_pull.png';
import sixth_tutorial from '../../assets/sixth_tutorial.png';
import next from '../../assets/next.png';
import hero_man from '../../assets/hero_man.png';

export default function Sixth() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div
        className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${gacha_room_tablet})`
        }}
      >
        <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
          <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
            <div className=' h-full flex justify-start items-center'>
              <div className='flex flex-col justify-center items-center text-center'>
                <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
                <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
              </div>
              <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto'>
                <img src={imgear} alt="imgear" />
              </div>
            </div>
            <div className=' h-full flex justify-center items-center gap-3'>
              <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
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
          <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5'>
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
      <div className='flex justify-center items-center w-full h-full z-[100] absolute '>
        <div className='w-[300px] lg:w-[600px] xl:w-[500px] absolute top-20 lg:top-50 xl:top-30 left-15 lg:left-80 xl:left-190 flex justify-center items-center '>
          <img src={sixth_tutorial} alt="" className='w-full h-auto ' />
        </div>
        <div className='w-[250px] lg:w-[500px] xl:w-[400px] absolute top-130 lg:top-220 xl:top-90 left-0 xl:left-5 flex justify-center items-center '>
          <img src={hero_man} alt="" />
        </div>
        <div className='w-[150px] lg:w-[300px] xl:w-[200px] absolute top-150 lg:top-280 xl:top-150 right-0 lg:right-10 flex justify-center items-center '>
          <img src={next} alt="" />
        </div>
      </div>
      <main className='w-full h-full flex flex-col justify-center items-center pb-20 absolute'>
        <div className='w-full flex flex-col justify-center items-center gap-10 h-full'>
          <img src={once_pull} alt="once_pull" className='w-[200px] lg:w-[300px] xl:w-[200px] h-auto ' />
          <img src={ten_pull} alt="ten_pull" className=' w-[200px] lg:w-[300px] xl:w-[200px] h-auto ' />
        </div>
      </main>
    </div>
  )
}
