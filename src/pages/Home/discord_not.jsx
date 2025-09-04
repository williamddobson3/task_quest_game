import React from 'react';
import Main from './main';
import alarm_not from '../../assets/alarm_not.png';
import approval from '../../assets/approval.png';
import reject from '../../assets/reject.png';


export default function DiscordNot() {
    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 '>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-start items-center z-[100] opacity-100 pt-35 lg:pt-55 xl:pt-20'>
                <div className='w-full h-auto flex justify-start items-center relative pl-0 lg:pl-50 xl:pl-90 lg:pt-15 xl:pt-40'>
                    <div className='w-[300px] lg:w-[600px] xl:w-[1000px] h-[100px] flex justify-center items-center'>
                        <img src={alarm_not} alt="" />
                    </div>
                    <div className='w-[80px] lg:w-[130px] h-[100px] flex justify-center items-center absolute top-15 lg:top-40 xl:top-65 left-25 lg:left-110 xl:left-190 gap-3'>
                        <img src={approval} alt="" />
                        <img src={reject} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
