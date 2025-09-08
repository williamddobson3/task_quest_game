import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import login_background_iphone from '../../assets/background_iphone.png';
import imgear from '../../assets/imgear.png';
import one from '../../assets/one.png';
import alarm from '../../assets/alarm.png';
import gacha from '../../assets/gacha.png';
import task_not from '../../assets/task_not.png';
import gear from '../../assets/gear.png';
import completed from '../../assets/completed.png';
import hero_man from '../../assets/hero_man.png';
import home from '../../assets/home.png';
import character from '../../assets/character.png';
import ticket from '../../assets/ticket.png';
import battle from '../../assets/battle.png';
import clan from '../../assets/clan.png';

export default function Main() {
    const navigate = useNavigate();
    const [taskA, setTaskA] = useState(null);
    const [taskB, setTaskB] = useState(null);
    const [taskC, setTaskC] = useState(null);
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        // Load task information from localStorage
        const savedTaskA = localStorage.getItem('taskA');
        const savedTaskB = localStorage.getItem('taskB');
        const savedTaskC = localStorage.getItem('taskC');
        
        if (savedTaskA) setTaskA(JSON.parse(savedTaskA));
        if (savedTaskB) setTaskB(JSON.parse(savedTaskB));
        if (savedTaskC) setTaskC(JSON.parse(savedTaskC));
        
        // Load ticket count from localStorage
        const savedTickets = localStorage.getItem('gachaTickets');
        setTicketCount(savedTickets ? parseInt(savedTickets) : 0);
    }, []);

    const handleGearClick = () => {
        navigate('/setting');
    };

    const handleTaskClick = (taskType) => {
        const taskData = localStorage.getItem(taskType);
        if (taskData) {
            navigate(`/task-modify?task=${taskType}`);
        } else {
            navigate(`/task-input?task=${taskType}`);
        }
    };

    const handleTicketClick = () => {
        navigate('/gacha-room');
    };

    const handleClanClick = () => {
        const userClan = localStorage.getItem('userClan');
        if (userClan) {
            // User is logged into a clan
            const clanData = JSON.parse(userClan);
            const currentUser = localStorage.getItem('userName') || 'Player';
            
            // Check if user is the leader (creator) of the clan
            if (clanData.leaderId === currentUser) {
                navigate('/clan-leader');
            } else {
                navigate('/clan-member');
            }
        } else {
            // User is not logged into any clan
            navigate('/clain-main');
        }
    };

    const handleOneClick = () => {
        // Give player 1 ticket
        const currentTickets = parseInt(localStorage.getItem('gachaTickets') || '0');
        const newTicketCount = currentTickets + 1;
        localStorage.setItem('gachaTickets', newTicketCount.toString());
        
        // Update state
        setTicketCount(newTicketCount);
        
        // Show success message
        //alert('You received 1 gacha ticket!');
        
        console.log('Tickets updated:', newTicketCount);
    };

    return (
        <div
            className="w-full h-screen lg:bg-[url('/src/assets/background_mac.png')] bg-cover bg-center"
            style={{
                backgroundImage: `url(${login_background_iphone})`
            }}
        >
            <div className='w-full h-full flex flex-col justify-start items-center pt-20 lg:pt-32 xl:pt-16'>
                <header className='w-full h-1/10 flex justify-between items-center absolute top-0 xl:top-10 xl:px-5 z-[1000000]'>
                    <div className=' h-full flex justify-start items-center'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <p className='text-2xl lg:text-7xl xl:text-6xl font-bold text-[#dbab1e] [-webkit-text-stroke:2px_#a17b0b]'>Player</p>
                            <p className='text-sm lg:text-4xl xl:text-3xl font-bold text-[#dbab1e] [-webkit-text-stroke:1px_#a17b0b]'>ID: 123456789</p>
                        </div>
                        <div className='max-w-8 lg:max-w-20 xl:max-w-16 w-full h-auto'>
                            <img src={imgear} alt="imgear" className='cursor-pointer hover:opacity-80 imgear' onClick={handleGearClick} />
                        </div>
                    </div>
                    <div className=' h-full flex justify-center items-center gap-3'>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto'>
                            <img src={one} alt="one" className='w-full one cursor-pointer hover:opacity-80' onClick={handleOneClick} />
                        </div>
                        <div className='max-w-10 lg:max-w-16 xl:max-w-12 w-full h-auto'>
                            <img src={alarm} alt="alarm" className='w-full' />
                        </div>
                        <div className='max-w-20 lg:max-w-[400px] xl:max-w-[120px] w-full h-auto relative'>
                            <img src={gacha} alt="gacha" className='w-full'/>
                            <div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2  font-bold text-lg lg:text-4xl xl:text-2xl text-center'>
                                {ticketCount}
                            </div>
                        </div>
                        
                    </div>
                </header>
                <main className='w-full flex flex-col justify-start items-center '>
                    <div className='w-full flex flex-col justify-start items-start pl-12 lg:pl-70 xl:pl-[600px] xl:pt-0  z-[10000]'>
                        <div className='text-4xl lg:text-7xl xl:text-5xl'>
                            <p>今日のタスク</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 relative'>
                            <div className='w-[330px] lg:w-[750px] xl:w-[500px] h-auto relative'>
                                <img src={task_not} alt="task_not" className='w-full h-auto'/>
                                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-3 lg:gap-8 pt-10 lg:pt-20 xl:pt-10'>
                                     <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl absolute top-10 lg:top-20 xl:top-10 left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[650px] xl:w-[450px]'>
                                         <p className='truncate flex-1'>{taskA ? taskA.text : 'タスクA'}</p>
                                         <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full flex-shrink-0'>
                                             <img 
                                                 src={taskA && taskA.archived ? completed : gear} 
                                                 alt={taskA && taskA.archived ? "completed" : "gear"} 
                                                 className='taskA cursor-pointer hover:opacity-80' 
                                                 onClick={() => handleTaskClick('taskA')} 
                                             />
                                         </div>
                                     </div>
                                     <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl absolute top-20 lg:top-40 xl:top-20 left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[650px] xl:w-[450px]'>
                                         <p className='truncate flex-1'>{taskB ? taskB.text : 'タスクB'}</p>
                                         <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full flex-shrink-0'>
                                             <img 
                                                 src={taskB && taskB.archived ? completed : gear} 
                                                 alt={taskB && taskB.archived ? "completed" : "gear"} 
                                                 className='taskB cursor-pointer hover:opacity-80' 
                                                 onClick={() => handleTaskClick('taskB')} 
                                             />
                                         </div>
                                     </div>
                                     <div className='flex justify-start items-center gap-8 text-3xl lg:text-7xl xl:text-5xl absolute top-30 lg:top-60 xl:top-30 left-1/2 transform -translate-x-1/2 w-[280px] lg:w-[650px] xl:w-[450px]'>
                                         <p className='truncate flex-1'>{taskC ? taskC.text : 'タスクC'}</p>
                                         <div className='w-[30px] lg:w-[45px] h-auto flex justify-center items-center h-full flex-shrink-0'>
                                             <img 
                                                 src={taskC && taskC.archived ? completed : gear} 
                                                 alt={taskC && taskC.archived ? "completed" : "gear"} 
                                                 className='taskC cursor-pointer hover:opacity-80' 
                                                 onClick={() => handleTaskClick('taskC')} 
                                             />
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-start items-start pl-5 xl:pl-[200px] xl:absolute xl:top-80'>
                        <div className='w-[300px] lg:w-[600px] xl:w-[400px] h-auto'>
                            <img src={hero_man} alt="hero_man" className='w-full h-auto'/>
                        </div>
                    </div>
                </main>
                <footer className='w-full h-1/10 gap-3 lg:gap-1 flex justify-between xl:justify-end items-center px-3 absolute bottom-5'>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={() => navigate('/home')}>
                        <img src={home} alt="home" className='w-full h-auto'/>
                    </div>
                     <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={() => navigate('/character-room')}>
                         <img src={character} alt="character" className='w-full h-auto'/>
                     </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleTicketClick}>
                        <img 
                            src={ticket} 
                            alt="ticket" 
                            className='w-full h-auto'
                        />
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={() => navigate('/battle-main')}>
                        <img src={battle} alt="battle" className='w-full h-auto'/>
                    </div>
                    <div className='max-w-20 lg:max-w-40 xl:max-w-20 w-full h-auto cursor-pointer hover:opacity-80' onClick={handleClanClick}>
                        <img src={clan} alt="clan" className='w-full h-auto'/>
                    </div>
                </footer>
            </div>
        </div>
    )
}
