"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { DrawerWithNavigation } from "../sidebar/Drawer.jsx";

export default function NavbarAdmin() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar px-7">
      <Navbar>
        <NavbarBrand>
          <img src="favicon.ico" alt="Ramble group" className="m-1" />
            <Link className="font-bold text-inherit lg:text-lg md:text-medium text-sm" style={{ color: "white" }} href="/">Ramble Group</Link> 
        </NavbarBrand>

        <NavbarContent className="flex gap-4" justify="center">
          <NavbarItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handleSidebarToggle} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>

          </NavbarItem>

        </NavbarContent>

        <NavbarContent as="div" justify="end">
        </NavbarContent>

      </Navbar>
      {isSidebarOpen && <DrawerWithNavigation />}
    </div>
  );
}
