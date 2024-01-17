import Image from "next/image"
import { FatButton, Profit } from "."
import { EARN_DIVIDER, EARN_DIVIDER_DARK, INTERCHANGE } from "./images"
import { useEffect, useState } from "react"
import { PoolProps } from "../types"
import { POOL, SYRUP } from "../constants"

const Pool = ({ Pool } : PoolProps) => {
    return (
        Pool.map((item : any, index : number) => (
            <div key={index}>
                <h5 className="font-semibold text-xs text-secondary">{item.poolName}</h5>
                <p className="font-semibold text-xl text-secondary-darker dark:text-white">{item.gain}%</p>
                <p className="font-normal text-base dark:text-secondary-lightest">APR</p>
            </div>
        ))
    )
}

const EarnInformation = () => {

    const [switched, setSwitched] = useState(false)
    const [text, setText] = useState("Farms")


    useEffect(() => {

        const switchData = () => {

          setSwitched(!switched);
    
          if (text === "Farms") {
            setText("Syrup Pools");

          } else {
            setText("Farms");

          }
        };
    
        const intervalId = setInterval(switchData, 4000);

        return () => clearInterval(intervalId);

    
      }, [text]);

    return(
        <div className="flex flex-col px-20 max-lg:px-5 max-md:px-1 lg:pb-24 gap-4 mt-10 md:pb-48 max-sm:pb-56">
            <div className="flex cursor-pointer" >
                <h3 className="text-secondary-darker font-bold text-4xl dark:text-white">Top <span id="text" className="text-secondary">{text}</span></h3>
                <Image src={INTERCHANGE} width={30} height={30} alt="" />
            </div>
            <div className="-mt-10">
                <div id="farms" className={`w-full absolute grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-2 ${switched ? 'opacity-0': 'opacity-100'} transition-all ease-in-out ${switched ? 'translate-y-0' : 'translate-y-12'} pointer-events-none`}>
                    <Pool Pool={POOL} />  
                </div>
                <div id="syrup" className={`w-full absolute grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-2 ${switched ? 'opacity-100': 'opacity-0'} transition-all ease-in-out ${switched ? 'translate-y-12' : 'translate-y-0'} `}>
                    <Pool Pool={SYRUP} />  
                </div>
            </div>
        </div>
    )
}

const Earn = () => {
  return (
    <>
        <Image alt="" className="w-full dark:hidden" width={100} height={100} src={EARN_DIVIDER} />
        <Image alt="" className="hidden w-full dark:flex" width={100} height={100} src={EARN_DIVIDER_DARK} />

        <div className="py-10 px-5 relative z-[1] bg-earn-gradient dark:bg-earn-gradient-dark">
           <div className="flex justify-center items-center ">
                <Profit />
                <div className="relative z-[2]">
                    <h1 className="text-secondary-darker my-5 text-6xl font-bold dark:text-white max-[426px]:text-4xl">
                        <span className="text-secondary-lighter">Earn</span> passive income with <br /> crypto.
                    </h1>
                    <p className="text-secondary-lighter my-5 dark:text-secondary-lightest max-[426px]:px-2 max-[426px]:text-xs">PancakeSwap makes it easy to make your crypto work for you.</p>
                    <div className="flex gap-5">
                        <FatButton super={{ title: "Explore" }}  />
                        <FatButton outline super={{ title: "Learn", customStyle: "border-none" }} />
                    </div>
                </div>
           </div>
            <EarnInformation /> 
        </div>
    
    </>

  )
}

export default Earn