"use client";
import {
  Navbar,
  NavBody,
  NavItems,

  NavbarLogo,
  NavbarButton,

} from "@/components/ui/resizable-navbar";
import { useState } from "react";


export default function AppDesktopNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];



  return (
    <>
      <Navbar className="fixed w-full top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        
        </NavBody>

        
      </Navbar>


      
    </>
  );
}

