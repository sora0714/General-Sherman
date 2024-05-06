import Image from "next/image";
import AddImg from "@/assets/Add value.svg";
import Plateform from "@/assets/plateform.svg";
import Product from "@/assets/product.svg";
import Providing from "@/assets/provising.svg";
import Magna from "@/assets/management.svg";
import Advising from "@/assets/advising.svg";
const AddingValue = () => {
  return (
    <div className="px-[8vw] py-[3vw]  bg-[#101315] w-[100vw] ">
    <div>
      <Image src={AddImg} alt="add" className="overflow-hidden"/>
    </div>
    <div className="">
      <div className="flex flex-wrap gap-[4vw] w-[80vw]">
      <Image src={Plateform} alt="" className=""/>
      <Image src={Product} alt="" className=""/>
      <Image src={Providing} alt="" className=""/>
      <Image src={Magna} alt="" className=""/>
      <Image src={Advising} alt="" className=""/>
      <a href="" className="rounded-full text-center text-[20px] w-[238px] h-[68px] py-[20px] mx-[30px] my-[75px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE] ">Discover me</a>
      </div>
      
    </div>
    </div>
  );
};

export default AddingValue;
