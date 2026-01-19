import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="w-full font-montserrat bg-white">

      <section className="max-w-[1440px] mx-auto px-6 pt-16 lg:pt-20 text-center">
        <h5 className="text-[#737373] font-bold text-base mb-4 uppercase tracking-widest">What we do</h5>
        <h1 className="text-[40px] lg:text-[58px] font-bold text-[#252B42] leading-tight mb-4">
          Innovation tailored for you
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm font-bold mb-12 lg:mb-16">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <span className="text-[#BDBDBD] text-xl font-thin">&gt;</span>
          <span className="text-[#737373]">Team</span>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-2 h-fit lg:h-[530px] mb-20 lg:mb-28">

        <div className="lg:col-span-2 lg:row-span-2 h-[300px] lg:h-full overflow-hidden">
          <img
            src={data.teamGallery[0]}
            alt="Gallery Main"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>

        <div className="h-[200px] lg:h-full overflow-hidden">
          <img
            src={data.teamGallery[1]}
            alt="Gallery 2"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="h-[200px] lg:h-full overflow-hidden">
          <img
            src={data.teamGallery[2]}
            alt="Gallery 3"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="h-[200px] lg:h-full overflow-hidden">
          <img
            src={data.teamGallery[3]}
            alt="Gallery 4"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="h-[200px] lg:h-full overflow-hidden">
          <img
            src={data.teamGallery[4]}
            alt="Gallery 5"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-8 lg:px-24 mb-20">
        <h2 className="text-[40px] font-bold text-[#252B42] text-center mb-20 lg:mb-28">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-x-10 lg:gap-y-28">
          {data.teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42] mb-1">{member.name}</h5>
              <p className="text-[14px] font-bold text-[#737373] mb-4 uppercase">{member.role}</p>
              <div className="flex gap-5 text-[#23A6F0] text-xl">
                <a href={member.socials.facebook}><i className="fab fa-facebook"></i></a>
                <a href={member.socials.instagram}><i className="fab fa-instagram"></i></a>
                <a href={member.socials.twitter}><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-32 text-center flex flex-col items-center">
        <h2 className="text-[40px] font-bold text-[#252B42] max-w-sm lg:max-w-none leading-tight mb-8">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] text-sm font-medium max-w-[320px] lg:max-w-[420px] leading-relaxed mb-10">
          Met minim mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <button className="px-10 py-4 bg-[#23A6F0] text-white font-bold rounded-md uppercase hover:bg-[#1a8cd8] transition-all mb-10">
          Try it free now
        </button>
        <div className="flex gap-8 text-[30px] text-[#737373]">
          <i className="fab fa-twitter cursor-pointer hover:text-[#23A6F0]"></i>
          <i className="fab fa-facebook-square cursor-pointer hover:text-[#23A6F0]"></i>
          <i className="fab fa-instagram cursor-pointer hover:text-[#23A6F0]"></i>
          <i className="fab fa-linkedin cursor-pointer hover:text-[#23A6F0]"></i>
        </div>
      </section>
    </div>
  );
};

export default Team;