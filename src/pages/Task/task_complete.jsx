import React from 'react';
import TaskModify  from './task_modify';
import task_complete from '../../assets/task_complete.png';
import board_phone from '../../assets/board_phone.png';
import archieve from '../../assets/archieve.png';

export default function TaskComplete() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-full h-full flex opacity-50 absolute'>
            <TaskModify />
        </div>
        <div className='w-full h-full flex flex-col justify-end items-center relative z-10 gap-15'>
            <div className='w-7/10 h-auto flex justify-center items-center xl:w-2/10 xl:mr-[100px]'>
                <img src={task_complete} alt="task_complete" className='w-full h-auto' />
            </div>
            <div className='w-8/10 h-auto flex justify-center items-center pb-[200px] xl:w-3/10 xl:mr-[100px]'>
                <img src={board_phone} alt="board_phone" className='w-full h-auto' />
            </div>
            <div className='w-7/10 xl:w-2/10 h-auto flex justify-center items-center text-left text-[18px] lg:text-[50px] xl:text-[25px] lg:text-[30px] pb-[450px] lg:pb-[550px] xl:pb-[250px] xl:mr-[110px] absolute'>
                <p>経験値とガチャ券をゲットした!!! <br />今日も自分のペースで頑張っていこう!!!</p>
            </div>
            <div className='w-[150px] lg:w-[200px] h-auto flex justify-center items-center pb-[80px] lg:pb-[120px] xl:absolute bottom-[-10px] right-[150px]'>
                <img src={archieve} alt="archieve" />
            </div>
        </div>
    </div>
  )
}
