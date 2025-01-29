import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
    className?:string;
    options: Option[];
    placeholder?: string;
    onChange?: (option: Option) => void;
}

export function Select({ options, placeholder = "Select an option", onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative inline-block w-full max-w-xs">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 transition bg-white ${
          isOpen ? "ring-2 ring-zinc-500" : ""
        }`}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
            <p className="my-2 text-sm font-bold flex justify-start px-4">Factures</p>
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex justify-start"
                role="option"
                aria-selected={selected?.value === option.value}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
}