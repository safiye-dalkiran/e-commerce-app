import React from 'react'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'
import Image4 from '../../images/image4.jpg'
import Image5 from '../../images/image5.jpg'

function EditorPick() {
    return (
        <section className="bg-[#FAFAFA] py-20 px-6 lg:px-24">
            {/* Başlık Grubu */}
            <div className="flex flex-col items-center text-center gap-2 mb-12">
                <h2 className="text-2xl font-bold text-[#252B42] uppercase tracking-tight">Editor's Pick</h2>
                <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
            </div>

            {/* Galeri Konteynırı */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-8 max-w-7xl mx-auto h-auto lg:h-[500px]">

                {/* MEN */}
                <div className="relative md:col-span-1 lg:flex-[2] group overflow-hidden h-[500px] lg:h-full">
                    <img src={Image2} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Men" />
                    <button className="absolute bottom-6 left-6 bg-white min-w-[170px] py-3 font-bold text-[#252B42] uppercase tracking-wide shadow-sm">
                        Men
                    </button>
                </div>

                {/* WOMEN */}
                <div className="relative md:col-span-1 lg:flex-1 group overflow-hidden h-[500px] lg:h-full">
                    <img src={Image3} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Women" />
                    <button className="absolute bottom-6 left-6 bg-white min-w-[136px] py-3 font-bold text-[#252B42] uppercase tracking-wide shadow-sm">
                        Women
                    </button>
                </div>

                {/* ACCESSORIES & KIDS */}
                <div className="flex flex-col md:col-span-2 md:flex-row lg:flex-col gap-8 lg:flex-1">
                    {/* Accessories */}
                    <div className="relative h-[242px] lg:flex-1 group overflow-hidden w-full">
                        <img src={Image4} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Accessories" />
                        <button className="absolute bottom-6 left-6 bg-white min-w-[170px] py-2 font-bold text-[#252B42] uppercase tracking-wide shadow-sm">
                            Accessories
                        </button>
                    </div>
                    {/* Kids */}
                    <div className="relative h-[242px] lg:flex-1 group overflow-hidden w-full">
                        <img src={Image5} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kids" />
                        <button className="absolute bottom-6 left-6 bg-white min-w-[170px] py-2 font-bold text-[#252B42] uppercase tracking-wide shadow-sm">
                            Kids
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default EditorPick