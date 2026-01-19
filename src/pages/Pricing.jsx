import React from 'react';
import { Link } from 'react-router-dom';
import { pricingPlans, pricingFAQs } from '../data';

const Pricing = () => {
    return (
        <div className="w-full font-montserrat bg-white text-[#252B42]">
            {/* 1. Başlık ve Breadcrumb */}
            <section className=" py-12 lg:py-20 text-center bg-[#FAFAFA]">
                <h5 className="text-[#737373] font-bold text-base mb-4 uppercase">PRICING</h5>
                <h1 className="text-[40px] lg:text-[58px] font-bold mb-4 tracking-tight">Simple Pricing</h1>
                <div className="flex items-center justify-center gap-4 text-sm font-bold">
                    <Link to="/" className="text-[#252B42]">Home</Link>
                    <i className="fas fa-chevron-right text-[#BDBDBD] text-xs"></i>
                    <span className="text-[#737373]">Pricing</span>
                </div>
            </section>

            {/* 2. Fiyatlandırma Bölümü */}
            <section className="bg-[#FAFAFA] pb-24 px-6 text-center">
                <h2 className="text-[40px] font-bold mb-4">Pricing</h2>
                <p className="text-[#737373] text-sm max-w-md mx-auto mb-12">
                    Problems trying to resolve the conflict between the two major realms of Classical physics
                </p>

                {/* Aylık/Yıllık Toggle + Rozet */}
                <div className="flex items-center justify-center gap-4 mb-12 font-bold">
                    <span>Monthly</span>
                    <div className="w-12 h-6 bg-white border border-[#23A6F0] rounded-full p-1 cursor-pointer flex items-center">
                        <div className="w-4 h-4 bg-[#D0D0D0] rounded-full"></div>
                    </div>
                    <span>Yearly</span>
                    <span className="bg-[#B3E3FF] text-[#23A6F0] px-4 py-2 rounded-full text-xs">Save 25%</span>
                </div>

                <div className="max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-3 items-stretch lg:items-center gap-8 lg:gap-0">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${plan.isPopular
                                ? 'bg-[#252B42] text-white px-8 py-16 lg:scale-110 z-10 shadow-2xl'
                                : 'bg-white border border-[#23A6F0] p-10'
                                } rounded-lg flex flex-col items-center transition-all duration-300`}
                        >
                            <h3 className="text-2xl font-bold mb-8 uppercase">{plan.title}</h3>
                            <p className={`${plan.isPopular ? 'text-white' : 'text-[#737373]'} font-bold mb-8 max-w-[160px]`}>
                                {plan.description}
                            </p>
                            <div className="flex items-center gap-2 text-[#23A6F0] mb-8">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <div className="flex flex-col items-start text-[#23A6F0]">
                                    <span className="text-2xl font-bold">$</span>
                                    <span className="text-xs font-bold opacity-60">Per Month</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 text-left w-full">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className={`flex items-start gap-3 font-bold text-sm ${!feature.included && 'opacity-50'}`}>
                                        <i className={`fas fa-check-circle text-2xl shrink-0 ${feature.included ? 'text-[#2DC071]' : 'text-[#BDBDBD]'}`}></i>
                                        <span className="leading-tight">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full lg:w-fit px-12 py-4 font-bold rounded-md transition-all active:scale-95 ${plan.isPopular ? 'bg-[#23A6F0] text-white' : 'bg-[#252B42] text-white'
                                }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* EKSİK BÖLÜM 1: Marka Logoları */}
            <section className="bg-[#FAFAFA] py-20 text-center px-10 ">

                <p className='text-lg  max-w-xl mx-auto pb-5 '>Trusted By Over 4000 Big Companies</p>
                <div className="max-w-[1440px] mx-auto px-6 py-5 lg:px-24 flex flex-col lg:flex-row lg:justify-between gap-12 items-center opacity-60">
                    <i className="fab fa-hooli text-7xl"></i>
                    <i className="fab fa-lyft text-7xl"></i>
                    <i className="fab fa-pied-piper-hat text-7xl"></i>
                    <i className="fab fa-stripe text-7xl"></i>
                    <i className="fab fa-aws text-7xl"></i>
                    <i className="fab fa-reddit-alien text-7xl"></i>
                </div>
            </section>

            {/* 3. Dinamik FAQs Bölümü */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-48 py-24 bg-white">
                <div className="text-center mb-20">
                    <h2 className="text-[32px] lg:text-[40px] font-bold mb-4 tracking-tight">Pricing FAQs</h2>
                    <p className="text-[#737373] text-lg max-w-sm mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
                    {pricingFAQs.map((faq) => (
                        <div key={faq.id} className="flex gap-4">
                            <i className="fas fa-chevron-right text-[#23A6F0] mt-1 text-xs shrink-0"></i>
                            <div>
                                <h5 className="font-bold mb-3 leading-snug">{faq.q}</h5>
                                <p className="text-sm text-[#737373] leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-[#737373] text-xl font-medium mt-16">
                    Haven't got your answer? Contact our support
                </p>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 text-center bg-white border-t border-gray-100">
                <h2 className="text-[40px] font-bold mb-8 tracking-tight">Start your 14 days free trial</h2>
                <p className="text-[#737373] text-sm max-w-[420px] mx-auto mb-10 leading-relaxed font-medium">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                <button className="px-10 py-4 bg-[#23A6F0] text-white font-bold rounded-md uppercase hover:bg-[#1a8cd8] transition-all mb-10 shadow-lg">
                    Try it free now
                </button>
                <div className="flex gap-8 justify-center text-[30px] ">
                    <i className="fab fa-twitter hover:text-[#23A6F0] cursor-pointer"></i>
                    <i className="fab fa-facebook-square hover:text-[#23A6F0] cursor-pointer"></i>
                    <i className="fab fa-instagram hover:text-[#23A6F0] cursor-pointer"></i>
                    <i className="fab fa-linkedin hover:text-[#23A6F0] cursor-pointer"></i>
                </div>
            </section>
        </div>
    );
};

export default Pricing;