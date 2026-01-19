import React from 'react';
import { socialLinks } from './navConfig';

export default function TopBar() {
    return (
        <div className="hidden lg:flex bg-[#252B42] text-white w-full">
            <div className="max-w-[1440px] mx-auto w-full px-8 py-3 flex justify-between items-center text-sm font-bold">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2"><i className="fas fa-phone-alt"></i> (225) 555-0118</div>
                    <div className="flex items-center gap-2"><i className="far fa-envelope"></i> michelle.rivera@example.com</div>
                </div>
                <div>Follow Us and get a chance to win 80% off</div>
                <div className="flex items-center gap-3">
                    <span>Follow Us :</span>
                    <div className="flex gap-3 text-lg">
                        {socialLinks.map((link, index) => (
                            <i
                                key={index}
                                className={`fab fa-${link.icon} cursor-pointer hover:text-[#23A6F0]`}
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
