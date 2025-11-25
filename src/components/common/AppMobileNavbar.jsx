'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  {
    label: '_home',
    href: '#',
  },
  {
    label: '_projects',
    href: '#projects',
  },
  {
    label: '_services',
    href: '#services',
  },
  {
    label: '_contact-me',
    href: '#contact',
  },
]

const AppMobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="h-16 w-full overflow-hidden border-b border-[#2B3E6E] bg-[#011627]">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <span className="text-[#607b96] md:hidden">_menu</span>
        ) : (
          <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300 md:static">
            {/* logo */}
            <a href="https://www.codevertiser.com/" className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                className="h-8"
                alt="Logo"
              />
            </a>
            <span className="text-[#607b96]">john_doe</span>
          </div>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <X className="text-[#607b96] hover:text-white" />
            ) : (
              <Menu className="text-[#607b96] hover:text-white" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in absolute top-16 left-0 z-10 h-screen w-full flex-col bg-[#011627] md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[65%]`}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className="flex items-center border-b border-[#2B3E6E] px-4 text-2xl md:border-y-0 md:border-e md:px-8 md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0"
            >
              <a
                href={item.href}
                className="w-full py-7 text-[#607b96] transition-all duration-150 hover:text-white md:py-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const Demo = () => {
  return (
    <div className="relative min-h-screen md:min-h-[400px]">
      <AppMobileNavbar />
    </div>
  )
}

export default AppMobileNavbar;