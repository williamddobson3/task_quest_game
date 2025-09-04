
import React from 'react';
import task_input_panel from '../../assets/task_input_panel.png';
import work from '../../assets/work.png';
import study from '../../assets/study.png';
import life from '../../assets/life.png';
import health from '../../assets/health.png';
import socializing from '../../assets/socializing.png';
import board_phone from '../../assets/board_phone.png';
import complete from '../../assets/complete.png';
import delete_task from '../../assets/delete.png';
import archieve from '../../assets/archieve.png';
import back from '../../assets/back.png';


export default function TaskModify() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('src/assets/background_iphone.png')] bg-cover bg-center relative">
            <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
                <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
            </div>
            <div className="w-full xl:w-1/3 h-full flex flex-col justify-center items-center">
                <div className='w-[200px] lg:w-[400px] xl:w-full flex flex-col justify-between items-between xl:mr-60'>
                    <div className='w-full text-left xl:text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
                        <p>タスク&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='w-full text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
                        <p>の入力</p>
                    </div>
                </div>
                <div className='w-9/10 lg:w-7/10 xl:w-full h-auto flex flex-col justify-center items-center relative xl:mr-60 gap-3'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img src={task_input_panel} alt="" className='w-full h-auto' />
                    </div>
                    <div className='absolute top-0 left-0 w-full flex flex-col justify-center items-center z-100 pt-20 lg:pt-40 xl:pt-25 gap-2'>
                        <div className='w-8/10 h-auto'>
                            <img src={board_phone} alt="" className='w-full h-auto' />
                            <textarea name="task" id="task" className='w-full h-auto bg-transparent border-none outline-none resize-none hidden'></textarea>
                        </div>
                        <div className='w-full h-auto flex flex-col justify-center items-center gap-2'>
                            <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                                <img src={work} alt="" />
                                <img src={study} alt="" />
                                <img src={life} alt="" />
                            </div>
                            <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                                <img src={health} alt="" />
                                <img src={socializing} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/2 xl:absolute bottom-0 right-[-400px] gap-2 xl:gap-4 '>
                        <div className='justify-center items-center gap-2 hidden xl:flex'>
                            <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                        </div>
                        <div className='flex justify-center items-center gap-2 xl:flex-col xl:gap-4'>
                            <img src={complete} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                            <img src={delete_task} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                        </div>
                        <div className='flex justify-center items-center gap-2 xl:hidden'>
                            <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
