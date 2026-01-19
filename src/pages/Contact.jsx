import React from 'react';
import { Link } from 'react-router-dom';
import background from '../images/background.png';
import contacthero from '../images/contacthero.png';

const Contact = () => {
    return (
        <div className="w-full font-montserrat text-[#252B42]">
            {/* 1. HERO SECTION */}
            <section className="relative w-full py-16 lg:py-0 lg:h-[800px] flex items-center overflow-hidden bg-white lg:bg-transparent">

                {/* Desktop Background Layer */}
                <div
                    className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat -z-10"
                    style={{ backgroundImage: `url(${background})`, backgroundSize: '70%' }}
                ></div>

                <div className="max-w-[1050px] mx-auto px-4 flex flex-col lg:flex-row w-full gap-10 lg:gap-0">
                    {/* Text Side */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-10 lg:gap-8 z-10 font-bold">
                        <h5 className="font-bold text-[#252B42] text-base tracking-wide">CONTACT US</h5>
                        <h1 className="font-bold text-[40px] lg:text-[58px] leading-[1.2] lg:max-w-md text-[#252B42]">
                            Get in touch today!
                        </h1>
                        <p className="text-[#737373] text-[20px] font-medium max-w-[376px] leading-[30px]">
                            We know how large objects will act, but things on a small scale just do not act that way.
                        </p>

                        <div className="flex flex-col gap-2 text-[24px] font-bold text-[#252B42]">
                            <p>Phone : +451 215 215</p>
                            <p>Fax : +451 215 215</p>
                        </div>

                        <div className="flex gap-8 text-[30px] text-[#252B42] p-2">
                            <a href="#" className="hover:text-[#23A6F0] transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-[#23A6F0] transition"><i className="fab fa-facebook-square"></i></a>
                            <a href="#" className="hover:text-[#23A6F0] transition"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-[#23A6F0] transition"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Mobile Image (Visible only on mobile) */}
                    <div className="flex w-full justify-center lg:hidden">
                        <img src={contacthero} alt="Family Shopping" className="w-full object-contain" />
                    </div>

                    {/* Spacer for Desktop (Balances the flex layout) */}
                    <div className="flex-1 hidden lg:block"></div>
                </div>
            </section>

            {/* 2. INFO CARDS SECTION */}
            <section className="bg-[#FAFAFA] py-20 px-4">
                <div className="max-w-[1050px] mx-auto flex flex-col items-center gap-16">
                    <div className="text-center">
                        <h6 className="font-bold text-[#252B42] text-sm mb-4">VISIT OUR OFFICE</h6>
                        <h2 className="font-bold text-[#252B42] text-[40px] max-w-[500px] leading-tight">
                            We help small businesses with big ideas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                        {/* Card 1: Phone */}
                        <div className="bg-white px-10 py-16 flex flex-col items-center text-center gap-4 hover:shadow-lg transition">
                            <i className="fas fa-phone-alt text-[72px] text-[#23A6F0]"></i>
                            <div className="font-bold text-[#252B42] text-sm mt-2">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-[#252B42] text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded-full font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Card 2: Location (Dark) */}
                        <div className="bg-[#252B42] px-10 py-16 flex flex-col items-center text-center gap-4 shadow-xl z-10 lg:scale-110">
                            <i className="fas fa-map-marker-alt text-[72px] text-[#23A6F0]"></i>
                            <div className="font-bold text-white text-sm mt-2">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-white text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded-full font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Card 3: Email */}
                        <div className="bg-white px-10 py-16 flex flex-col items-center text-center gap-4 hover:shadow-lg transition">
                            <i className="fas fa-envelope text-[72px] text-[#23A6F0]"></i>
                            <div className="font-bold text-[#252B42] text-sm mt-2">
                                <p>georgia.young@example.com</p>
                                <p>georgia.young@ple.com</p>
                            </div>
                            <h5 className="font-bold text-[#252B42] text-base mt-2">Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] px-7 py-3 rounded-full font-bold text-sm mt-2 hover:bg-[#23A6F0] hover:text-white transition">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CALL TO ACTION SECTION */}
            <section className="py-20 flex flex-col items-center text-center gap-8 relative overflow-hidden">
                <i className="fas fa-arrow-turn-down text-[60px] text-[#23A6F0] -rotate-45 absolute top-10 left-1/2 -translate-x-1/2 opacity-0 lg:opacity-100 lg:left-[48%] lg:top-4 animate-bounce"></i>

                <h6 className="font-bold text-[#252B42] text-base">WE Can't WAIT TO MEET YOU</h6>
                <h2 className="font-bold text-[#252B42] text-[58px]">Let’s Talk</h2>
                <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1a7db6] transition shadow-md">
                    Try it free now
                </button>
            </section>
        </div>
    );
};

export default Contact;