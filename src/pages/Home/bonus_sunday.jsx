import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomHomeRedirect } from '../../utils/loginUtils';
import Main from './main';
import get_free from '../../assets/get_free.png';
import blank_card from '../../assets/blank_card.png';
import board_phone from '../../assets/board_phone.png';
import complete from '../../assets/complete.png';
import gacha_star from '../../assets/gacha_star.png';

export default function BonusSun() {
    const navigate = useNavigate();

    // Navigate based on day of the week
    const handleBlankCardClick = () => {
        const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        
        if (today === 0) { // Sunday
            navigate('/card-sun');
        } else { // Monday to Saturday
            navigate('/card-today');
        }
    };

    const handleCompleteClick = () => {
        const redirectPath = getRandomHomeRedirect();
        navigate(redirectPath);
    };

    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0 opacity-50'>
                <Main />
            </div>
            <div className='w-full h-full flex flex-col justify-start items-center z-[100] opacity-100 pt-25'>
                <div className='w-full h-auto flex justify-center items-center relative '>
                    <div className='w-[330px] lg:w-[800px] xl:w-[500px] h-[300px] lg:h-[700px] xl:h-[auto] flex justify-center items-center  '>
                        <img src={get_free} alt="get_free" className='w-full h-full'/>
                    </div>
                    <div className='w-[80px] lg:w-[200px] xl:w-[100px] h-auto flex justify-start items-center z-200 absolute left-25 lg:left-80 xl:left-130 top-15 lg:top-30 xl:top-20'>
                        <img src={blank_card} alt="" className='w-full cursor-pointer hover:opacity-80' onClick={handleBlankCardClick}/>
                    </div>
                    <div className='w-[80px] lg:w-[200px] xl:w-[100px] h-auto flex justify-start items-center z-200 absolute left-25 lg:left-80 xl:left-130 top-45 lg:top-110 xl:top-60'>
                        <img src={gacha_star} alt="gacha_star" />
                    </div>
                </div>
                <div className='w-full h-auto flex justify-center items-center relative'>
                    <div className='w-[360px] lg:w-[800px] xl:w-[500px] h-full flex justify-center items-center'>
                        <img src={board_phone} alt="" className='w-full'/>
                    </div>
                    <div className=' w-[300px] lg:w-[650px] xl:w-[400px] text-[17px] lg:text-[40px] xl:text-[25px] h-full flex justify-center items-center absolute left-[40x] lg:left-50 xl:left-110 top-0'>
                        <p>
                            ログインボーナス獲得!! <br /> 運命カードをゲット!! <br />
                            (運命カードは完了を押すと自動的に使用されます。) <br />
                            カードアイコンタップでカード詳細
                        </p>
                    </div>
                </div>
                <div className='w-[180px] lg:w-[300px] h-auto flex justify-center items-center relative xl:absolute xl:bottom-30 xl:right-0 pt-30'>
                    <img src={complete} alt="complete" className='cursor-pointer hover:opacity-80' onClick={handleCompleteClick} />
                </div>
            </div>

        </div>
    )
}
