import React from 'react';
import Main from './main';
import card_free from '../../assets/card_free.png';
import board_phone from '../../assets/board_phone.png';
import complete from '../../assets/complete.png';
import back from '../../assets/back.png';

export default function Card() {
    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50'>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-start z-[100] opacity-100 pt-25 xl:gap-10'>
                <div className='w-[120px] lg:w-[180px] xl:w-[150px] h-auto flex justify-center items-center absolute top-5 left-5'>
                    <img src={back} alt="back" />
                </div>
                <div className='w-[250px] lg:w-[600px] xl:w-[400px] h-auto flex justify-center items-center relative  '>
                    <img src={card_free} alt="card_free" className='w-full'/>
                </div>
                <div className='w-full xl:w-auto h-auto flex justify-center items-center relative xl:mt-10'>
                    <div className='w-[360px] lg:w-[600px] xl:w-[500px] h-full flex justify-center items-center'>
                        <img src={board_phone} alt="" className='w-full'/>
                    </div>
                    <div className=' w-[300px] lg:w-[500px] xl:w-[400px] text-[17px] lg:text-[30px] xl:text-[25px] h-full flex justify-center items-center absolute left-[40x] lg:left-65 xl:left-10 top-0'>
                        <p>
                            ログインボーナス獲得!! <br /> 運命カードをゲット!! <br />
                            (運命カードは完了を押すと自動的に使用されます。) <br />
                            カードアイコンタップでカード詳細
                        </p>
                    </div>
                </div>
                <div className='w-[180px] lg:w-[300px] h-auto flex justify-center items-center  xl:absolute xl:bottom-30 xl:right-0 pt-10 xl:opacity-50'>
                    <img src={complete} alt="complete" />
                </div>
            </div>

        </div>
    )
}
