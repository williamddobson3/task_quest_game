import React from 'react';
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

import completed from '../../assets/completed.png';

export default function TaskCComplete() {
    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${login_background_iphone})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-30 xl:pt-15'>
                <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5'>
                    <div className=' h-full flex justify-start items-center'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
                            <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
                        </div>
                        <div className='max-w-8 lg:max-w-20 xl:max-w-15 w-full h-auto'>
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
                            <img src={gacha} alt="gacha" className='w-full'/>
                        </div>
                    </div>
                </header>
                <main className='w-full flex flex-col justify-start items-center'>
                    <div className='w-full flex flex-col justify-start items-start pl-13 lg:pl-70 xl:pl-160  xl:pt-0'>
                        <div className='text-4xl lg:text-7xl xl:text-5xl'>
                            <p>今日のタスク</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 relative'>
                            <div className='w-[330px] lg:w-[750px] xl:w-[500px] h-auto'>
                                <img src={task_not} alt="task_not" className='w-full h-auto'/>
                            </div>
                            <div className='flex flex-col justify-start items-center gap-3 lg:gap-8 absolute top-0 left-1/2 -translate-x-1/2 pt-10 lg:pt-20 xl:pt-10'>
                                <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl'>
                                    <p className='text-nowrap'>タスクA</p>
                                    <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full'>
                                        <img src={gear} alt="gear" />
                                    </div>
                                </div>
                                <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl'>
                                    <p className='text-nowrap'>タスクB</p>
                                    <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full'>
                                        <img src={gear} alt="gear" />
                                    </div>
                                </div>
                                <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl'>
                                    <p className='text-nowrap'>タスクC</p>
                                    <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full'>
                                        <img src={completed} alt="gear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  flex justify-start items-start pl-5 xl:pl-50 xl:absolute xl:top-80'>
                        <div className='w-[300px] lg:w-[600px] xl:w-[400px] h-auto'>
                            <img src={hero_man} alt="hero_man" className='w-full h-auto'/>
                        </div>
                    </div>
                </main>
                <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5'>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={home} alt="home" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={character} alt="character" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={ticket} alt="ticket" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={battle} alt="battle" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto'>
                        <img src={clan} alt="clan" className='w-full h-auto'/>
                    </div>
                </footer>
            </div>
        </div>
    )
}
