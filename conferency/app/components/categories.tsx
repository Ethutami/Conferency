'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { fetchCategories } from "@/services/categories.service";
import iCategory from "@/interfaces/categories.interface";
import { TitleSection } from "./titleSection";

export default function Categories() {
    const [categories, setCategories] = useState<iCategory[]>([]);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        try {
            const getExperiences = async () => {
                const result = await fetchCategories();
                setCategories(result || [])
            };
            getExperiences()

        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="w-full py-4">
            <div className="px-4 md:px-8 lg:px-16">
                <TitleSection title="Categories" />
            </div>
            <div className="relative px-4 md:px-8 lg:px-16">
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 
                 bg-white dark:bg-[#000] text-[#EC8305] w-10 h-10 rounded-full shadow 
                 flex items-center justify-center z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m12 8-4 4 4 4" />
                        <path d="M16 12H8" />
                    </svg>
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 right-0 -translate-y-1/2 
                 bg-white dark:bg-[#000] text-[#EC8305] w-10 h-10 rounded-full shadow 
                 flex items-center justify-center z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m12 16 4-4-4-4" />
                        <path d="M8 12h8" />
                    </svg>
                </button>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    onInit={(swiper) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    className="overflowX-hidden"
                >
                    {categories.map((item) => (
                        <SwiperSlide key={item.id} className="!w-auto">
                            <button className="muted-color flex flex-col md:flex-row items-center gap-2 px-3 py-2 rounded-lg transition-colors">
                                <div className="rounded-[8px] md:border-none border border-[#EC8305] w-30 h-18 md:w-auto md:h-auto items-center justify-center flex">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="object-contain w-16 h-outo md:w-10 "
                                    />
                                </div>
                                <span className="text-sm whitespace-nowrap">{item.name}</span>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}




