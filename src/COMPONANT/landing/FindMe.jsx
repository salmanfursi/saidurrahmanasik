import React from 'react';

const FindMe = () => {
    const socialMedias = [
        { name: 'Facebook', image: 'https://i.ibb.co/tYwb8nc/fb.png', link: 'https://facebook.com' },
        { name: 'Twitter', image: 'https://i.ibb.co/c1GXd7M/instagram-6338393-1280.webp', link: 'https://twitter.com' },
        { name: 'Instagram', image: 'https://i.ibb.co/jJM6R05/linkedin.png', link: 'https://instagram.com' },
        { name: 'LinkedIn', image: 'https://i.ibb.co/bJmk3Jx/tiktok-7002882-1280.webp', link: 'https://linkedin.com' },
    ];

    return (
        <div className="container mx-auto px-4 py-8 h-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center py-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-5xl md:text-6xl lg:text-7xl">
                    Find Me On Socials
                </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {socialMedias.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative border">
                            <img
                                src={social.image}
                                alt={social.name}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-semibold text-lg">{`Visit ${social.name}`}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FindMe;
