import React from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './main';
import alarm_not from '../../assets/alarm_not.png';
import approval from '../../assets/approval.png';
import reject from '../../assets/reject.png';
import red from '../../assets/red.png';


export default function DiscordNot() {
    const navigate = useNavigate();

    const handleApprovalClick = () => {
        navigate('/home');
    };

    const handleRejectClick = () => {
        navigate('/home');
    };

    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 '>
                <Main />
            </div>

            <div className='w-full h-full flex flex-col justify-start items-center z-[100] opacity-100 pt-35 lg:pt-55 xl:pt-20'>
                <div className='w-[20px] lg:w-[30px] xl:w-[20px] h-[20px] lg:h-[30px] xl:h-[20px] flex justify-center items-center absolute top-5 lg:top-10 xl:top-13 left-70 lg:left-200 xl:left-278'>
                    <img src={red} alt="" className='w-full h-full' />
                </div>
                <div className='w-full h-auto flex justify-start items-center relative pl-0 lg:pl-50 xl:pl-90 lg:pt-15 xl:pt-40'>
                    <div className='w-[300px] lg:w-[600px] xl:w-[1000px] h-[100px] flex justify-center items-center'>
                        <img src={alarm_not} alt="" />
                    </div>
                    <div className='w-[80px] lg:w-[130px] h-[100px] flex justify-center items-center absolute top-15 lg:top-40 xl:top-65 left-25 lg:left-110 xl:left-190 gap-3'>
                        <img src={approval} alt="" className='cursor-pointer hover:opacity-80' onClick={handleApprovalClick} />
                        <img src={reject} alt="" className='cursor-pointer hover:opacity-80' onClick={handleRejectClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}
