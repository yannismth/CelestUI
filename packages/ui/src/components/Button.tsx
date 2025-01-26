import React, { ReactNode, isValidElement } from "react";
import clsx from "clsx";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const variantStyles = {
  primary: "bg-zinc-950 text-white",
  secondary: "bg-zinc-50 text-black border hover:bg-zinc-100 transition-colors duration-200",
  ghost: "bg-transparent text-black hover:bg-zinc-100 transition-colors duration-200",
  danger: "bg-red-500 text-white",
  outline: "bg-transparent text-black border hover:bg-zinc-100 transition-colors duration-200",
};
const typeStyles = {
  button:"",
  icon:"flex items-center justify-center [&_svg]:size-4 gap-2",
}
export function Button({ children, className, variant = "primary", disabled = false, onClick}: ButtonProps) {
  const variantClass = variantStyles[variant];
  const disabledClass = disabled ? "opacity-70 cursor-not-allowed" : "";
  const hasIcon = React.Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === "svg"
  );

  const iconClass = hasIcon
    ? "flex items-center justify-center [&_svg]:size-4 gap-2"
    : "inline-flex [&_svg]:size-4 items-center gap-2 [&_svg]:h-full";

  return <button className={clsx(variantClass, iconClass, className, disabledClass, "cursor-pointer! px-4 py-2 rounded-md w-auto h-9 font-medium text-sm inline-flex")} onClick={disabled ? undefined : onClick} disabled={disabled}>{children}</button>;
}