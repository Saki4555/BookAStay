

import React from 'react'
import AppMobileNavbar from './AppMobileNavbar'
import AppDesktopNavbar from './AppDesktopNavbar'

const AppNavbar = () => {
  return (
    <>
      <div className="md:hidden fixed top-0 w-full z-100">
        <AppMobileNavbar />
      </div>
      <AppDesktopNavbar />
    </>
  )
}

export default AppNavbar