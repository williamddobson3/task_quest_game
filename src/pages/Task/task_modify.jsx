
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import task_input_panel from '../../assets/task_input_panel.png';
import work from '../../assets/work.png';
import study from '../../assets/study.png';
import life from '../../assets/life.png';
import health from '../../assets/health.png';
import socializing from '../../assets/socializing.png';
import board_phone from '../../assets/board_phone.png';
import complete from '../../assets/complete.png';
import delete_task from '../../assets/delete.png';
import archieve from '../../assets/archieve.png';
import back from '../../assets/back.png';


export default function TaskModify() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const taskType = searchParams.get('task') || 'taskA';
    
    const [taskData, setTaskData] = useState(null);
    const [taskText, setTaskText] = useState('');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const savedTask = localStorage.getItem(taskType);
        if (savedTask) {
            const parsedTask = JSON.parse(savedTask);
            setTaskData(parsedTask);
            setTaskText(parsedTask.text);
            setSelectedType(parsedTask.type);
        }
    }, [taskType]);

    const handleBackClick = () => {
        navigate('/home');
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const handleCompleteClick = () => {
        if (taskText.trim() && selectedType) {
            const updatedTaskData = {
                text: taskText.trim(),
                type: selectedType,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem(taskType, JSON.stringify(updatedTaskData));
            navigate('/home');
        }
    };

    const handleDeleteClick = () => {
        localStorage.removeItem(taskType);
        navigate('/home');
    };

    if (!taskData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('src/assets/background_iphone.png')] bg-cover bg-center relative">
            <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
                <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' onClick={handleBackClick} />
            </div>
            <div className="w-full xl:w-1/3 h-full flex flex-col justify-center items-center">
                <div className='w-[200px] lg:w-[400px] xl:w-full flex flex-col justify-between items-between xl:mr-60'>
                    <div className='w-full text-left xl:text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
                        <p>タスク&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='w-full text-right text-[50px] lg:text-[100px] xl:text-[50px] font-bold'>
                        <p>の入力</p>
                    </div>
                </div>
                <div className='w-9/10 lg:w-7/10 xl:w-full h-auto flex flex-col justify-center items-center relative xl:mr-60 gap-3'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img src={task_input_panel} alt="" className='w-full h-auto' />
                    </div>
                    <div className='absolute top-0 left-0 w-full flex flex-col justify-center items-center z-100 pt-20 lg:pt-40 xl:pt-25 gap-2'>
                        <div className='w-8/10 h-auto relative'>
                            <img src={board_phone} alt="" className='w-full h-auto' />
                            <textarea 
                                name="task" 
                                id="task" 
                                value={taskText}
                                onChange={(e) => setTaskText(e.target.value)}
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-transparent border-none outline-none resize-none text-center text-lg' 
                                placeholder='タスクを入力してください'
                            />
                        </div>
                        <div className='w-full h-auto flex flex-col justify-center items-center gap-2'>
                            <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                                <img src={work} alt="" className={`cursor-pointer hover:opacity-80 ${selectedType === 'work' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleTypeClick('work')} />
                                <img src={study} alt="" className={`cursor-pointer hover:opacity-80 ${selectedType === 'study' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleTypeClick('study')} />
                                <img src={life} alt="" className={`cursor-pointer hover:opacity-80 ${selectedType === 'life' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleTypeClick('life')} />
                            </div>
                            <div className='w-1/4 h-auto flex justify-center items-center gap-2'>
                                <img src={health} alt="" className={`cursor-pointer hover:opacity-80 ${selectedType === 'health' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleTypeClick('health')} />
                                <img src={socializing} alt="" className={`cursor-pointer hover:opacity-80 ${selectedType === 'socializing' ? 'opacity-100' : 'opacity-50'}`} onClick={() => handleTypeClick('socializing')} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/2 xl:absolute bottom-0 right-[-400px] gap-2 xl:gap-4 '>
                        <div className='justify-center items-center gap-2 hidden xl:flex'>
                            <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                        </div>
                        <div className='flex justify-center items-center gap-2 xl:flex-col xl:gap-4'>
                            <img src={complete} alt="" className='w-[150px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' onClick={handleCompleteClick} />
                            <img src={delete_task} alt="" className='w-[150px] lg:w-[200px] h-auto cursor-pointer hover:opacity-80' onClick={handleDeleteClick} />
                        </div>
                        <div className='flex justify-center items-center gap-2 xl:hidden'>
                            <img src={archieve} alt="" className='w-[150px] lg:w-[200px] h-auto' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
