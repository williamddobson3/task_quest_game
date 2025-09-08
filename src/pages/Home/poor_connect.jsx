import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from './main';
import poor_connect from '../../assets/poor_connect.png';

export default function PoorConnect() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      // When network status changes from offline to online
      navigate('/awake');
      
      // After 2 seconds, redirect to home
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    };

    // Add event listener for online status
    window.addEventListener('online', handleOnline);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [navigate]);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-full h-full flex justify-center items-center z-[-1] ">
        <Main />
      </div>
      <div className="w-[300px] lg:w-[700px] xl:w-[600px] h-auto flex justify-center items-center z-[100] absolute top-40 lg:top-60 xl:top-30 ">
        <img src={poor_connect} alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}
