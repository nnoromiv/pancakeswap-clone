import Image from "next/image"
import { ASTRO_BUNNY, BOTTOM_L_BIG_ROCK, BOTTOM_L_SMALL_ROCK, BOTTOM_ROCK, BOTTOM_R_PANCAKE, MIDDLE_R_STAR, STAR_L_2X, STAR_R_2X, TOP_R_BIG_ROCK, TOP_R_SMALL_ROCK, TOP_R_STAR, TOP_R_STAR_2X } from "./images"

type AnimationProps = {
    children: React.ReactElement,
    style?: string
}

const Animation = ({children, style} : AnimationProps) => {
    return(
        <div className={`flex relative h-[40vw] w-[40vw] ${style}`}>{children}</div>
    )
}

const AstroBunny = () => {
    return(
        <Animation style="max-w-[36rem] max-h-[36rem] max-[456px]:hidden ">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-star" src={TOP_R_STAR} data-layer="-3" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-star" src={TOP_R_STAR_2X} data-layer="-3" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_R_SMALL_ROCK} data-layer="-3" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_R_PANCAKE} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_R_BIG_ROCK} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-star" src={MIDDLE_R_STAR} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_L_SMALL_ROCK} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={ASTRO_BUNNY} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-star" src={STAR_R_2X} data-layer="1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_ROCK} data-layer="2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_L_BIG_ROCK} data-layer="3" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-star" src={STAR_L_2X} data-layer="3" />
            </div>
        </Animation>
    )
}

export {
    AstroBunny
}