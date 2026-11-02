import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Project details data matched exactly with AllProjects.jsx IDs
  const projectsData = {
    'ZestyBites – Gourmet Dining & Restaurant Experience Web Application': {
      title: 'ZestyBites – Gourmet Dining & Restaurant Experience Web Application',
      description: 'ZestyBites is a modern, high-performance, and fully responsive frontend web application designed for luxury dining and gourmet food lovers. This application includes an interactive table reservation modal, custom dining seating environment selectors, artisanal menu filtering (burgers, pizzas, BBQ, salads, sushi, desserts), gourmet chef specials, customer reviews, and dynamic footer sections. It is built using React.js and Tailwind CSS with a pixel-perfect and smooth user experience.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript'],
      images: [
        '/Screenshot 2026-10-22 230913.png',
        '/Screenshot 2026-10-22 231339.png',
        '/Screenshot 2026-10-22 230913.png',
        '/Screenshot 2026-10-22 231429.png',
        '/Screenshot 2026-10-22 231459.png',
        '/Screenshot 2026-10-31 204956.png',
        '/Screenshot 2026-10-31 205107.png',
        '/Screenshot 2026-10-31 205227.png',
        '/Screenshot 2026-10-31 205042.png',
      ]
    },
    'Aura – Premium Audio & Smart Devices E-Commerce Landing Page': {
      title: 'Aura X1 – Premium Audio & Smart Devices E-Commerce Landing Page',
      description: 'Aura X1 is a modern, feature-rich web application engineered to showcase luxury wireless audio gear and smart wearables. The interactive user interface features dynamic color theme switchers (Cyan Pulse, Emerald, Solar, Ruby), real-time device specifications grids (Adaptive ANC, Lossless Audio, Latency indicators), immersive product showcases, customer review sections with verified buyer ratings, and FAQ accordions. Built with an exquisite dark-mode aesthetic, smooth animations, and responsive layout structure, it demonstrates advanced frontend development skills for modern e-commerce web experiences.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript'],
      images: [
        '/Screenshot 2026-10-31 212648.png',
        '/Screenshot 2026-10-31 212733.png',
        '/Screenshot 2026-10-31 212808.png',
        '/Screenshot 2026-10-31 212827.png',
        '/Screenshot 2026-10-31 212901.png',
        '/Screenshot 2026-10-31 212927.png',
        '/Screenshot 2026-10-31 213003.png',
      ]
    },
    'PrimeScale': {
      title: 'PrimeScale – Business Advisory & Corporate Solutions Web Application',
      description: 'PrimeScale is a high-performance, professional corporate web application designed for business consulting, advisory firms, and strategic growth scaling. The interface features dynamic growth performance analytics graphs, global client statistics counters, core expertise grid cards (Strategic Growth, Financial Advisory, Risk Management, Digital Transformation), tiered corporate engagement pricing plans with monthly/yearly discounts, and an interactive consultation request form. Built with a clean dark-mode aesthetic and smooth responsiveness, it highlights advanced frontend design for business websites.',
      tags:  ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript'],
      images: [
        '/Screenshot 2026-11-01 094008.png',
        '/Screenshot 2026-11-01 094030.png',
        '/Screenshot 2026-11-01 094050.png',
        '/Screenshot 2026-11-01 094114.png',
        '/Screenshot 2026-11-01 094131.png',
        '/Screenshot 2026-11-01 094148.png',
        '/Screenshot 2026-11-01 094205.png',
        '/Screenshot 2026-11-01 094217.png',
      ]
    },
    'Aura X1': {
      title: 'Aura X1 – Premium Wireless Headphones Product Landing Page',
      description: 'Aura X1 is a sleek, modern, high-performance product landing page and interactive showcase web application engineered for premium wireless headphones. Rather than a standard e-commerce store, it functions as an immersive marketing experience featuring dynamic color theme switchers (Cyan Pulse, Emerald, Solar, Ruby), real-time technical specifications grids (Adaptive ANC, Lossless Audio, Latency indicators), interactive product previews, verified customer review sections, and FAQ accordions. Built with an exquisite dark-mode aesthetic, fluid animations, and a fully responsive layout, it highlights advanced frontend development skills for modern product branding and web showcases.',
      tags:  ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript'],
      images: [
        '/Screenshot 2026-10-20 110607.png',
        '/Screenshot 2026-10-20 110629.png',
        '/Screenshot 2026-10-20 110646.png',
        '/Screenshot 2026-10-20 110702.png',
        '/Screenshot 2026-10-20 110714.png',
        '/Screenshot 2026-10-20 110731.png',
        '/Screenshot 2026-10-20 110819.png',
        '/Screenshot 2026-10-20 110911.png',
      ]
    },
    'Nexora-Agency': {
      title: 'Nexora – Digital Agency & Creative Studio Landing Page',
      description: 'Nexora is a sleek, feature-rich digital agency and creative studio web application engineered to highlight end-to-end digital capabilities, including high-converting web development, UI/UX design, app development, SEO optimization, and strategic brand solutions. The interactive user interface features dynamic service cards, case study filters for web apps, mobile solutions, and e-commerce platforms, client testimonials from global founders, and a fully functional project inquiry and budget estimator form. Built with an exquisite dark-mode aesthetic, smooth scrolling animations, and a fully responsive layout, it demonstrates advanced frontend development skills and professional agency branding capabilities.',
      tags:  ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'Javascript'],
      images: [
        '/Screenshot 2026-10-22 163711.png',
        '/Screenshot 2026-10-22 163744.png',
        '/Screenshot 2026-10-22 163813.png',
        '/Screenshot 2026-10-22 163845.png',
        '/Screenshot 2026-10-22 163918.png',
      ]
    }
  };

  const currentProject = projectsData[id] || projectsData['ZestyBites – Gourmet Dining & Restaurant Experience Web Application'];

  useEffect(() => {
    document.title = `${currentProject.title} | Liza Mehani`;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setActiveImageIndex(0);
    AOS.init({ duration: 800, once: true });
  }, [id, currentProject.title]);

  const images = currentProject.images;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => { navigate('/projects'); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
          className="mb-8 text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
        >
          ← Back to Projects
        </button>

        <div className="mb-10" data-aos="fade-down">
          <div className="inline-block px-4 py-1 bg-slate-900 border border-slate-800 rounded-full text-indigo-400 text-xs font-semibold mb-3">
            Featured
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {currentProject.title}
          </h1>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            {currentProject.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            <h3 className="text-xl font-bold text-white">Project Images</h3>
            
            {/* Main Preview Box */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 h-96 shadow-2xl">
              <img 
                src={images[activeImageIndex]} 
                alt="Active preview" 
                className="w-full h-full object-cover transition duration-300" 
              />
            </div>

            {/* Thumbnail Gallery of 10 Pictures */}
            <div className="grid grid-cols-5 gap-3">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveImageIndex(idx)}
                  className={`rounded-xl overflow-hidden border h-20 bg-slate-900 cursor-pointer transition ${
                    activeImageIndex === idx ? 'border-indigo-500 scale-105 shadow-md shadow-indigo-500/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-semibold bg-slate-950 text-indigo-300 border border-slate-800 px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}