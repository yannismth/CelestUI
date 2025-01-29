import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface RadioProps {
  options: Option[]; // Liste des options pour les boutons radio
  name: string; // Nom pour le groupe radio
  value: string; // Valeur actuellement sélectionnée
  onChange: (value: string) => void; // Callback pour gérer les changements
}

export function Radio({ options, name, value, onChange }: RadioProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="cursor-pointer flex items-center gap-4 font-medium text-sm"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="hidden peer"
          />
          <div className="border w-4 h-4 rounded-full flex justify-center items-center border-zinc-950">
            <motion.span
              className="w-3 h-3 bg-transparent rounded-full"
              animate={{
                backgroundColor: value === option.value ? "#000000" : "transparent",
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </div>
          {option.label}
        </label>
      ))}
    </div>
  );
}
