import React, { useState } from 'react';
import clsx from 'clsx';
interface ProgressProps{
    className?: string;
    ProgressLine?: number;
}
export function ProgressBar({className, ProgressLine}: ProgressProps){
    return(
        <div className="w-full h-1 bg-gray-200 rounded-lg transition">
            <div className={clsx(className,"h-1 bg-zinc-950 rounded-lg transition duration-150 ease-in-out",)} style={{ width: `${ProgressLine}%`, transition: "all 400ms ease-in-out" }}></div>
        </div>
    )
}