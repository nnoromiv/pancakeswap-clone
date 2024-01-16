import Image from "next/image"
import { BUNNY, CARD_1, USER_DIVIDER, USER_DIVIDER_DARK } from "./images"

type CardProps = {
    image : any
    title: string
    spanTitle?: string
    spanColor? : string
    text: string
    background? : string
    shadow? : string
}

const Card = ({image, title, spanTitle, spanColor, text, background, shadow} : CardProps) => {
    return(
        <div className={`flex flex-col justify-between h-72 w-72 p-6 rounded-3xl border-solid border-[1px] border-card-shadow dark:border-card-shadow-dark ${shadow === undefined ? "shadow-card dark:shadow-card-dark" : shadow} ${background === undefined ? "bg-card-background dark:bg-card-shadow-dark" : background}`}>
            <div className="flex justify-end">
                <Image src={image} className="h-9 w-9" priority width={50} height={50} alt="" />
            </div>
            <h2 className="text-secondary-darker font-semibold text-4xl dark:text-white">{title}<br />
            <span className={`${spanColor === undefined ? "text-secondary" : spanColor}`}>{spanTitle}</span>
            </h2>
            <p className="text-secondary-lighter font-normal text-base">{text}</p>
        </div>
    )
}

const User = () => {
  return (
    <>
    <div className="justify-center items-center bg-user-gradient dark:bg-user-gradient-dark">
        <div className="pt-10 flex flex-col justify-center items-center text-center">
            <Image className="my-5 relative z-[2]" src={BUNNY} priority alt="" width={100} height={100} />
            <h1 className=" relative z-[2] text-secondary-darker my-5 text-6xl font-bold dark:text-white max-[426px]:text-4xl">Used by millions. <br/> Trusted with billions.</h1>
            <p className="text-secondary-lighter my-5 dark:text-secondary-lightest max-[426px]:px-2 max-[426px]:text-xs">PancakeSwap has the most users of any decentralized platform, ever. <br />And those users are now entrusting the platform with over $3.9 billion in funds.</p>
            <p className="text-secondary-lighter mb-5 font-semibold dark:text-secondary-lightest">Will you join them?</p>
        </div>
        <div className="mt-10 grid grid-cols-3 place-items-center max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-y-10 pb-10">
            <Card image={CARD_1} title="2.1 Million" spanTitle="Users" text="In the last 30 days" />
            <Card image={CARD_1} title="2.1 Million" spanTitle="Users" spanColor="text-accent" text="In the last 30 days" />
            <Card image={CARD_1} title="2.1 Million" spanTitle="Users" spanColor="text-accent-alert-strong" text="In the last 30 days" />
        </div>
    </div>
    <Image alt="" className="w-full dark:hidden" width={100} height={100} src={USER_DIVIDER} />
    <Image alt="" className="hidden w-full dark:flex" width={100} height={100} src={USER_DIVIDER_DARK} />
</>
  )
}

export default User