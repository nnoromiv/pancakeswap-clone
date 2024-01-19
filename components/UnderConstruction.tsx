import Image from 'next/image'
import React from 'react'
import { UNDER_CONSTRUCTION } from './images'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
         <h4 className="text-secondary-darker text-3xl font-bold mb-3 max-md:text-xl dark:text-white" >
            The Page is Under Construction
        </h4>
        <Image src={UNDER_CONSTRUCTION} width={800} height={600} alt='' />       
        <p className="text-secondary-lighter dark:text-white">Check In Later</p>
        
    </div>
  )
}

export default UnderConstruction