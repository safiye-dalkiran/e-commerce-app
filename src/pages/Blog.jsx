import React from 'react';
import { AlarmClock, ChartArea, ChevronRight } from 'lucide-react';
import PostImg1 from '../images/blog/blog-post-1.jpg';
import PostImg2 from '../images/blog/blog-post-2.jpg';
import PostImg3 from '../images/blog/blog-post-3.jpg';
import PostImg4 from '../images/blog/blog-post-4.jpg';
import PostImg5 from '../images/blog/blog-post-5.jpg';
import PostImg6 from '../images/blog/blog-post-6.jpg';

const postsData = [
    { id: 1, img: PostImg1, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
    { id: 2, img: PostImg2, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
    { id: 3, img: PostImg3, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
    { id: 4, img: PostImg4, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
    { id: 5, img: PostImg5, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
    { id: 6, img: PostImg6, title: "Koudetat à la Maison #1 (L'intégrale)", desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: "10 comments" },
];

const Blog = () => {
    return (
        <div className="font-montserrat">
            {/* Header Section */}
            <div className="py-12 bg-white text-center">
                <div className="text-center flex flex-col items-center gap-4 mb-20">
                    <h2 className="text-[#252B42] text-6xl font-bold tracking-tight">Featured Posts</h2>
                    <p className="text-[#737373] max-w-md text-lg">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="flex justify-center items-center gap-4 text-sm font-bold text-[#737373]">
                    <span className="text-[#252B42]">Home</span>
                    <ChevronRight size={16} />
                    <span>Blog</span>
                </div>
            </div>

            {/* Blog Posts Grid section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-12 lg:px-12">
                    {/* Post Kartları */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {postsData.map((p) => (
                            <div key={p.id} className="flex flex-col bg-white shadow-sm border border-[#eee] overflow-hidden">

                                {/* Resim ve Kırmızı Etiket */}
                                <div className="relative h-[300px] w-full">
                                    <img src={p.img} alt="Blog" className="w-full h-full object-cover" />
                                    <span className="absolute top-5 left-5 bg-[#E74040] text-white px-3 py-1 rounded-sm text-xs font-bold uppercase">
                                        NEW
                                    </span>
                                </div>

                                {/* İçerik */}
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex gap-4 text-xs text-[#737373]">
                                        <span className="text-[#8EC2F2]">Google</span>
                                        <span>Trending</span>
                                        <span>New</span>
                                    </div>
                                    <h4 className="text-xl text-[#252B42] font-semibold leading-snug">
                                        {p.title}
                                    </h4>
                                    <p className="text-[#737373] text-sm leading-relaxed">
                                        {p.desc}
                                    </p>

                                    {/* Meta Bilgiler */}
                                    <div className="flex justify-between items-center py-4 text-xs font-bold text-[#737373]">
                                        <div className="flex items-center gap-2">

                                            <AlarmClock className="text-[#23A6F0]" size={16} />
                                            <span className="font-normal text-[#737373]">{p.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">

                                            <ChartArea className="text-[#23856D]" size={16} />
                                            <span className="font-normal text-[#737373]">{p.comments}</span>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors mt-2 w-fit">
                                        Learn More <span className="text-[#23A6F0] text-xl font-normal">›</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
