import React from 'react';
import Main from './main';
import ok from '../../assets/ok.png';
import setting_panel from '../../assets/setting_panel.png';
import reset from '../../assets/reset.png';
import on_en from '../../assets/on_en.png';
import off_en from '../../assets/off_en.png';
import on_di from '../../assets/on_di.png';
import off_di from '../../assets/off_di.png';

export default function Setting() {
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
                        <img src={on_en} alt="" />
                        <img src={off_di} alt="" />
                    </div>
                    <div className='w-[80px] lg:w-[150px] xl:w-[90px] h-[100px] flex gap-4 justify-center items-center absolute top-95 lg:top-145 xl:top-105 left-55 lg:left-130 xl:left-170'>
                        <img src={on_di} alt="" />
                        <img src={off_en} alt="" />
                    </div>
                    <div className='w-full h-[100px] flex gap-5 justify-center items-center absolute top-130 lg:top-200 xl:top-140'>
                        <div className='w-[100px] lg:w-[200px] xl:w-[120px] h-auto flex justify-center items-center relative'>
                            <img src={reset} alt="" className='w-full h-full'/>
                        </div>
                        <p className='text-center text-[15px] lg:text-[30px] xl:text-[20px]'>利用規約 <br />プライバシーポリシー</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
