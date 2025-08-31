"use client";
import Image from "next/image";
import { TitleSection } from "./titleSection";
import { PrimaryButton } from "./button";

export type Event = {
    id: number;
    title: string;
    date: string;
    price: string;
    tag?: string;
    image: string;
};

export const events: Event[] = [
    {
        id: 1,
        title: "Basic Education for Beginners",
        date: "20th November 2023",
        price: "Rp 10.000",
        tag: "Free Webinar",
        image: "/event-img.png",
    },
    {
        id: 2,
        title: "Advanced JavaScript Conference",
        date: "5th December 2023",
        price: "Rp 25.000",
        tag: "Paid Event",
        image: "/event-img.png",
    },
    {
        id: 3,
        title: "UI/UX Design Workshop",
        date: "10th December 2023",
        price: "Rp 15.000",
        tag: "Workshop",
        image: "/event-img.png",
    },
    {
        id: 4,
        title: "React for Beginners",
        date: "15th December 2023",
        price: "Rp 20.000",
        tag: "Bootcamp",
        image: "/event-img.png",
    },
    {
        id: 5,
        title: "Next.js Fullstack Conference",
        date: "20th December 2023",
        price: "Rp 30.000",
        tag: "Conference",
        image: "/event-img.png",
    },
    {
        id: 6,
        title: "TypeScript Deep Dive",
        date: "25th December 2023",
        price: "Rp 40.000",
        tag: "Online Class",
        image: "/event-img.png",
    },
    {
        id: 7,
        title: "Frontend Career Talk",
        date: "28th December 2023",
        price: "Rp 5.000",
        tag: "Talkshow",
        image: "/event-img.png",
    },
    {
        id: 8,
        title: "Backend System Design",
        date: "30th December 2023",
        price: "Rp 35.000",
        tag: "Workshop",
        image: "/event-img.png",
    },
];

export default function EventCard() {
    return (
        <div>
            <TitleSection title="Events" />
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {
                    events.map((item, i) => {
                        return (
                            <div key={i} className="block p-4 border-t border-[#EC8305] dark:border-[#fff] shadow-md shadow-[#EC8305] dark:shadow-[#fff] rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                                <>
                                    <div className="flex flex-col-reverse lg:flex-row">
                                        <p className="primary-title md:mr-2">
                                            Basic Education
                                        </p>
                                        <Image
                                            src={'/banner1.png'}
                                            width={100}
                                            height={100}
                                            alt="image"
                                            className="w-auto h-auto"
                                        />
                                    </div>
                                    <p className="muted-color hover:!text-[#DBD3D3]">20th November 2023</p>
                                </>
                                <p className="secondary-title mt-2">Rp. 10.000</p>
                                <PrimaryButton title="Buy Now" />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}
