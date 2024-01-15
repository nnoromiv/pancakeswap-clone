"use client"

import Image from "next/image";
import { FatButtonProps, SlimButtonProps, ToggleButtonProps } from "../types";
import React from "react";
import { MOON, SUN } from "./images";


const FatButton : React.FC<FatButtonProps> = ({ super : {clickFunction, customStyle, title}, outline}) => {
  return (
    <div className=''>
        {
            outline ?
            <button className="flex items-center justify-center h-12 py-0 px-6 bg-transparent border-solid border-[2px] border-accent rounded-2xl font-semibold text-sm tracking-sm text-accent cursor-pointer transition-all hover:opacity-65 active:opacity-85 active:translate-y-[1px]">{title}</button>
            :
            <button className="flex dark:text-base-100 items-center tracking-sm justify-center h-12 py-0 px-6 bg-accent rounded-2xl shadow-shadow font-semibold text-sm text-primary cursor-pointer transition-all hover:opacity-65 active:opacity-85 active:translate-y-[1px] active:shadow-none">{title}</button>
        }
    </div>
  )
}

const SlimButton: React.FC<SlimButtonProps> = ({ super : {clickFunction, customStyle, title}, primary, allowJSX, customJSX}) => {
    return (
      <div className='px-1'>
          {
              primary ?
              <button className={`flex items-center tracking-sm justify-center h-8 py-0 px-6 bg-accent rounded-2xl shadow-shadow font-semibold text-sm text-primary cursor-pointer transition-all dark:text-secondary-darker ${customStyle}`}> 
              {
                !allowJSX ? 
                    title : 
                    customJSX
              }
              </button>
              :
              <button className={`flex items-center text-secondary-darker tracking-sm justify-center h-8 py-0 px-6 bg-primary-darker rounded-2xl shadow-shadow font-semibold text-sm cursor-pointer transition-all dark:bg-base-100 dark:text-white ${customStyle}`}>
                {
                    !allowJSX ? 
                        title : 
                        customJSX
                }
              </button>
          }
      </div>
    )
}

const ToggleSwitch : React.FC<ToggleButtonProps>  = ({ super : {clickFunction, customStyle, title} , toggleDarkStyles}) => {
    
    return (
        <div className="group relative h-7 w-calc-width rounded-calc-radius bg-disabled transition-all ease-in-out ">
            <input type="checkbox" onClick={clickFunction}  className="appearance-none absolute top-0 left-0 w-full h-full cursor-pointer z-[2] " />
            <div className="flex relative z-[1] h-full w-full p-1">
                <Image priority src={SUN} width={17} height={17} alt="sun" className="ml-[3px] object-contain" /> 
                <Image priority src={MOON} width={17} height={17} alt="moon" className="ml-2 object-contain" /> 
            </div>
            <span className={`absolute flex content-center justify-center top-0 left-0 p-[3px] h-7 w-[1.95rem] rounded-2xl border-solid border-[4px] border-disabled bg-background-alt transition-all ease-in-out after:content-[''] after:bg-sun after:bg-cover after:h-full after:w-full group-hover:border-solid group-hover:border-[4px] group-hover:border-secondary group-checked:translate-x-[1.5rem] peer-checked:after:bg-moon ${toggleDarkStyles}`}></span>
        </div>
    )
}

export { FatButton, SlimButton, ToggleSwitch }