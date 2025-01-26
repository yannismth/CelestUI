import React from "react";
import clsx from "clsx";
interface BadgeProps{
    children?:React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

const variantStyles = {
    primary: "px-2.5 py-0.5 text-xs rounded-md bg-zinc-950 text-white inline font-bold",
    secondary: "px-2.5 py-0.5 text-xs rounded-md bg-zinc-100 text-zinc-700 inline font-bold",
    outline: "px-2.5 py-0.5 text-xs rounded-md text-zinc-800 inline border font-bold"
}
export function Badge({children, variant = "primary"}: BadgeProps){
    const variantClass = variantStyles[variant]
    return(
        <p className={clsx(variantClass)}>{children}</p>
    )
}