import { Coin, FatButton, Pool } from "."
import { ABOUT } from "../constants"

const About = () => {
  return (
    <>
        <div className="flex justify-center items-center py-10 px-5 relative z-[1]">
            <div className="relative z-[2]">
                <h1 className="text-secondary-darker my-5 text-5xl font-bold dark:text-white max-[426px]:text-4xl">
                    <span className="text-secondary-lighter">Cake</span> makes our world go <br /> round.
                </h1>
                <p className="text-secondary-lighter my-5 dark:text-secondary-lightest max-[426px]:px-2 max-[426px]:text-xs">CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, 
                <br /> farm it, spend it, stake it... heck, you can even vote with it!</p>
                <div className="flex gap-5">
                    <FatButton super={{ title: "Buy Cake" }} image={false} providedImage={""}  />
                    <FatButton outline super={{ title: "Learn", customStyle: "border-none" }} image={false} providedImage={""} />
                </div>
            </div>
            <Coin />
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 max-sm:grid-cols-2 px-20 max-lg:px-5 max-md:pl-5 pb-12 gap-4">
        {
            ABOUT.map((item : any, index : number) => (
                <div key={index}>
                    <h5 className="font-semibold text-xl text-secondary max-[426px]:text-base ">{item.title}</h5>
                    <p className="font-semibold text-xl text-secondary-darker dark:text-white">{item.text}</p>
                </div>
            ))   
        }     
        </div>
    </>
  )
}

export default About