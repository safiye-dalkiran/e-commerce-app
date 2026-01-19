import React from 'react';

const Clients = () => {
    const logos = [
        "fa-hooli",
        "fa-lyft",
        "fa-pied-piper-hat",
        "fa-stripe",
        "fa-aws",
        "fa-reddit-alien"
    ];

    return (
        <section className="bg-[#FAFAFA] py-16">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-24 items-center justify-items-center opacity-50 grayscale transition-all duration-300 hover:opacity-100">
                    {logos.map((logo, index) => (
                        <i
                            key={index}
                            className={`fab ${logo} text-7xl lg:text-8xl text-[#737373]`}
                        ></i>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;