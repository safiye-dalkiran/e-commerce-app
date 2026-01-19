import React from 'react';
import Image7 from '../../images/image7.png';

const NeuralUniverse = () => {
  return (
    <section className="w-full bg-white font-montserrat overflow-hidden lg:h-[682px] flex items-center py-12 lg:py-0">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="w-full md:w-[50%] lg:w-[55%] h-full order-2 md:order-1 flex justify-start items-end">
          <img
            src={Image7}
            alt="Neural Universe"
            className="w-full h-auto lg:h-full object-contain object-left-bottom lg:object-left"
          />
        </div>

        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-center md:items-start text-center md:text-left px-6 lg:pr-12 xl:pr-24 order-1 md:order-2 mb-10 md:mb-0">
          <h5 className="text-[#bdbdbd] font-bold text-sm lg:text-base uppercase tracking-widest mb-4">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-3xl lg:text-[58px] font-bold leading-[1.2] lg:leading-[1.1] max-w-[300px] lg:max-w-md mb-6">
            Part of the Neural Universe
          </h2>
          <p className="text-[#737373] text-lg lg:text-xl font-medium max-w-[280px] lg:max-w-[370px] leading-relaxed mb-8">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button className="w-[170px] bg-[#2DC071] text-white py-4 rounded-md font-bold text-sm uppercase transition-all hover:bg-[#28a761] shadow-md cursor-pointer">
              BUY NOW
            </button>
            <button className="w-[170px] border-2 border-[#2DC071] text-[#2DC071] py-4 rounded-md font-bold text-sm uppercase transition-all hover:bg-[#2DC071] hover:text-white cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeuralUniverse;