'use client'
import { Player } from '@lordicon/react'
import React, { useCallback, useEffect, useRef } from 'react'
import Work from '../public/Navbar_work_icon.json'
import Email from '../public/Navbar_contact_icon.json'
import Skills from '../public/Navbar_skill_icon.json'
import Link from 'next/link'
import { Routes, Sections } from '@/Constants'
import { BarristersBandIcon } from '@/public'
import Image from 'next/image'

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
    <div className='flex border-2 bg-cherry-100 py-2 px-4 justify-between items-center flex-row sticky top-0 bg-black-50'>
      <Link href={Routes.Home} className='flex flex-row items-center bg-black-400 justify-center'>
      <Image src={BarristersBandIcon} alt='Advocate' height={40} width={40} className='flex justify-center' />
      </Link>
        <div className="gap-10 flex flex-row items-center ">
        <div onMouseEnter={handleSkillEnter} className='hover:cursor-pointer'>  
            <Player ref={skillIconRef} icon={Skills} colorize='#00000' />
        </div>
        <div onMouseEnter={handleSkillsEnter} className='hover:cursor-pointer'>
            <Player ref={workIconRef} icon={Work} colorize='#00000' />
        </div>
        <Link href={Routes.Contact} onMouseEnter={handleEmailEnter} className='hover:cursor-pointer'>
            <Player ref={emailIconRef} icon={Email} colorize='#00000' />
        </Link>
        </div>
    </div> 
  )
}

export default NavigationBar
