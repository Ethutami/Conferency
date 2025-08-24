"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import Logo from "./logo";
// import DropDownMenu from "./dropdown-menu";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Voucher", href: "/voucher" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <header className="w-full shadow-sm dark:shadow-[#FF8400] py-2 px-5 md:px-10 lg:px-20 ">
                <div className="flex items-center justify-between">
                    {/* <Logo /> */}
                    <div className="hidden md:block flex-1 mx-4">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Search ..."
                                className="w-full rounded-full border border-[#DBD3D3] py-2 px-4 pl-10 text-sm 
                            focus:outline-none focus:border-[#EC8305] focus:ring-1 focus:ring-[#EC8305]"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </div>
                    </div>
                    <nav className="hidden md:block text-sm font-medium space-x-4 mx-4 ">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${pathname === item.href
                                    ? "active-color"
                                    : "muted-color hover:active-color"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block flex items-center space-x-4">

                        <button className="hover:bg-gray-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                        </button>
                        <button className="hover:bg-gray-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </button>
                    </div>
                    <div className="block md:hidden lg:hidden flex items-center space-x-4">
                        <button className=" hover:bg-gray-100 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </button>

                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>}
                        </button>

                    </div>
                </div>
            </header>
            {/* <DropDownMenu isOpen={isOpen} /> */}
        </>
    );
};

export default Navbar;