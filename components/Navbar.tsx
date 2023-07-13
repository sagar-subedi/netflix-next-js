import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import  prismadb  from '@/lib/prismadb';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  
  const toggleMobileMenu = useCallback(()=>{
    setShowMobileMenu(prev => !prev);
  },[]);

  const toggleAccountMenu = useCallback(()=>{
    setShowAccountMenu(prev => !prev);
  },[]);

  

  return (
    <nav className="fixed w-full z-40">
      <div className="flex gap-3">
        <div className="flex gap-1 py-2">
          <img className="h-6" src="/images/logo.png" alt="Logo" />
          <div className="hidden lg:flex gap-3">
            <NavbarItem label="Home" />
            <NavbarItem label="Series" />
            <NavbarItem label="Films" />
            <NavbarItem label="New and Popular" />
            <NavbarItem label="My List" />
            <NavbarItem label="Browse by Language" />
          </div>
        </div>
        <div className="lg:hidden flex cursor-pointer">
          <div onClick={toggleMobileMenu} className="cursor-pointer text-white">
            <p className="cursor-pointer">Browse</p>
          </div>
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex cursor-pointer text-white ml-auto px-2">
          <div className="px-2">
            S
          </div>
          <div className="px-2">
            N
          </div>
          <div className="w-6 h-6">
            <img onClick={toggleAccountMenu} src="/images/default-blue.png" alt="Profile" />
            </div>
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
