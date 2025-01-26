import React, { useState, useEffect, KeyboardEvent } from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
interface ModalProps {
    children?: React.ReactNode;
    buttonName?: string;
    title?: string;
    subtitle?: string;
}
export function Modal({ children, buttonName, title, subtitle }: ModalProps) {
    const [open, setOpen] = useState(false);
    const transition = {
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      };
      const handleKeyDown = (e: globalThis.KeyboardEvent) => {
        if (e.key === "Escape") {
            setOpen(false); // Ferme le modal si Échap est pressé
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return(
        <div>
            <Button onClick={() => setOpen(!open)}>{buttonName}</Button>
            <AnimatePresence>
                {open &&
                <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{transition}}>
                    <motion.div className="bg-white p-6 rounded-lg min-w-[425px] flex flex-col justify-around" initial={{ opacity:0, scale:0.5 }} animate={{ opacity: 1, scale:1 }} exit={{ opacity: 0, scale:0.5 }} transition={{
                    duration: 0.3,
                    delay:0,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                        <div className="flex w-full justify-between items-start">
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold">{title}</h1>
                                <p className="text-muted-foreground text-sm">{subtitle}</p>
                            </div>
                            <X className="w-4 h-4 cursor-pointer" onClick={() => setOpen(!open)}/>
                        </div>
                        <div>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}