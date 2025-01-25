"use client";
import React, { useState, useEffect } from "react";
import {Input} from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Eye, EyeClosed, X, Check } from "lucide-react";
import clsx from "clsx";
const rules = [
    { id: 1, regex: /.{8,}/, text: "At least 8 characters" },
    { id: 2, regex: /[0-9]/, text: "At least 1 number" },
    { id: 3, regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { id: 4, regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    { id: 5, regex: /[!@#$%^&*(),.?":{}|<>]/, text: "At least 1 special character" },
];
interface PasswordAnimationProps{
    className?: string;
}
export function PasswordAnimation({className}: PasswordAnimationProps){
    const [progress, setProgress] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [ifPressed, setIfPressed] = useState(false);
    const handleClick = () => {
        setIfPressed(!ifPressed);
    };
    useEffect(()=>{
        let progress = 0;
        rules.forEach((rule) => {
            if(rule.regex.test(inputValue)){
                progress += 20;
            }
        });
        setProgress(progress);
    }, [inputValue]);
    return(
        <div className="">
            <div className={clsx("relative", className)}>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                {ifPressed == true ? <Eye className="h-4 w-4 cursor-pointer" onClick={handleClick}/> : <EyeClosed className="h-4 w-4 cursor-pointer" onClick={handleClick}/>}
            </span>
            <Input
            id="abcdefg"
            type={ifPressed ? "text" : "password"}
            placeholder="Password"
            className="pl-3 border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-zinc-500" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
        <div>
            <ProgressBar className="mb-4 mt-3" ProgressLine={progress}/>
            <div className="text-start text-sm">
                <p className="my-4 font-bold">Enter a password</p>
                <ul>
                    {rules.map((rules, index) => (
                        <li key={index} className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                            {rules.regex.test(inputValue) ? <Check className="h-4 w-4 text-green-500"/> : <X className="h-4 w-4 text-zinc-800"/>}
                            <span>{rules.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
}