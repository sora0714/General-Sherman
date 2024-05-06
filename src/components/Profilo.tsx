"use client";
import Image from "next/image";
import Mark from "@/assets/Group 1044.svg";
import ProLogo from "@/assets/image 29.svg";
import Text  from "@/assets/Group 1043.svg";
import Prev from "@/assets/next (2) 2.png";
import React,{useState} from "react";
const Profilo = () => {
 
  const[currentIndex, setCurrentIndex ]=useState<number>(1);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div>
<div className="bg-[#101315] w-[100vw] px-[8vw] py-[3vw] flex flex-wrap">
     <div className="">
      <Image src={Mark} alt="" className="1xl:w-[650px]"></Image>
      <Image src={Text} alt="" className="w-[650px] mt-[4vw]"></Image>
      <div className="flex flex-wrapp mt-[30px]">
      <Image src={Prev} alt="" className="mr-[27px] rounded-full hover:bg-[#3E8E75] cursor-pointer" onClick={handlePrevClick}></Image>
      <Image src={Prev} alt="" className="rotate-180  rounded-full hover:bg-[#3E8E75] cursor-pointer" onClick={handleNextClick}></Image>
      <p className="ml-[30px] text-[30px] text-white">0{currentIndex}/07</p>
      </div>
    
      
      </div> 
      <div className="bg-gradient-to-b from-[#3E8E75] ml-[7vw] to-[#1C2224] rounded-lg  w-[370px] h-[340px] 1xl:w-[39vw] 1xl:h-[34vw]  mt-[40px] 1xl:mt-[10px]">
        <Image src={ProLogo} alt="" className="w-[360px] 1xl:w-[38vw]"></Image>
        
      </div>
      
    </div>
    </div>
    
  );
};

export default Profilo;
