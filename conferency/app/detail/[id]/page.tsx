"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { FiClock, FiMapPin } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { LiaCalendarDaySolid } from "react-icons/lia";
import { PrimaryButton, SecondaryButton } from "@/app/components/button";
import Navbar from "@/app/components/navbar";
import { capitalizeFirst } from "@/app/utilis/capitalize";
import { formatEventDate } from "@/app/utilis/date-formater";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { FetchEventDetails } from "@/services/api/events.api";
import { Event } from "@/interfaces/events.interface";

const queryClient = new QueryClient();

function FloatingTicket() {
    return (
        <div className="sticky top-32 z-20">
            <div className="relative w-full bg-white rounded-xl shadow-lg p-6">

                {/* Date header */}
                <div className="absolute -top-5 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow">
                    <LiaCalendarDaySolid size={16} />
                    <span>Saturday, 20th November 2023</span>
                </div>

                {/* Price */}
                <div className="mt-8">
                    <p className="text-gray-400 font-semibold">Price :</p>
                    <p className="text-orange-500 font-bold text-3xl mt-1">Rp 14.000</p>
                </div>

                {/* Button */}
                <button className="w-full bg-[#07155A] text-white py-3 rounded-lg text-lg mt-6 hover:opacity-90 transition">
                    Buy Ticket
                </button>
            </div>
            <div className="relative w-full bg-white rounded-xl shadow-lg p-6 mt-6">
                <div className="">
                    <span className=" text-[10px] font-bold">
                        DISCOUNT
                    </span>
                </div>

                {/* Discount Info */}
                <p className="text-gray-400 text-sm">Flat $25 off*</p>

                <p className="text-orange-500 font-bold text-lg mt-1">FINFIRST25</p>

                <p className="text-gray-500 text-xs mt-1">Save $25 on all transactions.</p>

                <a href="#" className="text-blue-600 underline text-xs mt-1 inline-block">
                    *Terms & conditions
                </a>

                {/* Apply Button */}
                <button className="w-full border border-gray-300 py-2 rounded-full text-sm text-orange-500 font-semibold mt-4 hover:bg-gray-50 transition">
                    Apply Code
                </button>
            </div>
        </div>
    );
}

const Banner = ({ data }: { data: Event }) => {
    return (
        <section className="w-full bg-gradient-to-l from-[#024CAA] to-[#DBD3D3] py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                        {data?.event_name}
                    </h1>
                    <p className="text-white text-md mt-4">
                        {data?.tagline}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <PrimaryButton title="Buy Ticket" style="px-6 py-3" />
                        <SecondaryButton title="Claim Voucher" style="px-6 py-3" />
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#EC8305] text-sm mt-10 font-semibold">
                            {formatEventDate(data?.start_date, "long")}
                        </p>
                        <p className="text-white text-sm mt-10 ">
                            &nbsp; | {formatEventDate(data?.start_date, "time")}  | {capitalizeFirst(data?.location_type)}
                        </p>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <Image
                        src="/banner1.png"
                        width={500}
                        height={500}
                        alt="image"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
const Content = ({ data }: { data: Event }) => {
    console.log(data);

    return (
        <div className="px-4 md:px-8 lg:px-16 bg-[rgba(238,223,223,0.25)] pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative">
                <div className="col-span-2 flex flex-col relative">

                    {/* Breadcrumb */}
                    <section>
                        <div className="text-sm text-[#DBD3D3] py-4 px-6 flex gap-2">
                            <span onClick={() => window.location.href = "/"}
                                className="hover:text-[#DBD3D3] cursor-pointer">Home</span>
                            <span>{">"}</span>
                            <span className="hover:text-[#DBD3D3] cursor-pointer">All Category</span>
                            <span>{">"}</span>
                            <span className="font-semibold text-[#DBD3D3]">{data?.organizator?.organizator_name}</span>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-[#DBD3D3]">
                            <div className="flex gap-10 px-6">
                                <button onClick={() => {
                                    document.getElementById("description")?.scrollIntoView({ behavior: "smooth" });
                                }} className="py-3 border-b-2 border-[#091057] font-semibold text-[#091057]">
                                    About
                                </button>
                                <button onClick={() => {
                                    document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
                                }} className="py-3 text-[#DBD3D3] hover:text-[#091057]">
                                    Review
                                </button>
                                <button onClick={() => {
                                    document.getElementById("speakers")?.scrollIntoView({ behavior: "smooth" });
                                }} className="py-3 text-[#DBD3D3] hover:text-[#091057]">
                                    Speaker
                                </button>
                            </div>
                        </div>

                        <div className="px-6 py-10">
                            <h1 className="text-4xl font-extrabold">{data?.event_name}</h1>
                            <p className="text-[#DBD3D3] mt-1">
                                Organized by : {data?.organizator?.organizator_name}
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="grid md:grid-cols-3 gap-10 mt-10 px-6">
                                <div className="flex gap-3">
                                    <HiOutlineCalendar size={28} className="text-[#EC8305]" />
                                    <div>
                                        <h3 className="font-semibold">Date</h3>
                                        <p className="text-sm mt-1">{formatEventDate(data?.start_date, "long")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <FiClock size={26} className="text-[#EC8305]" />
                                    <div>
                                        <h3 className="font-semibold">Time</h3>
                                        <p className="text-sm mt-1">{formatEventDate(data?.start_date, "time")}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <FiMapPin size={26} className="text-orange-500" />
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        {/* Kondisi Online */}
                                        {data?.location_type === "online" && (
                                            <p className="text-sm mt-1">
                                                {capitalizeFirst(data?.location_type)}
                                            </p>
                                        )}
                                        {/* Kondisi Offline */}
                                        {data?.location_type === "offline" && (
                                            <>
                                                <p className="text-sm mt-1 leading-tight">
                                                    {data?.address}
                                                </p>
                                                <a
                                                    href={`https://www.google.com/maps?q=${data.latitude},${data.longitude}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-orange-500 text-sm font-medium mt-2 inline-block"
                                                >
                                                    View in map
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="description" className="mt-16 w-full px-6">
                        <div className="shadow-md rounded-xl p-8">
                            <h2 className="text-2xl font-semibold text-[#091057]">Description</h2>
                            <div className="w-12 h-2 bg-[#091057] rounded-md mt-2 mb-8"></div>
                            <p className="text-sm leading-relaxed">
                                {data?.description}
                            </p>
                        </div>
                    </section>
                    <section id="speakers" className="mt-10 w-full px-6">
                        <div className="shadow-md rounded-xl p-8">
                            <h2 className="text-2xl font-semibold text-[#091057]">Meet Our Speakers</h2>
                            <div className="w-12 h-2 bg-[#091057] rounded-md mt-2 mb-8"></div>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {data?.speakers.map((item, i) => (
                                    <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                                        <div className="relative w-full h-48">
                                            <Image src="/speaker1.png" alt="Speaker" fill className="object-cover" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg">{item?.speaker_name}</h3>
                                            <p className="text-sm text-gray-600">{item?.job_title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="reviews" className="mt-16 w-full px-6">
                        <div className="w-full rounded-2xl bg-white shadow-md p-6 flex flex-col gap-4 mb-10">
                            <div className="flex justify-between items-center">
                                <div className="flex text-yellow-400 text-xl">
                                    {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p className="text-gray-400 text-sm">16th Nov 2022</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet...
                            </p>
                        </div>
                    </section>
                </div>
                <div className="">
                    <FloatingTicket />
                </div>

            </div>
        </div>
    );
};

const EventDetailContent = () => {
    const params = useParams();
    const id = params.id;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["events", id],
        queryFn: () => FetchEventDetails(id as string),
        enabled: !!id && !Array.isArray(id),
    });

    if (!id || Array.isArray(id)) return <p>Invalid event ID</p>;
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>;

    return (
        <div className="mb-10">
            <Banner data={data} />
            <Content data={data} />
        </div>
    );
};

const DetailsPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col">
                <Navbar />
                <EventDetailContent />
            </div>
        </QueryClientProvider>
    );
};

export default DetailsPage;
