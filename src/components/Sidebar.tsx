"use client";
import Link from "next/link";
import React, { useState } from "react";

export const SidebarLink = ({ children, href }: any) => {
  return (
    <li>
      <Link
        className="btn btn-outline btn-circle btn-accent w-44 mt-3"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ml-2 mt-3">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <SidebarLink href="/">Home</SidebarLink>
            <SidebarLink href="/kasir">Kasir</SidebarLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
