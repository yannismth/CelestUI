"use client";
import React from 'react';
import { Button, Input, Checkbox, PasswordAnimation, ProgressBar, Modal, Switch, Navbar, Flip, Badge, Select } from "@celest/ui";
import { ChevronRight } from 'lucide-react';
import { motion } from "motion/react";
export default function Home() {
  return (
    <div className='w-full h-full bg-zinc-50'>
      <div>
        <Navbar items={[
          {label:"Home", link:"/",},
          {label:"about", link:"/"},
          {label:"contact", link:"/"}
        ]}>

        </Navbar>
      </div>
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
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Modal / Dialogs</h1>
        <Modal buttonName='Open' title='Edit profile' subtitle='Edit your profile'>
          <div className='h-32 w-full flex flex-col items-center gap-4 mt-8'>
            <div className='inline-flex w-full items-center justify-center gap-4'>
              <label htmlFor="Email">Email</label>
              <Input placeholder='Email' className='w-6/12'/>
            </div>
            <div className='inline-flex items-center w-full justify-center gap-4'>
              <label htmlFor="Password" className='inline'>Mot de passe</label>
              <Input placeholder='Password' className='w-6/12'/>
            </div>
          </div>
          <div className='text-end'>
            <Button>Accept</Button>
          </div>
        </Modal>

      </div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Switch</h1>

        <div className='container mx-auto flex justify-center my-8'>
          <Switch size={20}/>
        </div>
        <h1 className='text-2xl font-bold'>Flip text</h1>
        <div className='w-6/12 h-16 bg-zinc-50 text-center flex flex-col gap-2 mx-auto'>
          <h1 className=''>Gérer touts vos achats avec</h1>
          <Flip titles={["titles", "flip", "celestui"]} interval={2000} className='text-center'/>
        </div>
        <div className='my-4'>
          <Select options={[{ label: 'Facture Mensi', value: '1' }, { label: 'Banana', value: '2' }]} className='min-w-12'></Select>
        </div>
        <div className='my-4'>
          <Badge variant="secondary">Nouveau Badge</Badge>
        </div>
      </div>
      <div className='w-full h-screen'>

      </div>
    </div>
  );
}
