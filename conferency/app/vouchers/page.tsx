'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/navbar";

const queryClient = new QueryClient();

export default function VouchersPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col">
                <Navbar />
            </div>
        </QueryClientProvider>
    )
} 