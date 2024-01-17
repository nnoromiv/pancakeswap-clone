import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEventHandler } from "react";

export interface ProviderProps {
    children: string | React.ReactNode | React.JSX.Element| React.JSX.Element[]
}

export interface CarouselProps {
    image?: boolean,
    networkButton: boolean,
    title?: string | null,
    style?: string,
    providedImage: string | StaticImport
}

export interface ButtonProps {
    clickFunction? : MouseEventHandler<HTMLInputElement>
    title?: string,
    customStyle?: string
}

export interface FatButtonProps {
    super: ButtonProps,
    outline?: boolean
    image? : boolean
    providedImage: string | StaticImport
}

export interface SlimButtonProps {
    super: ButtonProps,
    primary?: boolean
    allowJSX: boolean,
    customJSX?: JSX.Element
}

export interface ToggleButtonProps {
    super: ButtonProps,
    toggleDarkStyles?: string
}

export interface PoolArray {
    poolName: string,
    gain: string
}

export interface PoolProps {
    Pool: PoolArray[]
}

export interface AnimationProps {
    children: React.ReactElement,
    customStyle?: string
    id: string
}
