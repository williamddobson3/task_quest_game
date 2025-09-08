import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import clain from '../../assets/clain.png';
import production from '../../assets/production.png';
import partisipant from '../../assets/partisipant.png';

export default function ClainMain() {
    const navigate = useNavigate();

    const handleProductionClick = () => {
        navigate('/create-selection');
    };

    return (
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
                <main className='w-full xl:h-full flex flex-col justify-start xl:justify-center items-center xl:flex-row'>
                    <div className="w-[300px] lg:w-[600px] xl:w-[600px] h-auto flex justify-center items-center">
                        <img src={clain} alt="" className='w-full h-auto' />
                    </div>
                    <div className="w-full xl:w-auto h-auto flex flex-col justify-center items-center gap-10">
                        <div className="w-[250px] lg:w-[500px] xl:w-[400px] h-auto flex justify-center items-center">
                            <img 
                                src={production} 
                                alt="" 
                                className='w-full h-auto cursor-pointer hover:opacity-80'
                                onClick={handleProductionClick}
                            />
                        </div>
                        <div className="w-[250px] lg:w-[500px] xl:w-[400px] h-auto flex justify-center items-center">
                            <img src={partisipant} alt="" className='w-full h-auto' />
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
    )
}
