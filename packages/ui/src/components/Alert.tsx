import React, { useState, useEffect } from "react";
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
type AlertProps = {
    children?:React.ReactNode;
    position?: "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    isVisible: boolean;
    onClose?: () => void;
    duration?:number;
};
export function Alert({children, position = "top", isVisible, duration = 2000, onClose}: AlertProps){
    const positions = {
        top: "top-4 left-1/2 transform -translate-x-1/2",
        bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
    };
    useEffect(() => {
        if (duration) {
          const timer = setTimeout(() => {
            if (onClose) onClose();
          }, duration);
          return () => clearTimeout(timer); // Nettoyage si le composant est démonté
        }
      }, [duration, onClose]);
    return(
        <AnimatePresence>
            {isVisible && (
            <motion.div
            className={`fixed ${positions[position]} z-50`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            >
                {children}
            </motion.div>
        )};
        </AnimatePresence>
    )
}