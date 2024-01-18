'use client'

import Image from "next/image"
import { ASTRO_BUNNY, BLUE, BNB, BOTTOM_LEFT, BOTTOM_LEFT_TICKET, BOTTOM_L_BIG_ROCK, BOTTOM_L_SMALL_ROCK, BOTTOM_MIDDLE, BOTTOM_RIGHT, BOTTOM_RIGHT_PANCAKES, BOTTOM_ROCK, BOTTOM_R_PANCAKE, BTC, CAKE, COIN, FOLDER, GREEN, GREEN_TICKET, MIDDLE_R_STAR, PIE, PINK, PINK_TICKET, STAR_L_2X, STAR_R_2X, STOCK, TOP_BOTTOM, TOP_LEFT, TOP_MIDDLE, TOP_RIGHT, TOP_RIGHT_PANCAKES, TOP_RIGHT_TICKET, TOP_R_BIG_ROCK, TOP_R_SMALL_ROCK, TOP_R_STAR, TOP_R_STAR_2X, VIOLET, YELLOW } from "./images"
import React, { useEffect } from "react"
import { AnimationProps } from "../types"


const Animation = ({children, customStyle, id} : AnimationProps) => {
    useEffect(() => {
        const layer : NodeListOf<HTMLElement> = document.querySelectorAll(`#${id} > *`)
        window.addEventListener('mousemove', parallax)

        layer.forEach(item => {
            const order = item.getAttribute('data-layer');
            item.style.zIndex = (10 + Number(order)).toString();
            item.style.animationDelay = (Number(order)/2)-10 + 's';
        })

        function parallax(e : any){
            layer.forEach(item => {
                const order : any = item.getAttribute('data-layer');
                if(order !== null) {
                    const xAxis = - (e.clientX * order / 600);
                    const yAxis = - (e.clientY * order / 600);

                    item.style.left = xAxis + '%'
                    item.style.top = yAxis + '%'
                }
            })
        }

        return () => {
            window.removeEventListener('mousemove', parallax);
          };
    },[id])
    return(
        <div id={id} className={`flex relative w-[40vw] h-[40vw] max-[768px]:absolute max-[768px]:z-[1] max-[768px]:h-full max-[768px]:w-full  ${customStyle}`}>
             {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement, { id: id });
            })}
        </div>
    )
}



const AstroBunny = () => {
    return(
        <Animation customStyle="max-w-[36rem] max-h-[36rem] overflow-x-hidden" id="layer">
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

const Cryptos = () => {
    return(
        <Animation customStyle="max-w-[26rem] max-h-[26rem]" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BNB} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BTC} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={CAKE} data-layer="1" />
            </div>
        </Animation>
    )
}

const Profit = () => {
    return(
        <Animation customStyle="max-w-[26rem] max-h-[26rem]" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={FOLDER} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={PIE} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={STOCK} data-layer="1" />
            </div>
        </Animation>
    )
}

const Balls = () => {
    return(
        <Animation customStyle="max-w-[32rem] max-h-[32rem]" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={YELLOW} data-layer="-3" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={VIOLET} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={GREEN} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BLUE} data-layer="1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={PINK} data-layer="2" />

            </div>
        </Animation>
    )
}

const Tickets = () => {
    return(
        <Animation customStyle="max-w-[32rem] max-h-[32rem] z-0" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_RIGHT_TICKET} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_LEFT_TICKET} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={PINK_TICKET} data-layer="1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={GREEN_TICKET} data-layer="2" />
            </div>
        </Animation>
    )
}

const Coin = () => {
    return(
        <Animation customStyle="max-w-[26rem] max-h-[26rem] z-0" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_RIGHT} data-layer="-1" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_RIGHT} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={COIN} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_LEFT} data-layer="2" />
            </div>
        </Animation>
    )
}


const TopPancake = () => {
    return(
        <Animation customStyle="max-w-[16rem] max-h-[16rem] z-0" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_BOTTOM} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_MIDDLE} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={TOP_RIGHT_PANCAKES} data-layer="-2" />
            </div>
        </Animation>
    )
}

const BottomPancake = () => {
    return(
        <Animation customStyle="max-w-[16rem] max-h-[16rem] z-0" id="layer">
            <div>
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_LEFT} data-layer="-2" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_MIDDLE} data-layer="0" />
                <Image fill alt="" className="absolute top-0 left-0 object-cover h-full w-full pointer-events-none animate-layer" src={BOTTOM_RIGHT_PANCAKES} data-layer="-2" />
            </div>
        </Animation>
    )
}

export {
    AstroBunny,
    Cryptos,
    Profit,
    Balls,
    Tickets,
    Coin,
    TopPancake,
    BottomPancake
}