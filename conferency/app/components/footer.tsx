"use client"

import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi"
import Logo from "./logo"

export default function Footer() {
    return (
        <div >
            <div className="flex flex-col items-center md:flex-row md:justify-between mb-16 px-4 md:px-8 lg:px-16 mt-10">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <p className="hidden md:block font-medium text-sm leading-normal text-[var(--muted)] italic">
                        Developed by&nbsp;
                        <span className="font-medium text-[var(--base)]">
                            Ehtutami
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <p className="hidden md:block tertiary-title ">Contact & Support</p>
                    <div className="flex flex-row md:flex-col md:gap-4 lg:flex-row gap-6 ">
                        <span className="flex items-center gap-2 text-xs md:text-sm text-[var(--base)] hover:text-[var(--secondary)] cursor-pointer transition-colors">
                            <FiMail /><span>Ehtutami@gmail.com</span>
                        </span>
                        <span className="flex items-center gap-2 text-xs md:text-sm text-[var(--base)] hover:text-[var(--secondary)] cursor-pointer transition-colors">
                            <FiLinkedin /><span>Ehtutami</span>
                        </span>
                        <span className="flex items-center gap-2 text-xs md:text-sm text-[var(--base)] hover:text-[var(--secondary)] cursor-pointer transition-colors">
                            <FiInstagram /><span>@_Ehtuta</span>
                        </span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}