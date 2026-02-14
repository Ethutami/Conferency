"use client";

import { UserTab } from '@/interfaces/user';
import {
    User,
    Calendar,
    Ticket,
    MessageSquare,
    CreditCard,
} from 'lucide-react';


interface Props {
    activeTab: UserTab;
    onChangeAction: (tab: UserTab) => void;
}

const menus: {
    key: UserTab;
    label: string;
    icon: React.ReactNode;
}[] = [
        { key: 'profile', label: 'My Profile', icon: <User /> },
        { key: 'events', label: 'My Events', icon: <Calendar /> },
        { key: 'vouchers', label: 'Vouchers', icon: <Ticket /> },
        { key: 'feedback', label: 'Feedback', icon: <MessageSquare /> },
        {
            key: 'transactions',
            label: 'Transaction History',
            icon: <CreditCard />,
        },
    ];

export default function UserMenu({
    activeTab,
    onChangeAction,
}: Props) {
    return (
        <aside className="w-[320px] rounded-xl shadow-md">
            <div className="px-6 py-4 text-sm font-semibold text-[#DBD3D3]">
                Navigation Profile
            </div>

            <nav>
                {menus.map((menu) => {
                    const isActive = menu.key === activeTab;

                    return (
                        <button
                            key={menu.key}
                            onClick={() => onChangeAction(menu.key)}
                            className={`flex w-full items-center gap-3 px-6 py-4 text-left transition
                                ${isActive
                                    ? 'bg-[#024CAA] text-white'
                                    : 'text-[#DBD3D3] hover:bg-gray-50'
                                }`}
                        >
                            {menu.icon}
                            <span className="font-semibold">
                                {menu.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}
