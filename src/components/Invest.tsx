  import Image from "next/image";
  import Why from "@/assets/WHY WE INVEST.svg";
  import Text from "@/assets/UnkLouis text.svg";
  import InvestLogo from "@/assets/image 27.svg";
  const Invest = () => {
    return (
      <div  className="bg-[#101315] px-[8vw] py-[3vw] flex flex-wrap">
        <div>
          <Image src={Why} alt="why" className="1xl:w-[30vw]"/>
          <div className="pt-[35px] w-[49vw]">
          <div className="1xl:text-[1.4vw] text-[18px] text-[#7C8782]">UnkLouis mission is to enable, empower and advance the truly decentralized world for more transparent and efficient markets and products.</div>
          <div className="mt-[30px] 1xl:text-[1.4vw] text-[18px] text-[#7C8782]">We believe in a future that is decentralized and not controlled by several dominant players, we believe in a world where various trading platforms, chains, and products co-exist enabling various use cases, competing on token designs, and ultimately solving for a diverse, decentralized future.</div>
          <div className="mt-[30px] 1xl:text-[1.4vw] text-[18px] text-[#7C8782]">As one of the largest players in DeFi, we would like to support the projects where we know we can be true value-adding, develop a partnership and help influence the positive outcome.</div>
          <div className="mt-[30px] 1xl:text-[1.4vw] text-[18px] text-[#7C8782]">We do not target large ownership stakes, decentralized ownership is an important prerequisite to transitioning to Web3. We have ambitious price targets for our investments, meaning we are in for the long term.</div>
          </div>
          </div>
          <Image src={InvestLogo} alt="" className="w-[20vw] mx-[90px]  mt-[50px]"/>
      </div>
    );
  };

  export default Invest;
