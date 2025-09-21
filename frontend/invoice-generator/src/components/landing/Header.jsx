import React, { use } from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FileText, Menu, Wind, X} from "lucide-react"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = false; // Replace with actual authentication logic
    const user = { name: "John Doe", email:"john@gmail.com" }; // Replace with actual user data
    const logout = () => {}; // Replace with actual logout function

    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);    
        return () => Winddow.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-100 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/0'} `}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 lg:h-20'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 flex items-center justify-center rounded-md bg-blue-900'>
                            <FileText className='h-8 w-8 text-blue-600'/>
                        </div>
                        <span className=''>
                            AI Invoice Generator
                        </span>
                    </div>
                    <div className="">
                        <a href="#features" className="">Features</a>
                        <a href="#testimonial" className="">Testimonials</a>
                        <a href="#faq" className="">FAQ</a>
                        <div className="">
                            <Link to="/login" className="">Login</Link>
                            <Link to="/signup" className="">Sign Up</Link>
                        </div>
                        <div className="">
                            <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className=''>
                                {isMenuOpen ? <X className='h-6 w-6'/> : <Menu className='h-6 w-6'/>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header