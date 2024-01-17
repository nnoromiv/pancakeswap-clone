"use client";
import Image from 'next/image'
import { ThemeSwitcher } from '@/app'
import Link from 'next/link'
import { NAVIGATION, LANGUAGES } from '../constants'
import { SlimButton } from '.'
import { useEffect, useState } from 'react'
import { DROPDOWN_ARROW, DROPDOWN_ARROW_LIGHT, GLOBE, HAMBURGER, HAMBURGER_LIGHT, PANCAKE, PANCAKE_LIGHT, PRICE_PANCAKE } from './images';

const MobileNavigation = () => {

    const [mobileTabIndex,setMobileTabIndex] = useState<number>(-1)

    const handleClick = (number: number) => {
        mobileTabIndex === number ? setMobileTabIndex(-1) : setMobileTabIndex(number)
    }

    return (
        <nav className="hidden dropdown dropdown-bottom ml-4 mr-5 text-secondary-lightest max-[1025px]:flex">
        <div tabIndex={99} role="button" className="mt-1" onClick={() => setMobileTabIndex(-1)}>
            <div className="indicator mr-2">
                <Image priority src={HAMBURGER} width={30} height={30} className='flex dark:hidden object-fit'   alt='pancake'/>
                <Image priority src={HAMBURGER_LIGHT} width={30} height={30} className='hidden dark:flex object-fit'   alt='pancake'/>
            </div>
        </div>
        <div tabIndex={99} className="mt-3 z-[1] px-4 py-4 card card-compact dropdown-content w-52 bg-white dark:bg-base-100 shadow">
            {
                NAVIGATION.map((item) => (
                    <div key={item.index} className="dropdown dropdown-right ml-4 text-secondary-lightest">
                        <div tabIndex={item.index} role="button" className="mb-3 mt-1">
                            <div className="indicator text-left" onClick={() => handleClick(item.index)}>
                                {item.title}
                            </div>
                        </div>  
                        <div tabIndex={mobileTabIndex} className="mt-3 z-[1] ml-10 card card-compact dropdown-content w-52 bg-primary-darker dark:bg-base-100 shadow">
                            {
                                mobileTabIndex === item.index &&
                                item.links.map((href, index) => (
                                    <div key={index} className="card-body">
                                        <span className="font-normal cursor-pointer text-lg">
                                            <Link rel="stylesheet" href={href.link}>{href.title}</Link>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>                    
                ))
            }
            <div className='hidden pl-2 gap-2 max-[699px]:flex'>
                <Image priority src={PRICE_PANCAKE} width={30} height={30} alt='swap' />
                <h2>$3.911</h2>
            </div>   
            <SlimButton super={{ title: "Connect Wallet", customStyle: "max-[503px]:flex my-2" }} primary allowJSX={false}  /> 
        </div>
    </nav>  
    )
}

const LargeNavigation = () => {
    return (
        <nav className='max-[1025px]:hidden'>
            {
                NAVIGATION.map((nav, index) => (
                    <div key={index} className="dropdown dropdown-end ml-4">
                        <div  tabIndex={index} role="button" className="btn btn-ghost btn-circle mt-1">
                            <div className="indicator tracking-sm text-secondary-lighter dark:text-secondary-lightest font-normal">
                                {nav.title}
                            </div>
                        </div>

                        <div key={index} tabIndex={index} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white dark:bg-base-100 shadow">
                        {
                            nav.links.map((href, index) => (
                                <div key={index} className="card-body">
                                    <span className="font-normal cursor-pointer text-lg text-secondary-lighter dark:text-secondary-lightest">
                                        <Link rel="stylesheet" href={href.link}>{href.title}</Link>
                                    </span>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </nav>
    )
}

const Settings = () => {
    return(
        <div className='relative flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2 max-[699px]:hidden'>
                <Image priority src={PRICE_PANCAKE} width={30} height={30} alt='swap' />
                <h2>$3.911</h2>
            </div>
            <div  className="dropdown dropdown-bottom ml-4 max-[376px]:hidden">
                <div  tabIndex={0} role="button" className="btn btn-ghost btn-circle mt-1">
                    <div className="indicator">
                        <Image priority src={GLOBE} width={30} height={30} alt='globe' />
                    </div>
                </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white dark:bg-base-100 shadow h-[500px] overflow-y-scroll">
                        {
                            LANGUAGES.map((language, index) => (
                                <div key={index} className="card-body">
                                    <span className="font-normal cursor-pointer text-lg text-secondary-lighter dark:text-secondary-lightest">
                                        <Link rel="stylesheet" href={language.language}>{language.language}</Link>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div className='flex'>
                <SlimButton super={{}} allowJSX customJSX={<SelectProvider />} /> 
                <SlimButton super={{ title: "Connect Wallet", customStyle: "max-[503px]:hidden" }} primary allowJSX={false}  /> 
            </div>
        </div>
    )
}

const SelectProvider = () => {
    const [selectedNetwork, setSelectedNetwork] = useState("BNB")
    return (
        <div  className="dropdown dropdown-left">
            <div tabIndex={98} role="button" className="flex gap-5">
                <div className="flex justify-center items-center indicator text-secondary-darker dark:text-white">
                    {selectedNetwork}
                    <Image priority src={DROPDOWN_ARROW} width={30} height={30} className='flex dark:hidden'  alt='pancake'/>
                    <Image priority src={DROPDOWN_ARROW_LIGHT} width={30} height={30} className='hidden dark:flex'  alt='pancake'/>
                </div>
            </div>
            <div tabIndex={98} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white dark:bg-base-100 shadow">
                <div  className="card-body text-left text-secondary-lighter dark:text-secondary-lightest">
                    <span className="font-normal cursor-pointer text-lg">Select a network</span>
                    <hr className='bg-gray-500 h-[1px] w-full'></hr>
                    <span className="font-normal cursor-pointer text-lg" onClick={() => setSelectedNetwork("BNB")}>BNB</span>
                    <span className="font-normal cursor-pointer text-lg" onClick={() => setSelectedNetwork("ETH")}>ETH</span>
                    <span className="font-normal cursor-pointer text-lg" onClick={() => setSelectedNetwork("APT")}>APT</span>
                </div>
            </div>
        </div>
    )
}

export const Logo = () => {
    return(
        <a href='/' className='max-[734px]:w-4/6 max-[605px]:hidden'>
            <Image priority src={PANCAKE} width={150} height={150}   className='hidden object-fit dark:flex'  alt='pancake'/>
            <Image priority src={PANCAKE_LIGHT} width={150} height={150}   className='object-fit dark:hidden'  alt='pancake'/>
        </a>
    )
}


export default function Nav(){    
    return(
        <div className="navbar bg-primary px-3 dark:bg-background-alt max-[321px]:px-2" >
            <div className="flex-1"> 
                <MobileNavigation />
                <Logo />
                <LargeNavigation />
            </div>
            <div className="flex-none">
                <Settings />                
                <ThemeSwitcher />
            </div>
        </div>
    )
}
