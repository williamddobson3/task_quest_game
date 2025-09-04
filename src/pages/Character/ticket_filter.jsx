import React from 'react';
import Room from './room';
import filter_box from '../../assets/filter_box.png';
import job from '../../assets/job.png';
import assis from '../../assets/assis.png';
import arm from '../../assets/arm.png';
import memory from '../../assets/memory.png';
import legend from '../../assets/legend.png';
import magic from '../../assets/magic.png';
import destiny from '../../assets/destiny.png';
import filter from '../../assets/filter.png';
import back from '../../assets/back.png';


export default function Ticket() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-end opacity-50 absolute overflow-hidden'>
                <Room />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center opacity-100 relative xl:flex-row'>
                <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
                    <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
                </div>
                <div className='w-[350px] lg:w-[900px] xl:w-[500px] lg:h-[1000px] xl:h-[450px] h-auto absolute lg:top-[100px] xl:top-[180px] xl:left-[150px] '>
                    <img src={filter_box} alt="" className='w-full h-auto lg:h-full' />
                </div>
                <div className='flex flex-col justify-center lg:justify-start items-center xl:items-start gap-3 lg:gap-10 w-[300px] xl:w-full lg:h-full z-100 lg:pt-[200px]'>
                    <div className='w-[280px] lg:w-[600px] xl:w-[300px] h-auto flex gap-4 lg:gap-10 justify-center items-center lg:absolute lg:top-[250px] xl:top-[220px] xl:left-[250px] '>
                        <img src={job} alt="" className='h-auto w-1/2' />
                        <img src={assis} alt="" className='h-auto w-1/2' />
                    </div>
                    <div className='w-[280px] lg:w-[600px] xl:w-[300px] h-auto flex gap-4 lg:gap-10 justify-center items-center lg:absolute lg:top-[400px] xl:top-[300px] xl:left-[250px]'>
                        <img src={arm} alt="" className='h-auto w-1/2' />
                        <img src={memory} alt="" className='h-auto w-1/2' />
                    </div>
                    <div className='w-[280px] lg:w-[600px] xl:w-[300px] h-auto flex gap-4 lg:gap-10 justify-center items-center lg:absolute lg:top-[550px] xl:top-[380px] xl:left-[250px]'>
                        <img src={magic} alt="" className='h-auto w-1/2' />
                        <img src={legend} alt="" className='h-auto w-1/2' />
                    </div>
                    <div className='w-[280px] lg:w-[600px] xl:w-[300px] h-auto flex justify-center items-center xl:pt-[0] lg:absolute lg:top-[800px] xl:top-[500px] xl:left-[250px]'>
                        <img src={destiny} alt="" className='h-auto w-1/2' />
                    </div>
                </div>
                <div className='w-[100px] lg:w-[200px] xl:w-[150px] h-auto absolute bottom-[120px] lg:bottom-[290px] xl:bottom-[120px] right-[90px] lg:right-[300px] xl:right-[690px] '>
                    <img src={filter} alt="" className='h-auto lg:w-full' />
                </div>
            </div>
        </div>
    )
}
