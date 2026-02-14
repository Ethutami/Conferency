"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { RootState } from "@/store/store";
import { FetchEvents } from "@/services/api/events.api";
import { Event } from "@/interfaces/events.interface";
import { TitleSection } from "./titleSection";
import { PrimaryButton } from "./button";
import { formatEventDate } from "../utilis/date-formater";

export default function EventCard() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["events"],
        queryFn: FetchEvents,
    });

    const { events, loading, } = useSelector((state: RootState) => state?.events);

    if (isLoading || loading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;

    const renderEvents = events.length > 0 ? events : data;
    return (
        <div>
            <TitleSection title="Events" />
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {
                    renderEvents?.map((item: Event, i: number) => (
                        <Link href={`/detail/${item?.id}`} key={i} className="
                            block p-4 border-t border-[#EC8305] dark:border-[#fff] rounded-lg
                            shadow-md shadow-[#EC8305] dark:shadow-[#fff] hover:shadow-md 
                            hover:bg-orange-500/10 dark:hover:bg-orange-500/30  transition overflow-hidden
                            flex flex-col justify-between">
                            <div className="flex flex-col-reverse lg:flex-col">
                                <Image
                                    src={item.img ?? '/banner1.png'}
                                    width={100}
                                    height={100}
                                    alt="image"
                                    className="w-auto h-auto"
                                />
                                <p className="primary-title md:mr-2">
                                    {item.event_name}
                                </p>
                            </div>
                            <div>
                                <p className="mt-2 muted-color hover:!text-[#DBD3D3]">{formatEventDate(item?.start_date, "short")}</p>
                                <p className="secondary-title mt-2">{item?.price}</p>
                                <PrimaryButton title="Buy Now" style="py-1 px-2" />
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
