import React from "react";
import JobCards from "./job_cards";
import card_one from '../../assets/card_one.png';
import previous_half from '../../assets/previous_half.png';
import next_full from '../../assets/next_full.png';
import use from '../../assets/use.png';
import previous_full from '../../assets/previous_full.png';
import next_half from '../../assets/next_half.png';
import battle_board from '../../assets/battle_board.png';
import card_two from '../../assets/card_two.png';


export default function CardDesc() {
  return (
    <div className="w-full h-[200vh] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-screen justify-center items-center relative">
          <div className="w-full h-full opacity-50">
            <JobCards />
          </div>
          <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 flex-col z-[100] gap-1 lg:gap-5 xl:gap-10 xl:flex-row ">
            <div className="w-[300px] lg:w-[600px] xl:w-[400px] flex justify-center items-center  ">
              <img src={card_one} alt="" className="w-full h-auto" />
            </div>
            <div className="w-auto h-auto flex justify-center items-center flex-col gap-5 xl:mb-[100px] ">
              <div className="w-[300px] lg:w-[600px] flex justify-center items-center relative ">
                <img src={battle_board} alt="" className="w-full h-auto" />
                <p className=" absolute top-7 lg:top-18 left-7 lg:left-13 w-[250px] lg:w-[500px] lg:text-[35px] ">力と体力で突き進む肉体派。運動やフィジカル系タスクとの相性が抜群。力と体力特化型。運動習慣に最適</p>
              </div>
              <div className="w-full h-auto justify-center items-center flex flex-col gap-5 lg:mt-[60px] xl:mt-[10px] ">
                <div className="w-auto h-auto flex justify-center items-center gap-10">
                  <img src={previous_half} alt="" className="w-[90px] lg:w-[150px] " />
                  <img src={next_full} alt="" className=" w-[90px] lg:w-[150px] " />
                </div>
                <div className="w-full h-auto flex justify-end items-center lg:absolute lg:bottom-[50px] lg:right-[80px] ">
                  <img src={use} alt="" className="w-[140px] lg:w-[200px] " />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full h-screen justify-center items-center relative ">
          <div className="w-full h-full opacity-50">
            <JobCards />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-[100] gap-1 lg:gap-5 xl:gap-10 xl:flex-row ">
            <div className="w-[300px] lg:w-[600px] xl:w-[400px] flex justify-center items-center  ">
              <img src={card_two} alt="" className="w-full h-auto" />
            </div>
            <div className=" w-auto h-auto flex justify-center items-center flex-col gap-5 xl:mb-[70px] ">
              <div className="w-[300px] lg:w-[600px] flex justify-center items-center relative ">
                <img src={battle_board} alt="" className="w-full h-auto" />
                <p className=" absolute top-7 left-7 w-[250px] left-7 lg:left-13 lg:top-10  lg:w-[500px] lg:text-[35px]  ">武器　鍛錬者用　　　6.0  <br />
                  鍛錬者に受け継がれてきた装備。鍛錬者の力を引き出すために作られた特別な一品。 <br />
                  ジョブと合致した場合+2
                </p>
              </div>
              <div className="w-full h-auto justify-center items-center flex flex-col gap-5 lg:mt-[60px] xl:mt-[20px] ">
                <div className="w-auto h-auto flex justify-center items-center gap-10">
                  <img src={previous_full} alt="" className="w-[90px]  lg:w-[150px]  " />
                  <img src={next_half} alt="" className=" w-[90px] lg:w-[150px]  " />
                </div>
                <div className="w-full h-auto flex justify-end items-center  lg:absolute lg:bottom-[60px] lg:right-[80px]   ">
                  <img src={use} alt="" className="w-[140px] lg:w-[200px]  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}