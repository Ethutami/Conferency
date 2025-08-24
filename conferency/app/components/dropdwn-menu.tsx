
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropDownMenuProps {
    isOpen: boolean;
}

const navItems = [
    { name: "Home", href: "/" },
    { name: "Voucher", href: "/voucher" },
    { name: "Notifications", href: "/notifications" },
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
];

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen }) => {
    const pathname = usePathname();
    if (!isOpen) return null;

    return (
        <div className="shadow-sm shadow-[#DBD3D3] dark:shadow-[#FF8400] w-full px-4">
            <div className="flex flex-row items-center text-sm text-[#DBD3D3] dark:text-white">
                <Image src={"/user.png"} width={40} height={40} alt="user" className="w-10 h-10 rounded-full ring-2 ring-[#DBD3D3] " />
                <div className="py-3 ml-4 ">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>
            </div>
            <ul className="flex flex-col py-4">
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
            </ul>
        </div>
    );
};

export default DropDownMenu;
