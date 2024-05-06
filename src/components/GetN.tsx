import Image, { StaticImageData } from "next/image";
import Get from "@/assets/GET IN TOUCH TO SCRAPE.svg";
import HoldingsImg from "@/assets/holding.jpg";
import SignUp from "@/assets/Sign up.svg"
import Whale from "@/assets/holdings/whale.jpg";
import Shark from "@/assets/holdings/shark.jpg";
import Dolphin from "@/assets/holdings/dolphin.jpg";
import Squid from "@/assets/holdings/squid.jpg";
import Turtle from "@/assets/holdings/turtle.jpg";
import Crab from "@/assets/holdings/crab.jpg";
import Shrimp from "@/assets/holdings/shrimp.jpg";

interface SignUpCardProps {
  title: string;
  item?: string;
  className?:string;
}

const SignUpCard: React.FC<SignUpCardProps> = ({
  title,
  item,
  className,

}) => {
  return (
    <div className="block mr-[27.34px] mb-[31px]">
    <div className="text-[16px] text-white mb-2">
     {title}
    </div>
    <input
      id={title}
      name={title}
      type={title}
      className={`border-white border-[1px] text-white bg-black ${className ?? ""}`}
      placeholder={item}
    />
  </div>
      
   
  );
};

const GetN = () => {
  const info=[
    {title:"FirstName*",
     item:"Ex. Talha",
     className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px]  rounded-full"
  },
     {title:"Last name*",
      item:"Ex. Talha",
      className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px] rounded-full"
      },

     {title:"Your Email*",
      item:"Ex. talhatahir778899@gmail.cm",
      className:"px-[30px] py-[15px] 1xl:w-[749px] w-[60vw] h-[57px] rounded-full"
      },
      
     {title:"Company name*",
     item:"Ex. General Sherman",
     className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px] rounded-full"
     },
     
     {title:"Telegram Handle*",
      item:"Ex. Talha",
      className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px] rounded-full"
      },
      
     {title:"Location",
     item:"Ex. North Americ",
     className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px] rounded-full"
     },
     
     {title:"Account type*",
      item:"Ex. Talha",
      className:"px-[30px] py-[15px] w-[60vw] 1xl:w-[361px] h-[57px] rounded-full"
      },
      
     {title:"General Sherman Contact",
     item:"Do you have an established relationship with one of our BD members? Please specify",
     className:"px-[30px] py-[15px] 1xl:w-[749px] w-[60vw] h-[57px] rounded-full"
     },

  ];
  return (
    <div className="px-[8vw] 1xl:px-[calc(50vw-456px)]">
      <div className="bg-[#000101] w-[80vw] 1xl:w-[912px] py-[72px] px-[9vw] 1xl:px-[77px] my-[110px]" >
    <div><Image src={Get} alt="Get" className="mx-[6vw] 1xl:mx-[46.57px] 1xl:w-[665px] w-[50vw]"/></div>
    <div className="my-[15px]"><Image src={SignUp} alt="" className="mx-[23vw] 1xl:mx-[300px] 1xl:w-[157px] w-[12vw]"/></div>
    <div className="1xl:flex block ">
    <SignUpCard title={info[0].title} item={info[0].item} className={info[0].className}></SignUpCard>
    <SignUpCard title={info[1].title} item={info[1].item} className={info[1].className}></SignUpCard>
    </div>
    <SignUpCard title={info[2].title} item={info[2].item} className={info[2].className}></SignUpCard>
    <div className="1xl:flex block">
    <SignUpCard title={info[3].title} item={info[3].item} className={info[3].className}></SignUpCard>
    <SignUpCard title={info[4].title} item={info[4].item} className={info[4].className}></SignUpCard>
    </div>
    <div className="1xl:flex block">
    <SignUpCard title={info[5].title} item={info[5].item} className={info[5].className}></SignUpCard>
    <SignUpCard title={info[6].title} item={info[6].item} className={info[6].className}></SignUpCard>
    </div>
    <SignUpCard title={info[7].title} item={info[7].item} className={info[7].className}></SignUpCard>
   
    <div className="text-[16px] text-white mb-2">
     Additional info
    </div>
    <textarea
      id="Additional info"
      name="Additional info"
      className="border-white border-[1px] text-white bg-black px-[30px] py-[15px] 1xl:w-[749px] w-[60vw] h-[219px] rounded-[30px]" 
      placeholder="Do you have an established relationship with one of our BD members? Please specify"
    />
    <div className="text-white 1xl:w-[768px] w-[361px] text-[#A1A1A1] text-[15px]">LukLouis  Trading Ltd., LukLouis  Pte. Ltd., and affiliates need the contact information 
      you provide to us to contact you about our products and services. You may unsubscribe from 
      these communications at anytime. For information on how to unsubscribe, as well as our privacy
       practices and commitment to protecting your privacy, check out our <ins className="text-[#78FA52]">Privacy Policy.</ins></div>
       <button className=" w-[60vw] 1xl:w-[758.36px] h-[57px] rounded-full bg-gradient-to-r from-[#55FFAE] to-[#75FA42] mt-[31px]" >submit</button>
      
   </div>
    </div>
   
  );
};

export default GetN;
