import React from 'react';
import data from '../data';

const Team = () => {
  return (
    <div className="w-full font-montserrat bg-white">
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24 text-center">
        <h2 className="text-[40px] lg:text-[58px] font-bold text-[#252B42] leading-tight mb-4">
          Meet Our Team
        </h2>
        <p className="text-[#737373] text-sm lg:text-base max-w-md mx-auto leading-relaxed font-medium">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </section>

      {/* 2. Ekip Üyeleri Izgarası (Grid) */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-24 pb-24">
        {/* Mobilde 1, Tablette 2, Masaüstünde 4 sütunlu yapı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-10 lg:gap-y-16">
          {data.teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              {/* Profil Görseli */}
              <div className="w-full aspect-square overflow-hidden mb-6 rounded-sm shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* İsim ve Rol Bilgileri */}
              <h5 className="text-[16px] font-bold text-[#252B42] mb-1">
                {member.name}
              </h5>
              <p className="text-[14px] font-bold text-[#737373] mb-4 uppercase tracking-wider">
                {member.role}
              </p>
              
              {/* Sosyal Medya İkonları (Bandage Mavi Tonu) */}
              <div className="flex gap-5 text-[#23A6F0] text-xl">
                <a href={member.socials.facebook} className="hover:text-[#252B42] transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={member.socials.instagram} className="hover:text-[#252B42] transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.socials.twitter} className="hover:text-[#252B42] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Team;