import AppMobileNavbar from "@/components/common/AppMobileNavbar";
import { NavbarDemo } from "@/components/common/AppNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="md:hidden sticky top-0 z-1000">
          <AppMobileNavbar />
        </div>
    <NavbarDemo />
    </>
  );
}
