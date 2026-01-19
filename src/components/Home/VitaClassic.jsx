import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Görsel yolu
import Image6 from '../../images/image6.png';

const VitaClassic = () => {
    return (
        <section className="bg-[#23856D] w-full font-montserrat overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                className="w-full h-auto lg:h-screen"
            >
                <SwiperSlide>
                    <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between min-h-screen relative pt-20 lg:pt-0">

                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 lg:gap-8 text-white z-20 w-full md:w-1/2">
                            <h5 className="text-xl font-normal uppercase tracking-wider">SUMMER 2020</h5>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-md">
                                Vita Classic Product
                            </h1>
                            <p className="max-w-xs lg:max-w-sm text-xl font-medium opacity-90 leading-relaxed">
                                We know how large objects will act, but things on a small scale.
                            </p>

                            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 mt-4">
                                <span className="text-2xl font-bold">$16.48</span>
                                <button className="bg-[#2DC071] px-10 py-4 rounded-md font-bold text-sm uppercase transition-all hover:bg-[#28a761] active:scale-95 shadow-lg cursor-pointer">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end mt-12 md:mt-0">
                            <img
                                src={Image6}
                                alt="Vita Classic Model"
                                className="w-auto h-[400px] md:h-[500px] lg:h-[680px] object-contain object-bottom"
                            />
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default VitaClassic;