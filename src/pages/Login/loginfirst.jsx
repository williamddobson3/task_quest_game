import React from 'react';
import login_background_iphone from '../../assets/background_iphone.png';
import { useNavigate } from 'react-router-dom';
import task_quest from '../../assets/task_quest.png';
import hero_man from '../../assets/hero_man.png';
import hero_woman from '../../assets/hero_woman.png';
import start_guest from '../../assets/start_guest.png';

export default function LoginFirst() {
    const navigate = useNavigate();
    const handleStartGuest = () => {
        navigate('/login');
    }
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${login_background_iphone})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='w-full h-full flex flex-col justify-center items-center py-4'>
                <div className='flex flex-col gap-2.5 justify-center items-center px-10 pt-10 pb-10 flex-1'>
                    <div className='flex justify-center w-3/5'>
                        <img src={task_quest} alt="task_quest" className='lg:max-w-400 h-auto' />
                    </div>
                    <div className='flex justify-center w-full'>
                        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full'>
                            <div className='flex justify-center items-center w-full lg:w-3/5'>
                                <img src={hero_man} alt="hero_man" className='w-1/2 max-w-600 h-auto mr-[-40px] object-contain ' />
                                <img src={hero_woman} alt="hero_woman" className='w-1/2 max-w-600 h-auto object-contain ' />
                            </div>
                            <div className='flex flex-col gap-3 justify-start items-center w-full lg:w-2/5 pt-10'>
                                <img src={start_guest} alt="start_guest" className='w-3/4 max-w-80 start_guest' onClick={handleStartGuest} />
                                <div className='flex flex-col gap-8 w-full text-center text-[clamp(16px,2.5vw,30px)] lg:text-2xl font-bold'>
                                    <p>ゲストプレイでは <br /> データは端末に保存されます</p>
                                    <p>Discord連携でクランチャット <br />などの機能が使えます</p>
                                    <div className='flex justify-between pr-10 pl-10 lg:pr-0 lg:pl-0 text-[clamp(16px,2.5vw,30px)] lg:text-2xl font-bold '>
                                        <p>利用規約</p>
                                        <p>プライバシーポリシー</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
