"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <header className="bg-[#0B2238] bg-opacity-50 text-white p-4 w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                    <div className="flex items-center space-x-2">
                        <Link href='/'><Image src="/images/logo.png" alt="Logo" width={120} height={70} /></Link>
                    </div>
                </div>
                <a href="/contact" className="md:hidden py-1 text-white border border-orange-600 bg-orange-600 hover:border-white rounded-full px-4 hover:bg-white hover:text-orange-600 transition ml-auto" onClick={handleLinkClick}>
                    Contact Us
                </a>
                <nav className={`fixed top-0 right-0 md:bg-[#0B2238] bg-orange-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:transform-none overflow-hidden rounded-bl-lg`}>
                    <div className="flex flex-col space-y-4 space-x-4 p-4 md:flex-row md:space-y-0 md:shadow-none shadow-xl">
                        <Link href="/about" className="md:text-gray-400 text-white hover:text-orange-400" onClick={handleLinkClick}>About Us</Link>
                        <Link href="/services" className="md:text-gray-400 text-white hover:text-orange-400" onClick={handleLinkClick}>Services</Link>
                        <Link href="/blog" className="md:text-gray-400 text-white hover:text-orange-400" onClick={handleLinkClick}>Blog</Link>
                        <Link href="/contact" className="text-white border border-white hover:border-orange-600 rounded-full px-4 hover:bg-orange-600 transition" onClick={handleLinkClick}>
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;