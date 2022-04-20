import { useState } from 'react'
import { NavLink}  from 'react-router-dom'

import Logo from './Logo'
import SocialIcons from './SocialIcons'

import { ReactComponent as MenuIcon } from '../assets/hamburger-menu.svg'
import { ReactComponent as MenuClose } from '../assets/close.svg'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 flex items-center justify-between w-full px-6 py-4 text-lg bg-gray-900/90 text-slate-100">
        <h1 className="flex-1">
          <Logo />
        </h1>
        <nav className={`${ isNavOpen ? "translate-y-0 ease-bounceOut bottom-[2.5vw]" : "translate-y-full ease-bounceIn bottom-0" } fixed italic left-[2.5vw] flex flex-col items-center justify-center duration-700 w-[95vw] h-[50vh] gap-4 text-2xl bg-gray-900/90 backdrop-blur-sm transition-all rounded-xl`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <SocialIcons />
          <button 
            onClick={() => {setIsNavOpen(false)}}
            className='absolute top-4 right-4'
          >
              <MenuClose className='w-7 aspect-square' />
          </button>
        </nav>
        <SocialIcons />
        <button className={`fixed bg-gray-900/90 p-3 rounded-full bottom-6 transition-all ${ isNavOpen ? "translate-x-full right-0" : "translate-x-0 right-6 duration-500 delay-700" }`} onClick={() => {setIsNavOpen(true)}}>
          <MenuIcon className='w-7 aspect-square'/>
        </button>
    </header>
  )
}

export default Header