import React from 'react';
import gacha_room_tablet from '../../assets/gacha_room_tablet.png';
import second_item from '../../assets/second_item.png';
import return_png from '../../assets/return.png';


export default function GachaRoom() {
    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/gacha_room.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${gacha_room_tablet})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
                <div className='w-full flex justify-start items-start pl-12 lg:pl-65 xl:pl-123'>
                    <p className='text-red-500 text-2xl lg:text-6xl xl:text-2xl'>NEW !!</p>
                </div>
                <div className='w-full flex flex-col justify-between items-center'>
                    <img src={second_item} alt="second_item"  className='w-[300px] lg:w-[500px] xl:w-[300px] ' />
                    <img src={return_png} alt="return_png" className='w-[150px] lg:w-[300px] ' />
                </div>
            </div>
        </div>
    )
}
