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
        <div>Header</div>
    )
}

export default Header