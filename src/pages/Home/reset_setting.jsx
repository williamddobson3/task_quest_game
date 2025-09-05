import React from 'react';
import Main from './main';
import ok from '../../assets/ok.png';
import reset_set_panel from '../../assets/reset_set_panel.png';
import cancel from '../../assets/cancel.png';


export default function ResetSetting() {
    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50 '>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center z-[100] opacity-100  opacity-100 gap-2'>
                <div className='w-full h-auto flex justify-center items-center relative text-[100px] lg:text-[200px] xl:text-[100px] font-bold'>
                    <p>設定</p>
                </div>
                <div className='w-full h-auto flex justify-center items-center relative '>
                    <div className='w-[300px] lg:w-[800px] xl:w-[600px] h-auto flex justify-center items-center relative'>
                        <img src={reset_set_panel} alt="" className='w-full' />
                    </div>
                    <div className='w-[80px] lg:w-[200px] h-[100px] flex justify-center items-center absolute top-35 lg:top-100 xl:top-70 left-40 lg:left-105 xl:left-135 gap-3'>
                        <img src={ok} alt="" className='w-full cursor-pointer hover:opacity-80' />
                        <img src={cancel} alt="" className='w-full cursor-pointer hover:opacity-80' />
                    </div>
                </div>
            </div>
        </div>
    )
}
