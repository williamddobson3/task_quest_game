import React from "react";
import back from '../../assets/back.png';
import muscle_type from '../../assets/muscle_type.png';
import clan_desc from '../../assets/clan_desc.png';
import partisipant from '../../assets/partisipant.png';
import background_tablet from '../../assets/background_tablet.png';


export default function ClanDescription() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='w-vw h-full flex justify-center items-start absolute top-0 left-0'>
        <img src={back} alt="" className='w-[100px] lg:w-[200px] h-auto ' />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center z-[-1] ">
          <img src={background_tablet} alt="" className="w-full h-full" />
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center gap-5 absolute top-0 left-0" >
          <div className="text-[40px] lg:text-[100px] font-bold " >
            <p>クラン詳細</p>
          </div>
          <div className="w-[400px] lg:w-[900px] xl:w-[500px] h-auto flex justify-center xl:justify-between items-center xl:mr-100" >
            <img src={muscle_type} alt="" className="w-[120px] lg:w-[350px] xl:w-[200px] h-auto " />
            <p className="text-[40px] lg:text-[100px] xl:text-[50px] font-bold text-white ">クラン名</p>
          </div>
          <div className="w-[300px] lg:w-[900px] xl:w-[500px] h-auto flex justify-center items-center xl:mr-100">
            <img src={clan_desc} alt="" className="w-full h-auto" />
          </div>
          <div className="w-[150px] lg:w-[500px] xl:w-[300px] h-auto flex justicy-center items-center xl:absolute xl:right-10 xl:bottom-10">
            <img src={partisipant} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}