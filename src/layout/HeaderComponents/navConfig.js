export const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pages', path: '/pricing', hasDropdown: true },
];

export const pagesDropdownLinks = [
    { name: 'Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
];

export const shopDropdownLinks = {
    women: [
        { name: 'Bags', path: '/shop/kadin-bags' },
        { name: 'Belts', path: '/shop/kadin-belts' },
        { name: 'Cosmetics', path: '/shop/kadin-cosmetics' },
        { name: 'Hats', path: '/shop/kadin-hats' },
    ],
    men: [
        { name: 'Bags', path: '/shop/erkek-bags' },
        { name: 'Belts', path: '/shop/erkek-belts' },
        { name: 'Cosmetics', path: '/shop/erkek-cosmetics' },
        { name: 'Hats', path: '/shop/erkek-hats' },
    ]
};

export const socialLinks = [
    { icon: 'instagram', url: '#' },
    { icon: 'youtube', url: '#' },
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
];
