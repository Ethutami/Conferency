'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyProfilePage from './profile/page';
import { UserTab } from '@/interfaces/user';
import Navbar from '../components/navbar';
import UserMenu from './user-menu/page';
import MyEventsPage from './my-events/page';
import FeedbackPage from './feedback/page';
import TransactionHistoryPage from './transaction-story/page';
import VoucherPage from './voucher/page';

const queryClient = new QueryClient();

export default function UserPage() {
    const [activeTab, setActiveTab] = useState<UserTab>('profile');

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen flex-col pb-10">
                <Navbar />
                <div className="flex flex-row pt-10 px-4 md:px-8 lg:px-16">
                    <UserMenu
                        activeTab={activeTab}
                        onChange={setActiveTab}
                    />
                    <div className='px-2 md:px-6 lg:px-12'></div>
                    <main className="flex flex-1 rounded-xl bg-white p-6 shadow-md">
                        {activeTab === 'profile' && <MyProfilePage />}
                        {activeTab === 'events' && <MyEventsPage />}
                        {activeTab === 'vouchers' && <VoucherPage />}
                        {activeTab === 'feedback' && <FeedbackPage />}
                        {activeTab === 'transactions' && <TransactionHistoryPage />}
                    </main>
                </div>
            </div>
        </QueryClientProvider>
    );
}