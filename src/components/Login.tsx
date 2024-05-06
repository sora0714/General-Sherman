import Image, { StaticImageData } from "next/image";
import SignUp from "@/assets/Sign up.svg"
import LoginImg from "@/assets/Login to UnkLouis.svg";
import LoginqImg from "@/assets/Login.svg"


interface SignUpCardProps {
  title: string;
  item?: string;
  className?:string;
  type?:string
}

const SignUpCard: React.FC<SignUpCardProps> = ({
  title,
  item,
  type,
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
      type={type}
      className={`border-white border-[1px] text-white  bg-black ${className ?? ""}`}
      placeholder={item}
    />
  </div>
      
   
  );
};

const GetN = () => {
  const info=[

     {title:"Your Email*",
      item:"Ex. talhatahir778899@gmail.cm",
      className:"px-[30px] py-[15px] 1xl:w-[749px] w-[60vw] h-[57px] rounded-full"
      },
      
     {title:"password",
     type:"password",
     className:"px-[30px] py-[15px] 1xl:w-[749px] w-[60vw] h-[57px] rounded-full "
     },
  ];
  return (
    <div className="px-[8vw] 1xl:px-[calc(50vw-456px)]">
      <div className="bg-[#161A1E] rounded-lg w-[80vw] 1xl:w-[912px] py-[72px] px-[9vw] 1xl:px-[77px] my-[110px]" >
    <div><Image src={LoginImg} alt="Get" className="mx-[6vw] 1xl:mx-[46.57px] 1xl:w-[665px] w-[50vw]"/></div>
    <div className="my-[15px]"><Image src={LoginqImg} alt="" className="mx-[23vw] 1xl:mx-[300px] 1xl:w-[157px] w-[12vw]"/></div>
   
    <SignUpCard title={info[0].title} item={info[0].item} className={info[0].className}></SignUpCard>
    <SignUpCard title={info[1].title} item={info[1].item} className={info[1].className} type={info[1].type}></SignUpCard>
    
    <div className="text-white 1xl:w-[720px] w-[57vw] text-[15px] text-right cursor-pointer " > <ins className="text-[#78FA52] hover:text-[#ffff00]">Forget Password</ins></div>
       <button className=" w-[60vw] 1xl:w-[758.36px] h-[57px] rounded-full bg-gradient-to-r from-[#55FFAE] to-[#75FA42] mt-[31px]" >Login</button>
      
   </div>
    </div>
   
  );
};

export default GetN;
