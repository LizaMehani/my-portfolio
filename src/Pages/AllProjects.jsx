import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | Liza Mehani";
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      id: 'ZestyBites – Gourmet Dining & Restaurant Experience Web Application',
      title: 'ZestyBites – Gourmet Dining & Restaurant Experience Web Application',
      description: 'A modern React & Tailwind CSS gourmet restaurant web app with table reservations and interactive menus.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript' ],
      image: '/zestybites.png'
    },
    {
      id: 'Aura – Premium Audio & Smart Devices E-Commerce Landing Page',
      title: 'Aura – Premium Audio & Smart Devices E-Commerce Landing Page',
      description: 'A modern audio and smart wearable e-commerce landing page built with React and Tailwind CSS.',
      tags: [ 'React.js', 'Tailwind CSS' ,'Vite', 'HTML5' ,'Javascript'],
      image: '/e-commerce.png',
    },
    {
      id: 'PrimeScale',
      title: 'PrimeScale – Business Advisory & Corporate Solutions Web Application   ',
      description: 'A modern business advisory and corporate solutions landing page built with React and Tailwind CSS.',
      tags: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5' , 'Javascript'],
      image: '/bussiness web.png'
    },
    {
      id:'Aura X1',
      title: 'Aura X1 – Premium Wireless Headphones Product Landing Page',
      description: 'A high-end, immersive product showcase landing page for next-generation wireless audio gear built with React and Tailwind CSS.',
      tags: ['React.js', 'Tailwind CSS', 'Vite' , 'HTML5' , 'JavaScript'],
      image: '/Aura X1.png',
    },
    {
      id: 'Nexora-Agency',
      title: 'Nexora – Digital Agency & Creative Studio Landing Page',
      description: 'A modern, high-performance digital agency landing page built with React and Tailwind CSS to showcase web development, UI/UX design, and corporate solutions.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'JavaScript'],
      image: '/Nexora.png',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4" data-aos="fade-down">
          <div>
            <div className="inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-indigo-400 text-xs font-semibold mb-3">
              Portfolio Showcase
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              My Projects
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Real-world projects built from concept to production — frontend, UI/UX, and web apps
            </p>
          </div>

          <button 
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
            className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => { navigate(`/project/${project.id}`); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/65 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer group relative"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{project.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[11px] font-semibold bg-slate-950 text-indigo-300 border border-slate-800 px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}