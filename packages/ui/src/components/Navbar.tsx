import React from "react";

interface NavbarProps {
    items: { label: string; link: string }[]; // Liste des éléments de la navbar
}

export function Navbar({ items }: NavbarProps) {
    return (
        <nav className="container mx-auto flex justify-center items-center px-4 py-2 bg-gray-800">
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-gray-400 transition"
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
