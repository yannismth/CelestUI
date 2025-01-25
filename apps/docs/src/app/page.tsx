"use client";
import React from 'react';
import { Button, Input, Checkbox, PasswordAnimation, ProgressBar } from "@celest/ui";
import { ChevronRight } from 'lucide-react';
import { motion } from "motion/react"
export default function Home() {
  return (
    <div className='w-full h-full bg-zinc-50'>
      <div className='container mx-auto p-4 text-center'>
        <h1 className='uppercase font-black text-2xl'>Buttons</h1>
        <div className='flex gap-2 h-32 w-full justify-center items-center'>
          <Button>Primary</Button>
          <Button variant='secondary' className='border'>Secondary</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='outline'><ChevronRight /></Button>
          <Button variant='danger'>Danger</Button>
          <Button disabled>Disabled</Button>
          <Button>Continue <ChevronRight /></Button>
        </div>
      </div>
      <div className='container mx-auto p-4 text-center w-full'> 
        <h1 className='uppercase font-black text-2xl mb-4'>Inputs</h1>
        <div className='flex gap-2 h-32 w-full mx-auto flex-col max-w-sm'>
          <Input placeholder='Search...' className='w-full'/>
          <Input type='file' id='a' className='w-full'/>
          <div className='w-full flex justify-center items-center gap-2 w-full'>
            <Input placeholder='Email' className='w-6/12'/>
            <Input placeholder="Password" type='password' className='w-6/12'/>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className='text-center mx-auto my-4 w-full flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-2xl mb-4'>Checkboxs</h1>
          <Checkbox type='checkbox' label="Accepter les conditions d'utilisation"/>
          <div className='inline-flex flex-col justify-center items-center my-8 '>
            <h1 className='text-2xl font-bold my-4'>Password Animations</h1>
            <PasswordAnimation className='my-2'/>
          </div>
      </div>
    </div>
  );
}
