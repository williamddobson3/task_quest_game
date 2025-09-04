import React from "react";
import background_tablet from '../../assets/background_tablet.png';
import first_job from '../../assets/first_job.png';
import second_job from '../../assets/second_job.png';
import third_job from '../../assets/third_job.png';
import fourth_job from '../../assets/fourth_job.png';
import fifth_job from '../../assets/fifth_job.png';
import battle_board from '../../assets/battle_board.png';

export default function JobCards() {
  return (
    <div className="flex justify-center items-center w-full h-screen relative ">
      <div className="flex justify-center items-center w-full h-full absolute">
        <img src={background_tablet} alt="" className="flex justify-center items-center w-full h-full" />
      </div>
      <div className="flex justify-center flex-col xl:flex-row items-center w-full h-auto z-[100] gap-8">
        <div className="w-[330px] lg:w-[700px] xl:w-[500px] h-auto flex justify-center items-center relative">
          <img src={battle_board} alt="" />
          <p className="absolute top-15 lg:top-30 xl:top-20 left-7 lg:left-13 w-9/10 lg:w-8/10 text-[14px] lg:text-[29px] xl:text-[20px] ">チュートリアル完了!!! <br />

            ジョブカード全種+初期装備プレゼント! <br />

            「自分にあったジョブカードを装備しよう! <br />

            (タップでカードの詳細が見れるよ)</p>
        </div>
        <div className="w-auto h-auto flex justify-center items-center flex-col gap-3 ">
          <div className="flex justify-center items-center gap-3 xl:gap-10 w-auto h-auto">
            <img src={first_job} alt="" className="w-[100px] lg:w-[200px] xl:w-[180px] h-auto " />
            <img src={second_job} alt="" className="w-[100px] lg:w-[200px] xl:w-[180px]   h-auto " />
            <img src={third_job} alt="" className="w-[100px] lg:w-[200px] xl:w-[180px]   h-auto " />
          </div>
          <div className="flex justify-center items-center gap-3 xl:gap-10 w-auto h-auto">
            <img src={fourth_job} alt="" className="w-[100px] lg:w-[200px] xl:w-[180px]   h-auto " />
            <img src={fifth_job} alt="" className="w-[100px] lg:w-[200px] xl:w-[180px]   h-auto " />
          </div>
        </div>
      </div>
    </div>
  )
}