import Image from "next/image";
import { BIG_DIVIDER, BIG_DIVIDER_DARK } from "./images";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AstroBunny, FatButton } from ".";
import { CAROUSEl } from "../constants";


function Carousel(){
    const [emblaRef] = useEmblaCarousel( {loop: true}, [Autoplay()])
    return(
        <div className="embla pt-[40px]">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {
                        CAROUSEl.map((item, index) => (
                            <div id={`item` + index} className="embla__slide relative flex flex-col items-center justify-end max-w-full w-full z-0">
                                <div className={`flex flex-col h-full w-full rounded-3xl z-0 justify-between ${item.extraStyle}`}>
                                    <Image priority width={10000} height={50} alt="carousel"  src={item.bodyImage} className="flex absolute max-w-full max-h-full -bottom-7 overflow-visible z-[1] transition-all ease-in-out" />
                                    <div className="flex mt-10 ml-10 max-[321px]:ml-5">
                                        {
                                            item.topImage 
                                            ? <Image priority width={250} height={250} alt="carousel"  src={item.image} className="h-full object-contain" />
                                            : <h2 className="text-accent-alert-soft font-bold text-3xl max-[321px]:text-2xl">{item.text}</h2>
                                        }
                                    </div>
                                    <div className="shadow-black mt-5 mb-5 ml-10 max-[321px]:ml-5">
                                        <h4 className="mb-0 text-primary-darker text-6xl max-[769px]:text-5xl max-[426px]:text-2xl font-semibold">{item.title}</h4>
                                    </div>
                                    <div className="z-50 mt-5 mb-10 ml-10 max-[321px]:ml-5">
                                        <FatButton super={{ title: `${item.buttonTitle}`, customStyle: "dark:text-white"}} image providedImage={item.buttonImage} />                                
                                    </div>
                                </div>                    
                            </div> 
                        ))
                    }
                </div>
        </div>
        </div>
    )
}

const Page = () => {
    return(
        <div className="mt-[30px] max-[769px]:px-[20px] max-[456px]:px-[5px] flex justify-between max-[426px]:items-center gap-3 max-[456px]:flex-col ">
            <div className="flex flex-col justify-center relative z-[2]">
                <h2 className="text-8xl font-bold text-secondary z-0 max-[1025px]:text-7xl max-[426px]:text-5xl">The moon is made <br /> of pancakes.</h2>
                <h2 className="mt-10 font-semibold text-xl z-0 max-[769px]:text-sm  text-secondary-darker dark:text-primary-darker">Trade, earn, and win crypto on the most popular decentralized <br /> platform in the galaxy.</h2>
                <div className="flex mt-10 gap-3 z-0">
                    <FatButton super={{ title: "Connect wallet"}} image={false} providedImage={""} />
                    <FatButton outline super={{ title: "Trade Now"}} image={false} providedImage={""} />
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