"use client"
import removeIcon from "@/public/icons8-löschen.svg"
import eventLogo from "@/public/icons8-event-100.png"
import calenderLogo from "@/public/icons8-kalender-100.png"
import InfoLogo from "@/public/icons8-info.svg"
import menuIcon from '@/public/icons8-menüStatic.svg'
import gitLogo from "@/public/icons8-github.svg"
import Image from "next/image";
import azadiLogo from "@/public/azadi_1354297.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const currentPath = usePathname();
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));
  return (
    <>
      <div className="text-center bg-[#9DB2BF] text-black h-16 flex items-center justify-between text-2xl pl-6 pr-2">
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <span className="flex">
            <Link href={'/'} className="flex items-center gap-4 ">
              <Image className="w-12 h-12" src={azadiLogo} alt='adazi logo' />
              <span className="xl:text-2xl lg:text-xl md:text-base hidden lg:inline">Persian Calender</span>
            </Link>
          </span>
        </div>
        <div className="list flex gap-16 pr-12 justify-center ">
          <p className={`cursor-pointer  ${currentPath == '/allEvents' && 'underline'}`}>
            <Link href={'/allEvents'}>
              <span className="xl:text-2xl lg:text-xl text-lg hidden sm:inline">Alle Ereignisse sehen</span>
            </Link>
          </p>
          <p className={`cursor-pointer ${currentPath == '/about' && 'underline'} `} >
            <Link href={'/about'}>
              <span className="xl:text-2xl lg:text-xl text-lg hidden sm:inline">Mehr über mich</span>
            </Link>
          </p>
        </div>
        <div className="icon w-16 h-full flex items-center">
          {currentWidth <= 640 && <div>
            <Image onClick={() => setShowMenu(!showMenu)} src={!showMenu ? menuIcon : removeIcon} alt='menu' className='w-12 h-12 cursor-pointer' />
          </div>}
          <Link href={'https://github.com/AliAshooriyoon'} className="hidden sm:inline">
            <Image className="w-12 h-12 cursor-pointer" src={gitLogo} alt={''} />
          </Link>
        </div>
        {showMenu && currentWidth <= 640 && <div className='absolute right-0 top-16 w-full h-64 bg-[#9DB2BF] rounded-b-2xl border-4 border-black'>
          <div className='list_little flex flex-col pt-2 text-xl text-left indent-4 gap-4'>
            <Link onClick={() => setShowMenu(false)} href={'/'}><p className='item flex items-center pl-3 cursor-pointer'> <Image className="w-6 h-6" src={calenderLogo} alt="eventLogo" /> Persian Calender</p></Link>
            <Link onClick={() => setShowMenu(false)} href={'/allEvents'}> <p className='item flex items-center pl-3 cursor-pointer'> <Image className="w-6 h-6" src={eventLogo} alt="eventLogo" /> Alle Ereignisse sehen</p> </Link>
            <Link onClick={() => setShowMenu(false)} href={'/about'} > <p className='item flex items-center pl-3 cursor-pointer'><Image className="w-6 h-6" src={InfoLogo} alt="eventLogo" /> Mehr über mich</p> </Link>
          </div>
        </div>}
      </div>
    </>
  )
}
export default Header;
