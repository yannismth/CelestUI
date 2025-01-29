import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Tab {
  label: string; // Texte affiché pour l'onglet
  value: string; // Valeur associée à l'onglet
}

interface TabsProps {
  tabs: Tab[]; // Liste des onglets
  children?:React.ReactNode;
  onTabChange: (value: string) => void;
}

export function Tabs({ tabs, children, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || ""); // Onglet actif par défaut
  const [tabWidth, setTabWidth] = useState(0); // Largeur d'un onglet
  const containerRef = useRef<HTMLDivElement>(null);
  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };
  useEffect(() => {
    // Calcule la largeur d'un onglet une fois le composant monté
    if (containerRef.current) {
      setTabWidth(containerRef.current.offsetWidth / tabs.length);
    }
  }, [tabs.length]); // Recalcule si le nombre d'onglets change

  return (
    <div className="relative w-96 flex flex-col gap-2">
      {/* Conteneur des onglets */}
      <div
        ref={containerRef}
        className="relative bg-zinc-100 h-8 rounded-lg flex border overflow-hidden"
      >
        {/* Barre animée pour l'onglet actif */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-white rounded-md shadow"
          animate={{
            x: tabs.findIndex((tab) => tab.value === activeTab) * tabWidth,
            width: tabWidth,
          }}
          transition={{ duration: 0.3, stiffness: 400 }}
        />
        {/* Boutons des onglets */}
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`relative z-10 flex-1 text-sm font-medium py-0.5 ${
              activeTab === tab.value ? "text-zinc-900" : "text-gray-500"
            }`}
            onClick={() => handleTabClick(tab.value) }
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
