import Image from "next/image";
import Patner from "@/assets/Patner with UnkLouis.svg"
const Intro = () => {
 

  return (
    <div className="bg-[radial-gradient(circle,#11281B, #000000)] w-[100vw]  h-[60vw] 1xl:h-[628px] px-[calc(50vw-210px)] 1xl:px-[26vw]">
      <Image src={Patner} alt="" className="w-[420px] 1xl:w-[40vw] mt-[120px] 1xl:mt-[10vw]"/>
      <div className="flex justify-center mt-[41px] w-[400px] 1xl:w-[485px] mx-[10] 1xl:mx-[calc(20vw-243px)]">
      <a href="/register" className="rounded-full text-center  w-[150px] h-[68px] py-[21px] text-[17px] 2ml:text-[19px] 2ml:py-[20px] mr-[24px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE] ">REGISTER</a>
      <a href="" className="rounded-full text-center  w-[187px] h-[68px] py-[21px] text-[17px] 2ml:text-[19px] 2ml:py-[20px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE]" >See case study</a>
      
      </div>
    </div>
  );
};

export default Intro;
