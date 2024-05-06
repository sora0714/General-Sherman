import Rocket from "./svgs/Rocket";
import Image from "next/image";
import Founder from "@/assets/Group 1045.svg";


const FounderCom = () => {


  return (
    <div className="bg-[#101315] w-[100vw] px-[8vw] py-[3vw] flex-col flex">

        <Image src={Founder} alt="Founder" className="mt-[131px]" />
        <a href="" className="rounded-full text-center text-[20px] w-[238px] h-[68px] py-[20px] my-[29px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE] ">Get in Touch</a>
       
    </div>
    
  );
};

export default FounderCom;
