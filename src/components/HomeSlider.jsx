import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
                    <div className="flex w-full h-full bg-black/10"> {/* Görselin üstünde metinlerin okunması için hafif karartma */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end z-20">
                            <div className="max-w-[600px] px-8 lg:px-12 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 text-white ">
                                <h5 className="font-bold tracking-widest text-sm lg:text-base uppercase">SUMMER 2024</h5>
                                <h1 className="text-4xl lg:text-7xl font-bold uppercase leading-tight">
                                    NEW COLLECTION
                                </h1>
                                <p className="max-w-md text-lg font-medium opacity-90">
                                    We know how large objects will act, but things on a small scale.
                                </p>
                                <button className="bg-success w-fit px-10 py-4 rounded-md font-bold text-2xl uppercase transition-all hover:scale-105 active:scale-95 shadow-lg">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}