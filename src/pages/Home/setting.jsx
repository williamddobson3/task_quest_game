import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './main';
import ok from '../../assets/ok.png';
import setting_panel from '../../assets/setting_panel.png';
import reset from '../../assets/reset.png';
import on_en from '../../assets/on_en.png';
import off_en from '../../assets/off_en.png';
import on_di from '../../assets/on_di.png';
import off_di from '../../assets/off_di.png';

export default function Setting() {
    const navigate = useNavigate();
    
    // Toggle states: true = 'on', false = 'off'
    const [englishEnabled, setEnglishEnabled] = useState(true); // starts with on_en
    const [discordEnabled, setDiscordEnabled] = useState(true); // starts with on_di

    const handleEnglishToggle = () => {
        setEnglishEnabled(!englishEnabled);
    };

    const handleDiscordToggle = () => {
        setDiscordEnabled(!discordEnabled);
    };

    const handleResetClick = () => {
        navigate('/reset-setting');
    };

    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50 '>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center z-[100] opacity-100  opacity-100'>
                <div className='w-full h-auto flex flex-col justify-center items-center relative gap-2 pb-60 lg:pb-50'>
                    <div className='w-full h-[200px] flex justify-center items-center relative text-[100px] lg:text-[200px] xl:text-[100px] font-bold'>
                        <p>設定</p>
                    </div>
                    <div className='w-[350px] lg:w-[650px] xl:w-[400px] h-auto flex justify-center items-center relative'>
                        <img src={setting_panel} alt="" />
                    </div>
                    <div className='w-[80px] lg:w-[150px] xl:w-[90px] h-[100px] flex gap-4 justify-center items-center absolute top-70 lg:top-95 xl:top-75 left-55 lg:left-130 xl:left-170'>
                        <img 
                            src={englishEnabled ? on_en : off_di} 
                            alt="" 
                            className='cursor-pointer hover:opacity-80' 
                            onClick={handleEnglishToggle} 
                        />
                        <img 
                            src={englishEnabled ? off_di : on_en} 
                            alt="" 
                            className='cursor-pointer hover:opacity-80' 
                            onClick={handleEnglishToggle} 
                        />
                    </div>
                    <div className='w-[80px] lg:w-[150px] xl:w-[90px] h-[100px] flex gap-4 justify-center items-center absolute top-95 lg:top-145 xl:top-105 left-55 lg:left-130 xl:left-170'>
                        <img 
                            src={discordEnabled ? on_di : off_en} 
                            alt="" 
                            className='cursor-pointer hover:opacity-80' 
                            onClick={handleDiscordToggle} 
                        />
                        <img 
                            src={discordEnabled ? off_en : on_di} 
                            alt="" 
                            className='cursor-pointer hover:opacity-80' 
                            onClick={handleDiscordToggle} 
                        />
                    </div>
                    <div className='w-full h-[100px] flex gap-5 justify-center items-center absolute top-130 lg:top-200 xl:top-140'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[120px] h-auto flex justify-center items-center relative'>
                            <img src={reset} alt="" className='w-full h-full cursor-pointer hover:opacity-80' onClick={handleResetClick}/>
                        </div>
                        <p className='text-center text-[15px] lg:text-[30px] xl:text-[20px]'>利用規約 <br />プライバシーポリシー</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
