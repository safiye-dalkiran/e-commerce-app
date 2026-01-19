import image1 from "./images/shopcard/women-image1.jpg"
import image2 from "./images/shopcard/women-image2.jpg"
import image3 from "./images/shopcard/women-image3.jpg"
import image4 from "./images/shopcard/women-image4.jpg"
import image5 from "./images/shopcard/man-image1.jpg"
import image6 from "./images/shopcard/man-image2.jpg"
import image7 from "./images/shopcard/man-image3.jpg"
import image8 from "./images/shopcard/man-image4.jpg"

import foto1 from "./images/team/foto1.jpg"
import foto2 from "./images/team/foto2.jpg"
import profile from "./images/team/profile.jpeg"
import foto3 from "./images/team/foto3.jpg"
import foto4 from "./images/team/foto4.jpg"
import foto5 from "./images/team/foto5.jpg"
import foto6 from "./images/team/foto6.jpg"
import foto7 from "./images/team/foto7.jpg"
import foto8 from "./images/team/foto8.jpg"

import görsel1 from "./images/team/görsel1.jpg"
import görsel2 from "./images/team/görsel2.jpg"
import görsel3 from "./images/team/görsel3.jpg"
import görsel4 from "./images/team/görsel4.jpg"
import görsel5 from "./images/team/görsel5.jpg"




const data = {

  // 1. Kategoriler (Dropdown için)
  teamGallery: [görsel1, görsel2, görsel3, görsel4, görsel5],
  shopCategories: {
    kadin: [
      { id: "k1", name: "Bags", path: "/shop/kadin-bags" },
      { id: "k2", name: "Belts", path: "/shop/kadin-belts" },
      { id: "k3", name: "Cosmetics", path: "/shop/kadin-cosmetics" },
      { id: "k4", name: "Hats", path: "/shop/kadin-hats" }
    ],
    erkek: [
      { id: "e1", name: "Bags", path: "/shop/erkek-bags" },
      { id: "e2", name: "Belts", path: "/shop/erkek-belts" },
      { id: "e3", name: "Cosmetics", path: "/shop/erkek-cosmetics" },
      { id: "e4", name: "Hats", path: "/shop/erkek-hats" }
    ]
  },

  // 2. Ürünler (Görseldeki fiyat ve isimlere göre)
  productSection: [
    {
      id: 1,
      name: "Floral Summer Dress",
      category: "Women Fashion",
      oldPrice: 60,
      price: 45.99,
      colors: ["#23A6F0", "#E77C40", "#252B42"],
      image: image1,
      availability: "In Stock",
      stars: 4,
      reviews: 15,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image1, image1],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 2,
      name: "Classic White Blouse",
      category: "Women Fashion",
      oldPrice: 35,
      price: 29.99,
      colors: ["#FFFFFF", "#BDBDBD"],
      image: image2,
      availability: "In Stock",
      stars: 5,
      reviews: 10,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image2, image2],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 3,
      name: "High-Waist Blue Jeans",
      category: "Women Fashion",
      oldPrice: 75,
      price: 55,
      colors: ["#23A6F0", "#252B42"],
      image: image3,
      availability: "In Stock",
      stars: 4,
      reviews: 8,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image3, image3],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 4,
      name: "Pastel Pink Cardigan",
      category: "Women Fashion",
      oldPrice: 50,
      price: 39,
      colors: ["#E77C40", "#BDBDBD"],
      image: image4,
      availability: "In Stock",
      stars: 4,
      reviews: 12,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image4, image4],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 5,
      name: "Oxford Button-Down Shirt",
      category: "Men Fashion",
      oldPrice: 65,
      price: 49.99,
      colors: ["#252B42", "#FFFFFF", "#23A6F0"],
      image: image5,
      availability: "In Stock",
      stars: 5,
      reviews: 20,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image5, image5],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 6,
      name: "Slim Fit Chino Pants",
      category: "Men Fashion",
      oldPrice: 80,
      price: 59,
      colors: ["#23856D", "#252B42", "#BDBDBD"],
      image: image6,
      availability: "In Stock",
      stars: 4,
      reviews: 14,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image6, image6],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 7,
      name: "Denim Jacket Classic",
      category: "Men Fashion",
      oldPrice: 110,
      price: 89,
      colors: ["#23A6F0", "#252B42"],
      image: image7,
      availability: "In Stock",
      stars: 5,
      reviews: 18,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image7, image7],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    },
    {
      id: 8,
      name: "Casual Crewneck Sweater",
      category: "Men Fashion",
      oldPrice: 45,
      price: 35,
      colors: ["#BDBDBD", "#252B42", "#23856D"],
      image: image8,
      availability: "In Stock",
      stars: 4,
      reviews: 9,
      description: "Met minim mollie non desert Alamo est sit cliquey dolor do met sent.",
      thumbnails: [image8, image8],
      specifications: ["the quick fox jumps over", "the quick fox jumps over"]
    }
  ],
  contactOffices: [
    {
      id: 1,
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      id: 2,
      city: "Berlin",
      address: "4140 Parker Rd.",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      id: 3,
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      id: 4,
      city: "London",
      address: "3517 W. Gray St. Utica,",
      zip: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    }
  ],
  teamMembers: [
    {
      id: 1,
      name: "Safiye Dalkıran",
      role: "Full Stack Developer",
      image: profile,
      company: "Bandage",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Robert Fox",
      role: "Garfunkel",
      image: foto4,
      company: "Bandage",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },

    {
      id: 3,
      name: "Leslie Alexander",
      role: "IBM",
      image: foto1,
      company: "Google",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Jerome Bell",
      role: "IBM",
      image: foto2,
      company: "IBM",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      role: "eBay",
      image: foto5,
      company: "eBay",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 6,
      name: "Ronald Richards",
      role: "Garfunkel",
      image: foto7,
      company: "Garfunkel",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 7,
      name: "Floyd Miles",
      role: "Facebook",
      image: foto3,
      company: "Facebook",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 8,
      name: "Jane Cooper",
      role: "Mitsubishi",
      image: foto8,
      company: "Mitsubishi",
      socials: { facebook: "#", instagram: "#", twitter: "#" }
    }
  ]
};
// data.js dosyanın sonuna ekle
export const pricingPlans = [
  {
    id: 1,
    title: "FREE",
    description: "Organize across all apps by hand",
    price: "0",
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: false },
      { text: "Email and community support", included: false },
    ],
    buttonText: "Try for free",
    isPopular: false
  },
  {
    id: 2,
    title: "STANDARD",
    description: "Organize across all apps by hand",
    price: "9.99",
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: true },
      { text: "Email and community support", included: false },
    ],
    buttonText: "Try for free",
    isPopular: true
  },
  {
    id: 3,
    title: "PREMIUM",
    description: "Organize across all apps by hand",
    price: "19.99",
    features: [
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "Unlimited product updates", included: true },
      { text: "1GB Cloud storage", included: true },
      { text: "Email and community support", included: true },
    ],
    buttonText: "Try for free",
    isPopular: false
  }
];

export const pricingFAQs = [
  { id: 1, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
  { id: 2, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
  { id: 3, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
  { id: 4, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
  { id: 5, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
  { id: 6, q: "the quick fox jumps over the lazy dog", a: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie." },
];
// data.js içine ekle veya güncelle
export const aboutVideo = {
  title: "Designing Better Experience",
  description: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1440&auto=format&fit=crop", // Tasarımdaki pembe tonlu benzer görsel
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

export default data;