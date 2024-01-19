import Image from "next/image"
import { RELOAD, SETTINGS } from "../images"
import { FatButton } from ".."

const Liquidity = () => {
  return (
    <div className='flex justify-center items-center gap-4 mb-10 my-0 mx-auto pt-12'>
      <div className='flex flex-col justify-between h-fit max-w-[50rem] max-lg:w-[94%] max-[769px]:px-3 border-solid border-[1px] border-card-shadow rounded-xl bg-card-background shadow-card-shadow transition-opacity ease-in-out dark:bg-background-alt dark:border-none dark:shadow-card-dark'>
      <div className='flex flex-col p-4 gap-3 border-b-[1px] border-b-solid border-b-card-shadow'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-3xl text-secondary-darker dark:text-white'>Liquidity</h3>
          <p className='font-normal text-base mb-5 text-secondary-lighter'>Remove liquidity to receive tokens back</p>
        </div>
        <div className='flex justify-end gap-3'>          
          <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={SETTINGS} width={24} height={24} alt='' />
          <Image className="h-6 w-6 bg-transparent hover:opacity-70 cursor-pointer" src={RELOAD} width={24} height={24} alt='' />
        </div>
      </div>
      <h2 className="py-6 bg-primary-darker dark:bg-black text-center dark:text-secondary-lightest">Connect to a wallet to view your liquidity.</h2>
      <div className="px-4">
        <FatButton super={{ title: "Add Liquidity", customStyle: "my-5 w-full "}} image={false} providedImage={""} />
      </div>
    </div>
  </div>
  )
}

export default Liquidity