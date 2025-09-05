import React from "react";
import { useNavigate } from 'react-router-dom';
import { getPostTutorialRedirect } from '../../utils/loginUtils';
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
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';
import eleventh_tutorial from '../../assets/eleventh_tutorial.png';
import hero_man from '../../assets/hero_man.png';
import next from '../../assets/next.png';



export default function Eleventh() {
  const navigate = useNavigate();

  const handleNext = () => {
    const redirectPath = getPostTutorialRedirect();
    navigate(redirectPath);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-full h-screen flex justify-center items-center opacity-50">
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
              <main className='w-full flex flex-col justify-start items-center'>
                <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 gap-5">
                  <div className="text-[35px] lg:text-[90px] font-bold">
                    <p>クラン名</p>
                  </div>
                  <div className="w-auto h-auto flex flex-col xl:flex-row justify-center items-center xl:gap-40">
                    <div className='w-[200px] lg:w-[900px] xl:w-[300px] h-auto flex flex-col lg:flex-row xl:flex-col justify-center items-center gap-5'>
                      <div className="w-[300px] lg:w-[900px] xl:w-[300px] h-auto flex xl:flex-col justify-center items-center lg:gap-10">
                        <img src={muscle_type} alt="" className='w-1/2 lg:w-[300px] h-auto' />
                        <img src={member} alt="" className='w-1/2 h-auto lg:w-[300px] ' />
                      </div>
                      <div className='w-[150px] lg:w-[400px] xl:w-[300px] h-auto flex justify-center items-center'>
                        <img src={process} alt="" />
                      </div>
                    </div>
                    <div className='w-[300px] lg:w-[900px] xl:w-[500px]  h-auto flex justify-center items-center relative '>
                      <div className='w-full h-auto flex justify-center items-center'>
                        <img src={clan_mem} alt="" className='w-full h-auto' />
                      </div>
                      <div className="absolute bottom-7 lg:bottom-15 xl:bottom-10 right-7 lg:right-15 xl:right-10 w-[70px] lg:w-[200px] xl:w-[130px] ">
                        <img src={quit} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
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
        </div>

      </div >
      <div className='flex justify-center items-center w-full h-full z-[100] absolute '>
        <div className='w-[330px] lg:w-[700px] xl:w-[600px] absolute top-40 lg:top-50 xl:top-30 left-10 lg:left-40 xl:left-140 flex justify-center items-center '>
          <img src={eleventh_tutorial} alt="" className='w-full h-auto ' />
        </div>
        <div className='w-[250px] lg:w-[500px] xl:w-[400px] absolute top-120 lg:top-200 xl:top-90 left-0 xl:left-50 flex justify-center items-center '>
          <img src={hero_man} alt="" />
        </div>
        <div className='w-[150px] lg:w-[300px] xl:w-[200px] absolute top-150 lg:top-280 xl:top-150 right-0 lg:right-10 flex justify-center items-center '>
          <img src={next} alt="" className='cursor-pointer hover:opacity-80' onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}