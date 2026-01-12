import React from 'react';
import image1 from '../images/image1.jpg';
import data from '../data';

const Contact = () => {
    return (
        <div className="w-full font-montserrat">
            {/* Yazıların sığması için dikey yüksekliği (min-h) koruyoruz */}
            <section className="relative w-full min-h-[1150px] lg:min-h-[850px] flex items-start overflow-hidden">
                
                {/* 1. Arka Plan Görseli - Sağa Yaslama */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={image1} 
                        alt="BG" 
                        className="w-full h-full object-cover object-left lg:object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00303D]/90 via-[#004E64]/40 to-transparent lg:from-[#002B36] lg:to-transparent"></div>
                </div>

                {/* 2. İçerik Alanı */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-24 py-20 flex flex-col lg:flex-row w-full text-white items-center">
                    
                    {/* BAŞLIK KISMI */}
                    <div className="flex-1 flex items-center lg:items-start flex-col text-center lg:text-start mb-28 lg:mb-0">
                        <h1 className="text-[40px] lg:text-[50px] font-[800] leading-[1.1] uppercase mb-10">
                            Contact Us
                        </h1>
                        <p className="text-[16px] lg:text-[20px] font-[500] opacity-90 max-w-[280px] lg:max-w-md leading-relaxed mb-12">
                            Problems trying to resolve the conflict between the two major realms 
                            of Classical physics: Newtonian mechanics
                        </p>
                        <button className="w-fit px-12 py-5 bg-[#23A6F0] text-white font-bold text-sm uppercase rounded-sm shadow-xl tracking-[0.2em]">
                            Contact Us
                        </button>
                    </div>

                    {/* OFİS BİLGİLERİ */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-16 lg:gap-x-16 lg:gap-y-24">
                        {data.contactOffices.map((office) => (
                            <div key={office.id} className="flex flex-col items-start gap-4">
                                <h3 className="text-[28px] lg:text-[32px] font-bold">{office.city}</h3>
                                <p className="text-[14px] lg:text-[16px] font-medium opacity-80">{office.address}</p>
                                <div className="w-12 h-0.5 bg-[#23A6F0]"></div>
                                <p className="text-[14px] lg:text-[16px] font-bold">{office.zip}</p>
                                <div className="text-[14px] lg:text-[16px] font-semibold opacity-90 space-y-2">
                                    <p>Phone : {office.phone}</p>
                                    <p>Fax : {office.fax}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;