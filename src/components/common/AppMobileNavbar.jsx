'use client'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'



const AppMobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const NAV_ITEMS = t("nav");
   const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 20) {
        setIsScrolled(true);
      } else { // ADDED: Reset when scroll position is 20 or less
        setIsScrolled(false);
      }
    }

    // Call once immediately to check initial state
    handleScroll(); 
    
    // TYPO FIX: Changed 'scroll)' to 'scroll'
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  if (!isMounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }



  console.log(isScrolled);

  return (
    <nav className={cn(" h-16 w-full overflow-hidden bg-secondary/10", isScrolled && !isVisible ? "backdrop-blur-lg bg-muted/80" : "backdrop-blur-none", isVisible && "bg-muted/95" )}  >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <span className="text-muted-foreground md:hidden">Menu</span>
        ) : (
          <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300 md:static">
            {/* logo */}
            <Link href="/" className="flex items-center gap-3">
             <span className={cn("text-white", isScrolled && "text-muted-foreground")}>Winds of Zanzibar</span>
            </Link>
            
          </div>
        )}

        <div className="flex  md:hidden gap-0">
          <LanguageSwitcher />
          <button onClick={toggleMenu}>
            {isVisible ? (
              <X className={cn("text-white hover:text-primary", (isScrolled || isVisible) && "text-muted-foreground")} />
            ) : (
              <Menu size={19} className={cn("text-white hover:text-primary", (isScrolled || isVisible) && "text-muted-foreground")} />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in absolute top-16 left-0 z-10 h-screen w-full flex-col bg-primary/80 backdrop-blur-lg md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[65%]`}
        >
          {NAV_ITEMS.map((item) => (
            <li
              key={item.link}
              onClick={toggleMenu}
              className="flex items-center border-b border-border/65 px-4 text-2xl md:border-y-0 md:border-e md:px-8 md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0"
            >
              <Link
                href={item.link}
                className="w-full py-7 text-primary-foreground transition-all duration-150 hover:text-white md:py-0"
              >
                {item.name}
              </Link>
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