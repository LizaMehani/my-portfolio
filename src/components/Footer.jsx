import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (sectionId === 'home' || sectionId === 'skills' || sectionId === 'contact') {
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
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (sectionId === 'projects') {
      navigate('/projects');
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
        
        {/* Left: Logo & Description */}
        <div className="md:col-span-6 space-y-4">
          <div 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-black text-white cursor-pointer tracking-wide flex items-center gap-2"
          >
            <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-md font-mono">LM</span>
            Liza<span className="text-indigo-500">.</span>
          </div>
          <p className="text-xs md:text-sm text-slate-400 max-w-sm leading-relaxed">
            Frontend Developer passionate about building clean, functional, and scalable web applications.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide">Quick Links</h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-indigo-400 transition cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('projects')} className="hover:text-indigo-400 transition cursor-pointer">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('skills')} className="hover:text-indigo-400 transition cursor-pointer">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="hover:text-indigo-400 transition cursor-pointer">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Right: Connect */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide">Connect</h4>
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/LizaMehani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/liza-mehani-249544447/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href="mailto:leezakumari2712@gmail.com" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Built With */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 Liza Mehani. All rights reserved.</div>
        <div>Built with React.js & Tailwind CSS.</div>
      </div>
    </footer>
  );
}