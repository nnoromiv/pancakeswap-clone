import { Balls, Card, Tickets } from "."
import { ARROW, ARROW_DARK, LOTTERY_TAG, PREDICTION } from "./images"

const Prize = () => {
  return (
    <div className="relative overflow-hidden py-24 z-0 bg-prize-gradient dark:bg-prize-gradient-dark">
      <div className="absolute z-0 top-0 right-0">
        <Balls />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-20 relative z-[2] my-0 mx-auto h-full w-full max-w-5xl glass rounded-3xl">
        <h2 className="font-semibold text-5xl text-secondary-darker dark:text-white max-[426px]:text-3xl"><span className="text-secondary">Win</span> millions in prizes.</h2>
        <p className="text-secondary-lighter">Provably fair, on-chain games.</p>
        <p className="text-secondary-lighter">Win big with PancakeSwap.</p>
        <div className="mt-10 grid grid-cols-2 gap-10 max-[426px]:grid-cols-1">
          <Card 
            image={PREDICTION} 
            background="bg-gradient-gold" 
            subtext="Prediction" 
            subtextStyle="text-secondary-darker -mb-5 text-base" 
            title="$840 million" 
            excerpt="in BNB + CAKE won so far"
            text="Predict the price trend of BNB or CAKE to win" 
            textStyle="text-secondary-darker"
            customStyle="-rotate-[3deg] shadow-gold-card border-none h-96"
            button
            buttonTitle="Play Now"
            buttonImage={ARROW}
            buttonImageDark={ARROW_DARK}
            />

          <Card 
            image={LOTTERY_TAG} 
            background="bg-gradient-secondary" 
            subtext="Lottery" 
            subtextStyle="text-white -mb-5 text-base" 
            title="$102,811" 
            excerpt="in BNB + CAKE won so far"
            text="Predict the price trend of BNB or CAKE to win" 
            textStyle="text-white"
            customStyle="rotate-[3deg] shadow-purple-card border-none h-96"
            button
            buttonTitle="Buy Tickets"
            buttonImage={ARROW}
            buttonImageDark={ARROW_DARK}
            />
        </div>
      </div>
      <div className="absolute bottom-0">
        <Tickets />
      </div>
    </div>
  )
}

export default Prize