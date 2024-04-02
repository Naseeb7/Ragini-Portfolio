'use client'
import { Player } from '@lordicon/react'
import React, { useCallback, useEffect, useRef } from 'react'
import Work from '../public/Navbar_work_icon.json'
import Email from '../public/Navbar_contact_icon.json'
import Skills from '../public/Navbar_skill_icon.json'
import Link from 'next/link'
import { Routes, Sections } from '@/Constants'

const NavigationBar = () => {
    const workIconRef = useRef<Player>(null);
    const emailIconRef = useRef<Player>(null);
    const skillIconRef = useRef<Player>(null);

    const handleSkillsEnter = useCallback(()=>{
        workIconRef?.current?.playFromBeginning()
    },[])
    const handleEmailEnter = useCallback(()=>{
        emailIconRef?.current?.playFromBeginning()
    },[])
    const handleSkillEnter = useCallback(()=>{
        skillIconRef?.current?.playFromBeginning()
    },[])

  return (
    <div className='flex border-2 bg-cherry-100 py-3 px-4 justify-between flex-row'>
        <div className="flex flex-row gap-2 items-center">
        <img src='/Navbar_profile_image.jpg' height={35} width={35} className='rounded-full' />
      <Link href={Sections.About} className='text-softgold-300 font-bold text-2xl text-plum-700 '>Kranti Ragini Sahu</Link>
        </div>
        <div className="gap-10 flex flex-row items-center ">
        <div onMouseEnter={handleSkillEnter} className='hover:cursor-pointer'>
            <Player ref={skillIconRef} icon={Skills} colorize='#3A213C' />
        </div>
        <div onMouseEnter={handleSkillsEnter} className='hover:cursor-pointer'>
            <Player ref={workIconRef} icon={Work} colorize='#3A213C' />
        </div>
        <Link href={Routes.Contact} onMouseEnter={handleEmailEnter} className='hover:cursor-pointer'>
            <Player ref={emailIconRef} icon={Email} colorize='#3A213C' />
        </Link>
        </div>
    </div> 
  )
}

export default NavigationBar
