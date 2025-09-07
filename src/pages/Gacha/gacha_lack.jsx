import React from 'react';
import { useNavigate } from 'react-router-dom';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import ok from '../../assets/ok.png';
import gacha_lack from '../../assets/gacha_lack.png';

export default function GachaLack() {
    const navigate = useNavigate();

    const handleOkClick = () => {
        navigate('/gacha-room');
    };

    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${gacha_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-center items-center '>
                <div className='w-full h-auto flex flex-col justify-center items-center gap-8 relative'>
                    {/* Message Display */}
                    <div className='w-[400px] lg:w-[800px] xl:w-[800px] h-auto'>
                      <img src={gacha_lack} alt="" className='w-full h-auto' />
                    </div>
                    
                    {/* OK Button */}
                    <div className='w-[150px] lg:w-[300px] xl:w-[150px] h-auto absolute bottom-[30px] lg:bottom-[60px] xl:bottom-[70px] left-[130px] lg:left-[350px] xl:left-[550px]'>
                        <img 
                            src={ok} 
                            alt="ok" 
                            className='w-full h-auto cursor-pointer hover:opacity-80'
                            onClick={handleOkClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}