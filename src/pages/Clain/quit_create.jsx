import React from "react";
import { useNavigate } from "react-router-dom";
import CreateSelection from "./create_selection";
import quit_board from "../../assets/quit_board.png";
import quit_modify from "../../assets/quit_modify.png";
import cancel from "../../assets/cancel.png";

export default function QuitCreate() {
  const navigate = useNavigate();

  // Handle quit confirmation (delete clan)
  const handleQuitConfirm = () => {
    if (window.confirm('クランを削除しますか？この操作は取り消せません。')) {
      // Get clan data before removing
      const userClan = localStorage.getItem('userClan');
      if (userClan) {
        const clanData = JSON.parse(userClan);
        
        // Remove from clan list
        const existingClans = JSON.parse(localStorage.getItem('clanList') || '[]');
        const updatedClans = existingClans.filter(clan => clan.id !== clanData.id);
        localStorage.setItem('clanList', JSON.stringify(updatedClans));
      }
      
      // Remove user clan
      localStorage.removeItem('userClan');
      
      //alert('クランを削除しました。');
      navigate('/clain-main');
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/modify-selection');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center items-center opacity-50'>
        <CreateSelection></CreateSelection>
      </div>
      <div className='w-full h-full flex justify-center items-center absolute top-0 left-0'>
        <div className='w-[300px] lg:w-[800px] xl:w-[600px] h-[100px] flex justify-center items-center'>
          <img src={quit_board} alt="" />
        </div>
        <div className='w-[200px] lg:w-[400px] h-[100px] flex justify-center items-center absolute top-110 lg:top-220 xl:top-130  gap-3'>
          <div className='w-[100px] lg:w-[200px] h-[100px] flex justify-center items-center cursor-pointer hover:opacity-80' onClick={handleQuitConfirm}>
            <img src={quit_modify} alt="" />
          </div>
          <div className='w-[100px] lg:w-[200px] h-[100px] flex justify-center items-center cursor-pointer hover:opacity-80' onClick={handleCancel}>
            <img src={cancel} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
