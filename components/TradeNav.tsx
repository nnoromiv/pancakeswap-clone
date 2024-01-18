'use client'

import React, { useEffect, useState } from 'react'
import { NAVIGATION } from '../constants'
import Link from 'next/link'
import { SecondaryProps } from '../types'
import { Liquidity, Swap } from './Swap'
import { UnderConstruction } from '.'



const TradeNav = ({ caller } : SecondaryProps) => {
    const [active,setActive] = useState(caller)
    const PAGE_NAVIGATION = NAVIGATION.find(item => item.index === 0)?.links

    function handleClicked(item :string){
        setActive(item)
    }

    useEffect(() => {
        setActive(caller)
    },[caller])

    return (
    <>
        <div className='h-10 bg-primary-darker dark:bg-base-100'>
            <div role='tablist'  className='tabs tabs-lifted h-full flex justify-center items-center gap-3'>
            {
                PAGE_NAVIGATION?.map((item,index) => (
                    active === item.link ?
                    <Link role='tab' key={index} href={item.link} className='tab tab-active max-md:text-xs max-md:w-[60px] max-[321px]:text-[10px] max-[321px]:w-[40px] font-bold h-full flex items-center justify-center relative transition-all ease-in-out text-white '>{item.title}</Link>
                    :
                    <Link role='tab' key={index} href={item.link} onClick={() => handleClicked(item.link)}  className='tab max-md:text-xs max-md:w-[60px] max-[321px]:text-[10px] max-[321px]:w-[40px] font-bold text-secondary-lightest h-full flex items-center justify-center relative transition-all ease-in-out'>{item.title}</Link>
                    ))
                }
            </div>
        </div>
        {
            active === '/swap#limit' ?
                <UnderConstruction />
            : active === '/swap#liquidity' ?
                <Liquidity />
            : active === '/swap#bridge' ?
                <UnderConstruction />
            : active === '/swap#perpetual' ?
                <UnderConstruction />
            : <Swap />

        }
    </>
  )
}

export default TradeNav