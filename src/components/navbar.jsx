import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'home' || sectionId === 'about' || sectionId === 'skills' || sectionId === 'contact') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        }, 150);
      } else {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else if (sectionId === 'projects') {
      navigate('/projects');
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Text */}
        <div 
          onClick={() => handleNavClick('home')}
          className="text-lg md:text-xl font-bold cursor-pointer tracking-tight"
        >
          <span className="text-white">Liza </span>
          <span className="text-indigo-500">Mehani</span>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs md:text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('home')} 
            className="hover:text-indigo-400 transition cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="hover:text-indigo-400 transition cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavClick('skills')} 
            className="hover:text-indigo-400 transition cursor-pointer"
          >
            Skills
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="hover:text-indigo-400 transition cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right Side "Hire Me" Button */}
        <div>
          <button 
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs md:text-sm transition shadow-md shadow-indigo-600/20 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

      </div>
    </nav>
  );
}