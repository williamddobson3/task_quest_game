import React from 'react';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import second_item from '../../assets/second_item.png';
import return_png from '../../assets/return.png';
import main_gacha from '../../assets/main_gacha.png';
import final_gacha from '../../assets/final_gacha.png';


export default function GachaRoom() {
    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${gacha_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
                <div className='flex flex-col justify-content items-center xl:hidden'>
                    <div className='flex justify-center items-center'>
                        <img src={main_gacha} alt="" className=' w-[100px] lg:w-[200px] ' />
                    </div>
                    <div className='flex flex justify-center items-center'>
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                    </div>
                    <div className='flex flex justify-center items-center'>
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                    </div>
                    <div className='flex flex justify-center items-center'>
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={second_item} alt="" className=' w-[100px] lg:w-[200px] ' />
                        <img src={final_gacha} alt="" className=' w-[100px] lg:w-[200px] ' />
                    </div>
                </div>
                <div className='flex flex-col justify-content items-center hidden xl:flex'>
                    <div className='flex flex justify-center items-center'>
                        <img src={main_gacha} alt="" className='w-[200px] ' />
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={second_item} alt="" className='w-[200px] ' />
                        <img src={second_item} alt="" className='w-[200px] ' />
                    </div>
                    <div className='flex flex justify-center items-center'>
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={second_item} alt="" className='w-[200px] '/>
                        <img src={final_gacha} alt="" className='w-[200px] '/>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={return_png} alt="" className='w-[200px] lg:w-[300px] xl:w-[200px] ' />
                </div>
            </div>
        </div>
    )
}
