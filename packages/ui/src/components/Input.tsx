"use client";
import React, { Children, useState } from "react";
interface InputProps {
    className?: string;
    placeholder?: string;
    type?: "file";
    id?: string;
}
export function Input({type, placeholder, id, className}: InputProps){
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };
    const isFileInput = type === "file" ? true : false;
    const isFileSelected = selectedFile ? true : false;
    return(
        <>
        <label htmlFor={id} className={`${isFileInput ? "border py-2 px-3 rounded-md text-sm w-3/12 flex justify-between items-center cursor-pointer shadow-sm" : "hidden"} ${className}`}><span className="font-bold">Choisir un fichier</span><span>{isFileSelected ? selectedFile?.name : "Aucun fichier selectionné"}</span></label>
        <input type={type} onChange={handleFileChange} id={id} className={`${className} file:border-none file:bg-transparent border border-zinc-300 shadow-sm rounded-md px-3 py-2 w-3/12 h-9 focus:outline-none focus:border-zinc-950 placeholder:text-sm placeholder:text-zinc-400 bg-zinc-50 focus:bg-white transition duration-200 ${isFileInput ? "hidden": ""}`} placeholder={placeholder}/>
        </>
    )
};