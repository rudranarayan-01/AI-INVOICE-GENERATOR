import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Menu, X } from "lucide-react";
import ProfileDropDown from '../layout/ProfileDropDown';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const isAuthenticated = true;
    const user = { name: "John Doe", email: "john@gmail.com" };
    const logout = () => { }; // Replace with actual logout function

    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".profile-dropdown")) {
                setProfileDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/0'} `}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 lg:h-20'>

                    {/* Logo */}
                    <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 flex items-center justify-center rounded-md bg-blue-900'>
                            <FileText className='h-8 w-8 text-white' />
                        </div>
                        <span className='text-xl font-bold text-gray-900'>
                            AI Invoice Generator
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full">Features</a>
                        <a href="#testimonial" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full">Testimonials</a>
                        <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full">FAQ</a>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4 profile-dropdown relative">
                            {isAuthenticated ? (
                                <ProfileDropDown
                                    isOpen={profileDropdownOpen}
                                    onToggle={(e) => { e.stopPropagation(); setProfileDropdownOpen(!profileDropdownOpen) }}
                                    avatar={user?.avatar || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
                                    companyName={user?.name || "User"}
                                    email={user?.email || ""}
                                    onLogout={logout}
                                />
                            ) : (
                                <>
                                    <Link to="/login" className="text-black hover:text-gray-900 font-medium transition-colors duration-200">Login</Link>
                                    <Link to="/signup" className="text-center bg-gradient-to-r from-blue-950 to-blue-800 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200'
                        >
                            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        <a href="#features" className="block text-gray-700 hover:text-gray-900">Features</a>
                        <a href="#testimonial" className="block text-gray-700 hover:text-gray-900">Testimonials</a>
                        <a href="#faq" className="block text-gray-700 hover:text-gray-900">FAQ</a>
                        {/* Mobile Navigation Auth conditions  */}
                        <div className="border-t border-gray-200 my-2"></div>

                        {isAuthenticated ? (
                            <div className='p-4'>
                                <Button onClick={() => navigate('/dashboard')} className='w-full' variant='dark' >
                                    Go to Dashboard
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="block text-gray-700 hover:text-gray-900">Login</Link>
                                <Link to="/signup" className="block bg-gradient-to-r from-blue-950 to-blue-800 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-200">Sign Up</Link>
                            </>)}



                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
