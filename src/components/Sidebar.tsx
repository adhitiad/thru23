import Link from "next/link";
import React from "react";

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

const refMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Kasir",
    href: "/kasir",
  },
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
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
            {refMenu.map((item: any, index: any) => (
              <li key={index}>
                {/* Sidebar content here */}
                <SidebarLink href={item.href}>{item.name}</SidebarLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
