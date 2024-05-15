"use client";
import { Player } from "@lordicon/react";
import React, { useCallback, useEffect, useRef } from "react";
import Work from "../public/Navbar_work_icon.json";
import Email from "../public/Navbar_contact_icon.json";
import Skills from "../public/Navbar_skill_icon.json";
import Link from "next/link";
import { Routes, Sections } from "@/Constants";
import { BarristersBandIcon } from "@/public";
import Image from "next/image";

const NavigationBar = () => {
  const workIconRef = useRef<Player>(null);
  const emailIconRef = useRef<Player>(null);
  const skillIconRef = useRef<Player>(null);

  const handleSkillsEnter = useCallback(() => {
    workIconRef?.current?.playFromBeginning();
  }, []);
  const handleEmailEnter = useCallback(() => {
    emailIconRef?.current?.playFromBeginning();
  }, []);
  const handleSkillEnter = useCallback(() => {
    skillIconRef?.current?.playFromBeginning();
  }, []);

  return (
    <div className="flex border-2 bg-cherry-100 py-2 px-4 justify-between items-center flex-row sticky top-0 bg-black-50">
      <div className="flex flex-row gap-5 items-center">
        <Link
          href={Routes.Home}
          className="flex flex-row items-center justify-center gap-5"
        >
          <Image
            src={BarristersBandIcon}
            alt="Advocate"
            height={40}
            width={40}
            className="flex justify-center"
          />
        </Link>
        <p className="font-medium bg-black-200 p-1 px-2 rounded-lg hover:cursor-pointer hover:bg-black-300 hover:text-white-200 transition-all duration-300">
          Contact me
        </p>
      </div>
      <div className="flex flex-row items-center w-1/6 justify-between">
        <div
          onMouseEnter={handleSkillEnter}
          className="hover:cursor-pointer bg-black-200 p-2 rounded-full hover:bg-black-300 transition-all duration-300"
        >
          <Player ref={skillIconRef} icon={Skills} colorize="#00000" />
        </div>
        <div
          onMouseEnter={handleSkillsEnter}
          className="hover:cursor-pointer bg-black-200 p-2 rounded-full hover:bg-black-300 transition-all duration-300"
        >
          <Player ref={workIconRef} icon={Work} colorize="#00000" />
        </div>
        <Link
          href={Routes.Contact}
          onMouseEnter={handleEmailEnter}
          className="hover:cursor-pointer bg-black-200 p-2 rounded-full hover:bg-black-300 transition-all duration-300"
        >
          <Player ref={emailIconRef} icon={Email} colorize="#00000" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
