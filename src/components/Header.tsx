import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/signup_logo.png";

const Header = () => {

  return (
    <header className="container flex justify-between  bg-[#101315] py-1.5 h-[81px]" >
      <div className="flex items-center">
        <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo" className="w-[100px] ml-[29px] 2ml:w-[126px] 2ml:ml-[45px]"  />
      </div>
      <div className="flex items-center mr-[23px] 2ml:mr-[45px]">
        <a href="/register" className="rounded-full text-center 2ml:w-[141px] w-[120px] h-[50px] py-[18px] text-[12px] 2ml:text-[15px] 2ml:py-[15px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE] ">REGISTER</a>
        <a href="/dashboard" className="rounded-full text-center ml-[12px] 2ml:w-[141px] w-[120px] h-[50px] py-[18px] text-[12px] 2ml:text-[15px] 2ml:py-[15px] bg-[#172F26] hover:bg-[#55FFAE] hover:text-[#010402] text-[#55FFAE]" >SCRAPE</a>
      </div>
    </header>
  );
};

export default Header;
