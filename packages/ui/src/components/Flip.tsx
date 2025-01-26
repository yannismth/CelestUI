import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FlipProps {
    titles: string[]; // Liste des mots à afficher
    interval?: number; // Durée entre chaque changement de mot
    className?: string; // Classe CSS supplémentaire pour personnalisation
}

export function Flip({ titles, interval = 2000, className }: FlipProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, interval);
        return () => clearTimeout(timeoutId);
    }, [currentIndex, interval, titles.length]);

    return (
        <span
            className={`relative w-full overflow-hidden flex items-center justify-center ${className}`}
            style={{ height: "4rem" }} // Hauteur forcée (équivalent à h-16)
        >
            {titles.map((title, index) => (
                <motion.span
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={
                        currentIndex === index
                            ? { y: "0%", opacity: 1 }
                            : { y: currentIndex > index ? "-100%" : "100%", opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    {title}
                </motion.span>
            ))}
        </span>
    );
}

