"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

const banner = ['/banner1.png', '/banner2.png', '/banner3.png'];

const CarouselComponent = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-auto color-[#091057]"
            >
                {
                    banner.map((items, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={items}
                                alt="Slide 1"
                                width={800}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <style jsx>{`
                :global(.swiper-pagination-bullet) {
                    background-color:  #DBD3D3;
                    opacity: 0.6;
                }
                :global(.swiper-pagination-bullet-active) {
                    background-color: #EC8305;
                    opacity: 1;
                }

                :global(.swiper-button-next),
                :global(.swiper-button-prev) {
                    color: #EC8305;
                }
            `}</style>
        </>
    );
};

export default CarouselComponent;
