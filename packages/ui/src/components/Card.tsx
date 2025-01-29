import React from "react";

interface CardProps {
  children?: React.ReactNode;
}
interface ContentProps {
    value: string; // La valeur associée à ce contenu
    activeTab: string; // L'onglet actif
    children?: React.ReactNode; // Le contenu à afficher
    className?:string;
  
}

export function Content({ value, activeTab, children, className }: ContentProps) {
    if (value !== activeTab) return null; // N'affiche rien si ce n'est pas l'onglet actif
    return <div className={className}>{children}</div>;
  
}
export function Card({ children }: CardProps) {
    return <div className="border rounded-xl shadow">{children}</div>;
}
interface CardHeaderProps {
  children?: React.ReactNode;
  className?:string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={`${className} p-6 text-sm}`}>{children}</div>;
}

interface CardBodyProps {
  children?: React.ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <div className="px-6 pb-6 flex flex-col gap-4">{children}</div>;
}

interface CardFooterProps {
  children?: React.ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return <div className="px-6 pb-4">{children}</div>;
}
