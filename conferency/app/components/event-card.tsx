"use client";
import Image from "next/image";
import { TitleSection } from "./titleSection";
import { PrimaryButton } from "./button";
import { useQuery } from "@tanstack/react-query";
import { FetchEvents } from "@/services/api/events.api";
import { Event } from "@/interfaces/events.interface";
import { format } from "date-fns";

export function formatEventDate(isoDate: string): string {
    const date = new Date(isoDate);
    return format(date, "do MMMM yyyy"); // 20th September 2025
}

export default function EventCard() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["events"],
        queryFn: FetchEvents,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;
    return (
        <div>
            <TitleSection title="Events" />
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {
                    data.map((item: Event, i: number) => {
                        return (
                            <div key={i} onClick={() => alert('helo')} className="
                            block p-4 border-t border-[#EC8305] dark:border-[#fff] rounded-lg
                            shadow-md shadow-[#EC8305] dark:shadow-[#fff] hover:shadow-md 
                            hover:bg-orange-500/10 dark:hover:bg-orange-500/30  transition overflow-hidden">
                                <>
                                    <div className="flex flex-col-reverse lg:flex-row">
                                        <p className="primary-title md:mr-2">
                                            {item.event_name}
                                        </p>
                                        <Image
                                            src={item.img ?? '/banner1.png'}
                                            width={100}
                                            height={100}
                                            alt="image"
                                            className="w-auto h-auto"
                                        />
                                    </div>
                                    <p className="muted-color hover:!text-[#DBD3D3]">{formatEventDate(item?.start_date)}</p>
                                </>
                                <p className="secondary-title mt-2">{item?.price}</p>
                                <PrimaryButton title="Buy Now" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
