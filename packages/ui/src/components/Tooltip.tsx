import React, { useState } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
  children?: React.ReactNode;
  value: string;
}

export function Tooltip({ value, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 300); // Délai de 300ms avant d'afficher le tooltip
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsHovered(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute bottom-full mb-2 -left-3.5 bg-zinc-950 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }} // Départ invisible et légèrement décalé
          animate={{ opacity: 1, y: 0 }} // Devient visible et remonte
          exit={{ opacity: 0, y: -10 }} // Retour à l'état initial
          transition={{ duration: 0.3, ease: "easeInOut" }} // Durée et type d'animation
        >
          {value}
        </motion.div>
      )}
    </div>
  );
}
