import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const navigate = useNavigate();
  
  const roles = [
   "Frontend Developer",
   "UI/UX Enthusiast",
   "Creative Coder",
   "Web Designer",
   "Problem Solver",
   "UI Specialist",
   "React.js Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [step, setStep] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const roleInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);

    const timers = [
      setTimeout(() => setStep(1), 200),   // const developer = {
      setTimeout(() => setStep(2), 500),   // name: "Liza Mehani",
      setTimeout(() => setStep(3), 800),   // role: "Frontend Dev",
      setTimeout(() => setStep(4), 1100),  // skills: [React, Tailwind.css,
      setTimeout(() => setStep(5), 1400),  // JavaScript, Node.js],
      setTimeout(() => setStep(6), 1700),  // status: "Open to Work",
      setTimeout(() => setStep(7), 2000),  // passion: ∞
      setTimeout(() => setStep(8), 2300)   // }; (Completion - cursor disappears)
    ];

    return () => {
      clearInterval(roleInterval);
      timers.forEach(t => clearTimeout(t));
    };
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden font-sans">
      {/* Background Grid & Glowing Lighting Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      {/* Soft Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content Side */}
        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border border-slate-800 rounded-full text-xs font-medium shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-300">Available for Work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
            <span className="text-white">Hi, I'm </span>
            <span className="text-indigo-500">Liza</span>
          </h1>

          <div className="h-10 flex items-center overflow-hidden">
            <h2 className={`text-xl sm:text-2xl font-bold text-indigo-400 transition-all duration-300 transform ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              {roles[currentRoleIndex]}
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
          I craft clean, responsive, and visually stunning web interfaces — transforming complex designs into smooth, modern user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => { navigate('/projects'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
              className="px-6.5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer text-sm"
            >
              View My Work ➜
            </button>
            <a 
              href="#contact" 
              className="px-6.5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium rounded-xl transition shadow-md cursor-pointer text-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com/LizaMehani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/liza-mehani-249544447" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Code Card Side */}
        <div className="lg:col-span-5 relative my-6 lg:my-0" data-aos="fade-left">
          <div className="bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-300">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wide">liza.ts</span>
              <div className="w-10"></div>
            </div>

            <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto text-slate-200 flex flex-col space-y-1.5 tracking-wide">
              {step >= 1 && (
                <div className="flex items-center">
                  <span><span className="text-indigo-400 font-semibold">const</span> developer = &#123;</span>
                  {step === 1 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 2 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;name: <span className="text-emerald-400">"Liza Mehani"</span>,</span>
                  {step === 2 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 3 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;role: <span className="text-emerald-400">"Frontend Developer"</span>,</span>
                  {step === 3 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 4 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;skills: [<span className="text-amber-300">React</span>, <span className="text-amber-300">Tailwind.css</span>,</span>
                  {step === 4 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 5 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">JavaScript</span>, <span className="text-amber-300">Node.js</span>],</span>
                  {step === 5 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 6 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;status: <span className="text-emerald-400">"Building Projects"</span>,</span>
                  {step === 6 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 7 && (
                <div className="flex items-center">
                  <span>&nbsp;&nbsp;passion: <span className="text-pink-400 font-bold">"Building the Web"</span></span>
                  {step === 7 && <span className="inline-block w-2 h-4 bg-indigo-500 ml-2"></span>}
                </div>
              )}
              {step >= 8 && (
                <div className="flex items-center">
                  <span>&#125;;</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom-Left White Open to Work Badge */}
          <div className={`absolute -bottom-5 -left-4 bg-white text-slate-950 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 z-20 font-semibold text-xs transition-all duration-700 transform ${
            step >= 8 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to Work</span>
          </div>

        </div>

      </div>

      {/* Scroll to explore indicator with professional mouse scroll animation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 text-xs">
        <span className="tracking-wide">Scroll to explore</span>
        <div className="w-5 h-9 border-2 border-slate-700 rounded-full flex justify-center p-1 relative">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}