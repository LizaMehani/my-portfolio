import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Clean Somil Style Image Card */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative p-6 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-md">
              
              {/* Open to Work Badge */}
              <div className="absolute top-5 left-6 z-20 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-200">Open to Work</span>
              </div>

              {/* Profile Image Box */}
              <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden border border-indigo-500/30 bg-slate-900 shadow-xl">
                <img 
                  src="/profile picture.png" 
                  alt="Liza Mehani" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-4 right-6 z-20 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-xl border border-indigo-400/30 text-xs font-bold tracking-wider flex items-center gap-1.5">
                <span>⭐</span> 100% Dedicated
              </div>

            </div>
          </div>

          {/* Right Side: Content Details */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div>
              <div className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-indigo-400 text-xs font-semibold mb-4 tracking-wide uppercase">
                About Me
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                Liza Mehani
              </h2>
              <h3 className="text-xl font-bold text-indigo-400">
                Frontend Developer
              </h3>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            "Hi, I'm Liza Mehani, a passionate Frontend Developer. I build modern, responsive, and user-friendly web interfaces that help businesses and ideas shine online. I specialize in React.js and Tailwind CSS to deliver clean, fast, and visually appealing digital experiences. Whether you need a brand-new website or want to polish an existing UI, I'm ready to craft a pixel-perfect product for you. Let's build something amazing together!"
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center hover:border-indigo-500/50 transition">
                <div className="text-2xl md:text-3xl font-extrabold text-indigo-400 mb-1">100%</div>
                <div className="text-xs text-slate-400 font-medium">Dedicated & Focused</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center hover:border-indigo-500/50 transition">
                <div className="text-xl md:text-2xl font-extrabold text-indigo-400 mb-1 flex items-center justify-center gap-1">
                  &lt;/&gt;
                </div>
                <div className="text-xs text-slate-400 font-medium">React Dev</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => { navigate('/projects'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs md:text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer"
              >
                View Skills ➜
              </button>

              <a 
                href="#contact"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-xs md:text-sm rounded-xl transition cursor-pointer"
              >
                Contact Me
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}