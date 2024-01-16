import { Cryptos, FatButton } from "."

const Trade = () => {
  return (
    <div className="flex justify-center items-center py-10 px-5 relative z-[1]">
        <div className="relative z-[2]">
            <h1 className="text-secondary-darker my-5 text-6xl font-bold dark:text-white max-[426px]:text-4xl">
                <span className="text-secondary-lighter">Trade</span> anything. No <br /> registration, no hassle.
            </h1>
            <p className="text-secondary-lighter my-5 dark:text-secondary-lightest max-[426px]:px-2 max-[426px]:text-xs">Trade any token on BNB Smart Chain in seconds, just by <br /> connecting your wallet</p>
            <div className="flex gap-5">
                <FatButton super={{ title: "Trade Now" }}  />
                <FatButton outline super={{ title: "Learn", customStyle: "border-none" }} />
            </div>
        </div>
        <Cryptos />
    </div>
  )
}

export default Trade