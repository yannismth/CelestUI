import React from 'react';
interface CheckboxProps {
    children?: React.ReactNode;
    label?: string;
    type?: "checkbox";
    id?: "Check";
}
export function Checkbox({id, type, label}: CheckboxProps){
    return(
        <div className='inline-flex items-center gap-2'>
            <input type={type} data-state="checked" role='checkbox' id={id} className='w-4 h-4 accent-zinc-950 [&_svg]'/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}