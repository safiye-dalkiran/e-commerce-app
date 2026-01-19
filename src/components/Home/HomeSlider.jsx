import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image1 from '../../images/image1.jpg';
import Hero2 from '../../images/hero2.png';

const sliderStyles = `
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    font-weight: bold;
  }
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.7;
    width: 50px !important;
    height: 8px !important;
    border-radius: 0 !important;
    margin: 0 5px !important;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    .swiper-pagination-bullet {
      display: none !important;
    }
  }
`;

const slides = [
    {
        id: 1,
        image: Image1,
        season: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale.",
        buttonText: "SHOP NOW",
        link: "/shop",
        textColor: "text-white",
        buttonColor: "bg-[#2DC071]",
        type: "IMAGE_BG"
    },
    {
        id: 2,
        image: Hero2,
        season: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale.",
        buttonText: "SHOP NOW",
        link: "/shop",
        textColor: "text-white",
        buttonColor: "bg-[#2DC071]",
        type: "COMPOSITION",
        bgClass: "bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]"
    }
];

export default function HomeSlider() {
    return (
        <section className="w-full relative overflow-hidden">
            <style>{sliderStyles}</style>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="h-[calc(100vh-60px)] lg:h-[calc(100vh-130px)] w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full relative">
                        {/* Background Layer */}
                        <div className={`absolute inset-0 w-full h-full ${slide.type === 'COMPOSITION' ? slide.bgClass : 'bg-cover bg-center'}`}
                            style={slide.type === 'IMAGE_BG' ? { backgroundImage: `url(${slide.image})` } : {}}
                        />

                        {/* Composition Special Layers (Circles & Model) */}
                        {slide.type === 'COMPOSITION' && (
                            <>
                                {/* Decorative Circles */}
                                <div className={`absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center overflow-hidden pointer-events-none ${slide.type === 'COMPOSITION' ? 'items-end pb-0 lg:pb-0 lg:items-center lg:right-[10%]' : 'items-center lg:right-[10%]'}`}>
                                    <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-white rounded-full absolute mr-[-50px] mt-[-50px] lg:mr-[-50px] lg:mt-[-50px] mb-[-50px] lg:mb-auto"></div>
                                    <div className="w-[50px] h-[50px] bg-white rounded-full absolute top-[20%] right-[10%]"></div>
                                </div>

                                {/* Hero Image Foreground */}
                                <div className={`absolute bottom-0 right-0 w-full lg:w-1/2 flex items-end justify-center lg:justify-end pr-0 lg:pr-24 pointer-events-none ${slide.type === 'COMPOSITION' ? 'h-[40%] lg:h-[95%]' : 'h-full'}`}>
                                    <img src={slide.image} alt={slide.title} className="max-h-full object-contain drop-shadow-xl" />
                                </div>
                            </>
                        )}

                        {/* Content Container */}
                        <div className="relative z-10 flex w-full h-full">
                            <div className="w-full lg:w-1/2 flex items-start justify-center lg:items-center lg:justify-start lg:pl-48 pt-48 lg:pt-0">
                                <div className={`max-w-[600px] px-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 ${slide.textColor}`}>
                                    <h5 className="font-bold tracking-widest text-sm lg:text-base uppercase">{slide.season}</h5>
                                    <h1 className="text-4xl lg:text-[72px] font-bold uppercase leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="max-w-[280px] lg:max-w-md text-lg lg:text-xl font-medium opacity-90">
                                        {slide.description}
                                    </p>

                                    <Link
                                        to={slide.link}
                                        className={`${slide.buttonColor} text-white w-fit px-10 py-3 rounded-[5px] font-bold text-xl uppercase transition-all hover:scale-105 active:scale-95 shadow-lg inline-block`}
                                    >
                                        {slide.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}