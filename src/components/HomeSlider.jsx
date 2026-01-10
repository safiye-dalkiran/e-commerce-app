import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Yönlendirme için gerekli
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image1 from '../images/image1.jpg';

export default function HomeSlider() {
    return (
        <section className="w-full relative overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-[calc(100vh-70px)] lg:h-[calc(100vh-136px)] w-full"
            >
                <SwiperSlide className="bg-cover bg-no-repeat bg-center h-full w-full"
                    style={{ backgroundImage: `url(${Image1})` }}>
                    <div className="flex w-full h-full bg-black/5">
                        {/* justify-center ve items-center ile mobilde tam orta, lg: ekranlarda sola yaslıyoruz */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:pl-48 z-20">
                            <div className="max-w-[600px] px-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 text-white">
                                <h5 className="font-bold tracking-widest text-sm lg:text-base uppercase">SUMMER 2024</h5>
                                <h1 className="text-4xl lg:text-[72px] font-bold uppercase leading-tight">
                                    NEW COLLECTION
                                </h1>
                                <p className="max-w-[280px] lg:max-w-md text-lg lg:text-xl font-medium opacity-90">
                                    We know how large objects will act, but things on a small scale.
                                </p>

                                {/* Yönlendirme butonu: Link kullanarak /shop sayfasına bağlıyoruz */}
                                <Link
                                    to="/shop"
                                    className="bg-[#2DC071] w-fit px-10 py-4 rounded-md font-bold text-2xl uppercase transition-all hover:scale-105 active:scale-95 shadow-lg inline-block"
                                >
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}