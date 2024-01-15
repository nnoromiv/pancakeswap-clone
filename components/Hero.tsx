import Image from "next/image";
import { APTOS, ARROW, A_X_PS, BIG_DIVIDER, BIG_DIVIDER_DARK, LOTTERY, PERPETUAL, SHARE } from "./images";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AstroBunny, FatButton } from ".";


function Carousel(){
    const [emblaRef] = useEmblaCarousel( {loop: true}, [Autoplay()])
    return(
        <div className="embla ">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div id="item1" className="embla__slide relative flex flex-col items-center justify-end max-w-full w-full z-0">
                        <div className="flex flex-col h-full w-full rounded-3xl bg-gradient-bg z-0 justify-between">
                            <Image priority width={10000} height={50} alt="carousel"  src={APTOS} className="flex absolute max-w-full max-h-full -bottom-7 overflow-visible z-[1] transition-all ease-in-out" />
                            <div className="flex mt-10 ml-10 max-[321px]:ml-5">
                                <Image priority width={250} height={250} alt="carousel"  src={A_X_PS} className="h-full object-contain" />
                            </div>
                            <div className="shadow-black  ml-10 max-[321px]:ml-5">
                                <h4 className="mb-0 text-primary-darker text-6xl max-[769px]:text-5xl max-[426px]:text-2xl font-semibold">Hello Aptos Project Team!</h4>
                            </div>
                            <div className="z-50  mb-10 ml-10 max-[321px]:ml-5">
                                <button className="flex items-center justify-center h-12 p-5 bg-accent rounded-2xl  font-semibold text-primary cursor-pointer transition-all hover:opacity-65 active:opacity-85 active:translate-y-[1px]">
                                    <p className="mr-2"> 👋 Get in Touch </p>
                                    <Image priority width={20} height={20} alt="share"  src={SHARE} className="" />
                                </button>
                            </div>
                        </div>                    
                    </div> 
                    <div id="item2" className="embla__slide relative flex flex-col items-center justify-end max-w-full w-full z-0">
                        <div className="flex flex-col h-full w-full rounded-3xl bg-secondary z-0 justify-between">
                            <Image priority width={10000} height={50} alt="carousel"  src={LOTTERY} className="flex absolute max-w-full max-h-full -bottom-7 overflow-visible z-[1] transition-all ease-in-out" />
                            <div className="flex mt-10 ml-10 max-[321px]:ml-5">
                                <h2 className="text-accent-alert-soft font-bold text-3xl max-[321px]:text-2xl">Perpetual Futures</h2>
                            </div>
                            <div className="shadow-black  m-5">
                                <h4 className="ml-5 mt-5 mb-5 max-[321px]:ml-0 text-primary-darker text-6xl max-[769px]:text-5xl max-[426px]:text-2xl font-semibold">Upto 100X Leverage!</h4>
                            </div>
                            <div className="z-50  mb-10 ml-10 max-[321px]:ml-5">
                                <button className="flex items-center justify-center h-12 p-5 bg-accent rounded-2xl  font-semibold text-primary cursor-pointer transition-all hover:opacity-65 active:opacity-85 active:translate-y-[1px]">
                                    <p className="mr-2"> Trade Now </p>
                                    <Image priority width={20} height={20} alt="share"  src={ARROW} className="" />
                                </button>
                            </div>
                        </div>                    
                    </div> 
                    <div id="item3" className="embla__slide relative flex flex-col items-center justify-end max-w-full w-full z-0">
                        <div className="flex flex-col h-full w-full rounded-3xl bg-secondary z-0 justify-between">
                            <Image priority width={10000} height={50} alt="carousel"  src={PERPETUAL} className="flex absolute max-w-full max-h-full -bottom-7 overflow-visible z-[1] transition-all ease-in-out" />
                            <div className="flex mt-10 ml-10 max-[321px]:ml-5">
                                <h2 className="text-accent-alert-soft font-bold text-3xl max-[321px]:text-2xl">Win $90.100 in Lottery</h2>
                            </div>
                            <div className="shadow-black  m-5">
                                <h4 className="ml-5 mt-5 mb-5 max-[321px]:ml-0 text-primary-darker text-6xl max-[769px]:text-5xl max-[426px]:text-2xl font-semibold">06h 57m 00s</h4>
                            </div>
                            <div className="z-50  mb-10 ml-10 max-[321px]:ml-5">
                                <button className="flex items-center justify-center h-12 p-5 bg-accent rounded-2xl  font-semibold text-primary cursor-pointer transition-all hover:opacity-65 active:opacity-85 active:translate-y-[1px]">
                                    <p className="mr-2"> Play Now </p>
                                    <Image priority width={20} height={20} alt="share"  src={ARROW} className="" />
                                </button>
                            </div>
                        </div>                    
                    </div> 
                </div>
        </div>
        </div>
    )
}

const Page = () => {
    return(
        <div className="mt-[30px] max-[769px]:px-[20px] max-[456px]:px-[5px] flex justify-between gap-3 max-[456px]:flex-col ">
            <div className="flex flex-col justify-center">
                <h2 className="text-8xl font-bold text-secondary z-0 max-[1025px]:text-6xl max-[769px]:text-4xl max-[768px]:text-2xl">The moon is made <br /> of pancakes.</h2>
                <h2 className="mt-10 font-semibold text-xl z-0 max-[769px]:text-sm  text-secondary-darker dark:text-primary-darker">Trade, earn, and win crypto on the most popular decentralized <br /> platform in the galaxy.</h2>
                <div className="flex mt-10 gap-3 z-0">
                    <FatButton super={{ title: "Connect wallet"}} />
                    <FatButton outline super={{ title: "Trade Now"}} />
                </div>
            </div>
            <AstroBunny />
        </div>
    )
}

export default function Hero(){
    return(
        <header className="bg-hero-gradient dark:bg-hero-gradient-dark">
            <div className="px-[40px] max-[1025px]:px-[20px] max-[769px]:px-[10px] max-[426px]:px-[5px]">
                <Carousel />
                <Page />
            </div>
            <Image alt="" className="w-full -mt-72 dark:hidden max-[768px]:-mt-40 max-[426px]:-mt-20" width={100} height={100} src={BIG_DIVIDER} />
            <Image alt="" className="hidden w-full -mt-20 dark:flex" width={100} height={100} src={BIG_DIVIDER_DARK} />
        </header>
    )
}