import React, { useEffect, useState } from 'react'
import { chart } from '@/pages/api/chart'
import { date, randomData, timeUnitInMs } from '@/pages/api/utils'
import Image from 'next/image'
import { ARROW_DARK, BNB, FIRE, INTERCHANGE, PRICE_PANCAKE, RELOAD, SETTINGS, TOGGLE_CHART, TOGGLE_CHART_OFF } from '../images'
import { FatButton } from '..'

type ChartProps = {
  hideChart: boolean
}

const Chart = ({ hideChart } : ChartProps) => {

  const [gottenDate,setGottenDate] = useState<string>()
  const [randomPrice, setRandomPrice] = useState<number>()
  const currentPrice : number = randomData(timeUnitInMs.year,timeUnitInMs.hour)[0].y


  useEffect(() => {
    setRandomPrice(parseFloat(currentPrice.toFixed(2)))
    setGottenDate(date())
    !hideChart && chart('graph', 'day', 69, currentPrice)
  },[hideChart])

  const handleClick = (time: string) => {
    chart('graph', time, 69, currentPrice);
  };

  return (
   hideChart ? <div></div>
   : 
   <div className='flex flex-col p-8 border-solid border-[1px] border-card-shadow rounded-xl bg-card-background shadow-card h-[550px] w-full max-w-[50rem] max-lg:w-[94%] max-md:px-3 transition-opacity ease-in-out dark:bg-background-alt dark:border-none dark:shadow-card-dark'>
    <div className='flex justify-between gap-2 max-sm:flex-col'>
      <div>
        <h3 className='font-semibold text-xl text-secondary-lighter dark:text-white'><span className='font-semibold text-4xl text-secondary-darker dark:text-white'>{randomPrice} </span> BNB/CAKE</h3>
        <p className='font-normal text-sm text-secondary'>{gottenDate}</p>
      </div>
      <div className='flex w-fit h-8 ml-auto bg-primary-darker border-solid border-[1px] border-card-shadow rounded-2xl dark:bg-disabled dark:border-none'>
        <button id="day" className='relative w-12 rounded-2xl bg-none text-accent font-semibold text-md z-0' value='day' onClick={() => handleClick('day')}>24H</button>
        <button id="week" className='relative w-12 rounded-2xl bg-none text-accent font-semibold text-md z-0' value="week" onClick={() => handleClick('week')}>1W</button>
        <button id="month" className='relative w-12 rounded-2xl bg-none text-accent font-semibold text-md z-0' value='month' onClick={() => handleClick('month')}>1M</button>
        <button id="year" className='relative w-12 rounded-2xl bg-none text-accent font-semibold text-md z-0' value='year' onClick={() => handleClick('year')}>1Y</button>
      </div>
    </div>
    <div className='flex relative h-full pb-10'>
      <canvas id='graph'></canvas>
    </div>
  </div>
  )
}

const SwapContainer = () => {

  const [hideChart, setHideChart] = useState<boolean>(false)

  function handleToggleChart() {
    setHideChart(!hideChart)
  }

  function switchInput(){
    const switchParentElement = document.getElementById('switch')?.parentElement

    if(switchParentElement?.classList.contains('flex-col-reverse')){
      switchParentElement?.classList.remove('flex-col-reverse')
    } else {
      switchParentElement?.classList.add('flex-col-reverse')
    }
  }
  
  return(
    <>
      <Chart hideChart={hideChart} />
      <div className='flex flex-col p-4 justify-between h-[550px] max-w-[50rem] max-lg:w-[94%] max-[769px]:px-3 border-solid border-[1px] border-card-shadow rounded-xl bg-card-background shadow-card-shadow transition-opacity ease-in-out dark:bg-background-alt dark:border-none dark:shadow-card-dark'>
      <div className='flex flex-col gap-3 border-b-[1px] border-b-solid border-b-card-shadow p-2'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-3xl text-secondary-darker dark:text-white'>Swap</h3>
          <p className='font-normal text-base mb-5 text-secondary-lighter'>Trade Tokens in an instant</p>
        </div>
        <div className='flex justify-end gap-3'>
          {
            hideChart ?
            <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={TOGGLE_CHART_OFF} onClick={handleToggleChart} width={24} height={24} alt='' />
            :
            <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={TOGGLE_CHART} onClick={handleToggleChart} width={24} height={24} alt='' />
          }
          <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={FIRE} width={24} height={24} alt='' />
          <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={SETTINGS} width={24} height={24} alt='' />
          <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={RELOAD} width={24} height={24} alt='' />
        </div>
      </div>
      <form action="" className='flex flex-col gap-3 p-3'>
        <div className='flex flex-col gap-2'>
          <div>
            <div className='flex gap-3 p-2'>
              <Image src={PRICE_PANCAKE} width={30} height={30} alt='' />
              <h4 className='mb-0 font-bold text-secondary-darker dark:text-white flex items-center'>BNB</h4>
            </div>
            <input type="number" className='w-full text-end rounded-xl h-[50p] p-3 bg-input-color no-underline dark:bg-base-100'  placeholder='0.0' name="" id="" />
          </div>
          <Image className='mx-auto h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer' src={INTERCHANGE} id='switch' onClick={switchInput} width={30} height={30} alt='' />
          <div>
          <div className='flex gap-3 p-2'>
              <Image src={PRICE_PANCAKE} width={30} height={30} alt='' />
              <h4 className='mb-0 font-bold text-secondary-darker dark:text-white flex items-center'>CAKE</h4>
            </div>
            <input type="number" className='w-full text-end rounded-xl h-[50p] p-3 bg-input-color no-underline dark:bg-base-100'  placeholder='0.0' name="" id="" />
          </div>
        </div>
        <FatButton super={{ title: "Connect Wallet", customStyle: "w-full mt-3" }}  image={false}  providedImage={""}/>
      </form>
      </div>
    </> 
  )
}

const Swap = () => {
  return (
    <div className='flex justify-center items-center gap-4 mb-10 my-0 mx-auto pt-12 max-[1025px]:flex-col max-sm:flex-col-reverse '>
      <SwapContainer />
    </div>
  )
}

export default Swap