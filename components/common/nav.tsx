'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '/css/menuButton.css';

const MobileMenuLinks = () => (
    <>
        <Link
            href="/"
            className="block text-xl text-white py-2 px-4 hover:overline"
        >
            Home
        </Link>
        <Link
            href="/about"
            className="block text-xl text-white py-2 px-4 hover:overline"
        >
            About
        </Link>
        <Link
            href="/profile"
            className="block text-xl text-white py-2 px-4 hover:overline"
        >
            Profile
        </Link>
        <Link
            href="/login"
            className="block text-xl text-white py-2 px-4 hover:overline"
        >
            Login
        </Link>
        <Link
            href="/register"
            className="block text-xl text-white py-2 px-4 hover:overline "
        >
            Register
        </Link>
    </>
);

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-indigo-900 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="font-bold">
                        <Link href="/" className="block max-w-fit">
                            <div
                                style={{
                                    fontSize: '24px',
                                    background:
                                        '-webkit-gradient(linear, left top, left bottom, from(#DDFDFE), to(#52489C))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block',
                                }}
                            >
                                ContactSphere
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <MobileMenuLinks />
                </div>
                <div className="md:hidden">
                    <button
                        className={`text-white focus:outline-none hamburger ${
                            isOpen ? 'open' : ''
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden py-2 text-center">
                    <MobileMenuLinks />
                </div>
            )}
        </nav>
    );
};

export default Nav;
