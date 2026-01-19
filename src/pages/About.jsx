import React from 'react';
import { Link } from 'react-router-dom';
import AboutBackground from '../images/about/aboutbackground.png';
import AboutBackgroundMobile from '../images/about/aboutbackgroundmobile.png';
import AboutImage from '../images/about/aboutimage.jpg';
import data, { aboutVideo } from '../data';

const About = () => {
  return (
    <div className="w-full font-montserrat bg-white">

      {/* 1. Hero Bölümü */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-24 py-12 lg:py-0 flex flex-col lg:flex-row items-center gap-12 h-[calc(100vh-100px)] lg:h-[calc(100vh-80px)]">

        {/* Masaüstü Arka Plan Görseli (Sadece LG ve üzerinde görünür) */}
        <div
          className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${AboutBackground})`, backgroundSize: '100%' }}
        ></div>

        {/* İçerik Alanı */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center gap-8 lg:pr-12 z-10 w-full">
          <h5 className="hidden lg:block text-[#252B42] font-bold text-base uppercase tracking-wider">
            About Company
          </h5>
          <h1 className="text-[35px] lg:text-[58px] font-bold text-[#252B42] leading-tight">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-lg lg:text-xl text-xl max-w-[380px] leading-relaxed">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="px-10 py-4 bg-[#23A6F0] text-white font-bold rounded-md uppercase hover:bg-[#1a8cd8] transition-all shadow-md">
            Get Quote Now
          </button>
        </div>

        {/* Mobil Görsel*/}
        <div className="w-full lg:hidden  flex justify-center">
          <img
            src={AboutBackgroundMobile}
            alt="About Us"
            className="w-full max-w-[350px] h-auto object-contain"
          />
        </div>

      </section>

      {/* 2. Metin İçerik Bölümü */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-24 py-30 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h6 className="text-[#E74040] text-sm font-bold mb-4">Problems trying</h6>
          <h2 className="text-[24px] font-bold text-[#252B42] max-w-[390px] mx-auto lg:mx-0">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className="flex-1 px-6">
          <p className="text-[#737373] text-[15px] leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      {/* 3. İstatistikler */}
      <section className="max-w-[1440px] mx-auto py-0 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-[58px] font-bold text-[#252B42]">15K</h2>
          <h5 className="text-[#737373] font-bold">Happy Customers</h5>
        </div>
        <div>
          <h2 className="text-[58px] font-bold text-[#252B42]">150K</h2>
          <h5 className="text-[#737373] font-bold">Monthly Visitors</h5>
        </div>
        <div>
          <h2 className="text-[58px] font-bold text-[#252B42]">15</h2>
          <h5 className="text-[#737373] font-bold">Countries Worldwide</h5>
        </div>
        <div>
          <h2 className="text-[58px] font-bold text-[#252B42]">100+</h2>
          <h5 className="text-[#737373] font-bold">Top Partners</h5>
        </div>
      </section>

      {/* 4. Video Alanı */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-24 py-20">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-video group shadow-2xl">
          {/* Arka Plan Görseli */}
          <img
            src={aboutVideo.coverImage}
            alt="Video Background"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/40 to-transparent flex flex-col items-center justify-center text-center p-6 lg:p-12">

            {/* Oynatma Butonu */}
            <button className="w-16 h-16 lg:w-24 lg:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl shadow-2xl hover:scale-110 transition-all mb-8">
              <i className="fas fa-play ml-1"></i>
            </button>

            {/* Metin İçerikleri */}
            <h2 className="text-white text-3xl lg:text-[40px] font-bold mb-4 max-w-lg leading-tight">
              {aboutVideo.title}
            </h2>
            <p className="text-white text-sm lg:text-base max-w-md opacity-90 leading-relaxed">
              {aboutVideo.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Meet Our Team  */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-24 py-24">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">Meet Our Team</h2>
          <p className="text-[#737373] text-[20px] max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {data.teamMembers.slice(0, 3).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden mb-6 rounded-sm">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42] mb-1">{member.name}</h5>
              <p className="text-[14px] font-bold text-[#737373] mb-4 uppercase">{member.role}</p>
              <div className="flex gap-5 text-[#23A6F0] text-xl">
                <i className="fab fa-facebook cursor-pointer"></i>
                <i className="fab fa-instagram cursor-pointer"></i>
                <i className="fab fa-twitter cursor-pointer"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Marka Logoları */}
      <section className="bg-[#FAFAFA] py-20 text-center px-10 ">
        <h2 className="text-[40px] font-bold text-[#252B42] mb-8 px-10 lg:px-0">Big Companies Are Here</h2>
        <p className='text-[#737373] text-lg  max-w-xl mx-auto pb-5 '>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
        <div className="max-w-[1440px] mx-auto px-6 py-5 lg:px-24 flex flex-col lg:flex-row lg:justify-between gap-12 items-center opacity-60">
          <i className="fab fa-hooli text-7xl"></i>
          <i className="fab fa-lyft text-7xl"></i>
          <i className="fab fa-pied-piper-hat text-7xl"></i>
          <i className="fab fa-stripe text-7xl"></i>
          <i className="fab fa-aws text-7xl"></i>
          <i className="fab fa-reddit-alien text-7xl"></i>
        </div>
      </section>

      {/* 7. Alt CTA */}
      <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[628px]">
        <div className="flex-1 bg-[#2A7CC7] text-white flex flex-col justify-center px-10 lg:px-70 py-20 lg:py-0 text-center lg:text-left">
          <h5 className="font-bold text-lg text-base mb-8 uppercase tracking-widest">Work With Us</h5>
          <h2 className="text-[40px] font-bold leading-tight mb-8">Now Let’s grow Yours</h2>
          <p className="text-[16px] mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
          </p>
          <button className="w-fit px-10 py-4 border border-white text-white font-bold rounded-md uppercase hover:bg-white hover:text-[#2A7CC7] transition-all mx-auto lg:mx-0">
            Button
          </button>
        </div>
        <div className="flex-1 hidden lg:block overflow-hidden">
          <img
            src={AboutImage}
            alt="Work with us"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </div>
      </section>


    </div>
  );
};

export default About;