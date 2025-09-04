import React from 'react';
import Main from './main';
import board_phone from '../../assets/board_phone.png';

export default function LotteryNot() {
    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50'>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-start items-center z-[100] opacity-100 pt-35 lg:pt-55 xl:pt-20'>
                <div className='w-[340px] lg:w-[800px] xl:w-[400px] h-auto flex justify-center items-center relative'>
                    <img src={board_phone} alt="" className='w-full lg:h-[400px] xl:h-[300px]'/>
                    <p className='w-[300px] lg:w-[600px] xl:w-[300px] text-[17px] lg:text-[30px] xl:text-[25px] h-full flex justify-center items-center absolute left-[30px] lg:left-[80px] xl:left-10 top-0'>くじ引きチャンスカードの結果ガチャ券1枚ゲット!! <br />ラッキーな1日!!</p>
                </div>
            </div>
        </div>
    )
}
