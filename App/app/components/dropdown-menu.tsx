import React from "react";
import Image from "next/image";

interface DropDownMenuProps {
    isOpen: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="border-b border-t border-gray-200 bg-white w-full px-4">
            <div className="flex flex-row items-center text-sm text-gray-900 dark:text-white">
                <Image src={"/user.png"} width={40} height={40} alt="user" className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />

                <div className="py-3 ml-4 ">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>
            </div>
            <ul className="flex flex-col py-2">
                <li>
                    <a
                        href="#"
                        className="block  py-2 text-orange-500 font-medium"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="block py-2 text-gray-400">
                        Voucher
                    </a>
                </li>
                <li>
                    <a href="#" className="block py-2 text-gray-400">
                        Notification
                    </a>
                </li>
                <li>
                    <a href="#" className="block py-2 text-gray-400">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="block  py-2 text-gray-400">
                        Account
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DropDownMenu;
