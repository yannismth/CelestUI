import React from 'react';
import { Button } from "@celest/ui";
import { ChevronRight } from 'lucide-react'
export default function Home() {
  return (
    <div className='w-full h-full'>
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
      <div>
      </div>
    </div>
  );
}
