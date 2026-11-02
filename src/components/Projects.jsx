import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      id: 'ZestyBites – Gourmet Dining & Restaurant Experience Web Application',
      title: 'ZestyBites – Gourmet Dining & Restaurant Experience Web Application',
      description: 'A modern React & Tailwind CSS gourmet restaurant web app with table reservations and interactive menus.   ',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5' , 'Javascript'],
      image: '/zestybites.png',
    },
    {
      id: 'Aura – Premium Audio & Smart Devices E-Commerce Landing Page',
      title: 'Aura – Premium Audio & Smart Devices E-Commerce Landing Page',
      description: 'A modern audio and smart wearable e-commerce landing page built with React and Tailwind CSS.',
      tags:['React.js', 'Tailwind CSS', 'Vite', 'HTML5' , 'Javascript'],
      image: '/e-commerce.png',
    },
    {
      id: 'PrimeScale – Business Advisory & Corporate Solutions Web Application',
      title: 'PrimeScale – Business Advisory & Corporate Solutions Web Application   ',
      description: 'A modern business advisory and corporate solutions landing page built with React and Tailwind.',
      tags:['React.js', 'Tailwind CSS', 'Vite', 'HTML5' , 'Javascript'],
      image: '/bussiness web.png',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-down">
          <div>
            <div className="inline-block px-5 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-indigo-400 text-xs font-semibold mb-4 tracking-wide shadow-inner">
              My Work
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              <span className="text-white">Featured </span>
              <span className="text-indigo-500">Projects</span>
            </h2>
          </div>

          <button 
            onClick={() => { navigate('/projects'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs md:text-sm font-semibold rounded-xl transition flex items-center gap-2 cursor-pointer self-start md:self-auto shadow-md"
          >
            View All Projects →
          </button>
        </div>

        {/* Projects Cards Grid with Thumbnail Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => { navigate(`/project/${project.id}`); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
              className="bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Project Thumbnail Image */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" 
                  />
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
    </section>
  );
}