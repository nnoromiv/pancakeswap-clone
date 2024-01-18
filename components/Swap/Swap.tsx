import React, { useEffect, useState } from 'react'
import { chart } from '@/pages/api/chart'
import { date, randomData, timeUnitInMs } from '@/pages/api/utils'


const Chart = () => {

  const [gottenDate,setGottenDate] = useState<string>()
  const [randomPrice, setRandomPrice] = useState<number>()
  const currentPrice : number = randomData(timeUnitInMs.year,timeUnitInMs.hour)[0].y


  useEffect(() => {
    setRandomPrice(parseFloat(currentPrice.toFixed(2)))
    setGottenDate(date())
    chart('graph', 'day', 69, currentPrice)
  },[])

  const handleClick = (time: string) => {
    chart('graph', time, 69, currentPrice);
  };

  return (
    <div className='flex flex-col p-8 mb-10 border-solid border-[1px] border-card-shadow rounded-xl bg-card-background shadow-card h-[650px] w-full max-w-[50rem] max-lg:w-[94%] max-md:px-3 transition-opacity ease-in-out dark:bg-background-alt dark:border-none dark:shadow-card-dark'>
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

const Swap = () => {
  return (
    <div className='flex justify-center items-center gap-4 my-0 mx-auto pt-12'>
      <Chart />      
      {/* <div>HI</div> */}
    </div>
  )
}

export default Swap