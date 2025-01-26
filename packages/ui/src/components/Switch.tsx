import React, { useState } from "react";
import { motion } from "framer-motion";

interface SwitchProps {
    size?: number; // Taille du switch
    isOn?: boolean; // État initial
    onToggle?: (state: boolean) => void; // Fonction de callback déclenchée lors du clic
}

export function Switch({ size = 16, isOn = false, onToggle }: SwitchProps) {
    const [isClick, setIsClick] = useState(isOn);

    // Calcul des dimensions dynamiques
    const switchWidth = size * 2;
    const switchHeight = size;
    const circleSize = size - 2;
    const translateX = switchWidth - circleSize - 2;

    const handleClick = () => {
        const newState = !isClick;
        setIsClick(newState);
        if (onToggle) {
            onToggle(newState); // Appelle la fonction passée par l'utilisateur
        }
    };

    return (
        <motion.div
            className="rounded-full flex items-center cursor-pointer"
            onClick={handleClick}
            style={{
                width: switchWidth,
                height: switchHeight,
                backgroundColor: isClick ? "#27272a" : "#e4e4e7",
            }}
            initial={{ backgroundColor: "#e4e4e7" }}
            animate={{ backgroundColor: isClick ? "#27272a" : "#e4e4e7" }}
        >
            <motion.div
                className="rounded-full bg-zinc-50"
                style={{
                    width: circleSize,
                    height: circleSize,
                    marginLeft: 1,
                }}
                initial={false}
                animate={{ translateX: isClick ? translateX : 0 }}
                transition={{ ease: [0, 0.71, 0.2, 1.01] }}
            />
        </motion.div>
    );
}
