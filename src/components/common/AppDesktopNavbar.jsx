"use client";
import {
  Navbar,
  NavBody,
  NavItems,

  NavbarLogo,
 

} from "@/components/ui/resizable-navbar";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useEffect, useState } from "react";



export default function AppDesktopNavbar() {
  const { t } = useLanguage();
  const NAV_ITEMS = t("nav");
 const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  return (
    <>
      <Navbar className="fixed w-full top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} />
        <LanguageSwitcher />
        </NavBody>

        
      </Navbar>


      
    </>
  );
}

