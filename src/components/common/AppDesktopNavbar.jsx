"use client";
import {
  Navbar,
  NavBody,
  NavItems,

  NavbarLogo,
 

} from "@/components/ui/resizable-navbar";
import { NAV_ITEMS } from "@/lib/constants";



export default function AppDesktopNavbar() {



  return (
    <>
      <Navbar className="fixed w-full top-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} />
        
        </NavBody>

        
      </Navbar>


      
    </>
  );
}

