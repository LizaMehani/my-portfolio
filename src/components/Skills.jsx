import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skillsData = [
    { name: 'React.js', category: 'Frontend', initials: 'RE', proficiency: '95%' },
    { name: 'JavaScript', category: 'Frontend', initials: 'JA', proficiency: '90%' },
    { name: 'Tailwind CSS', category: 'Frontend', initials: 'TA', proficiency: '95%' },
    { name: 'HTML5', category: 'Frontend', initials: 'HT', proficiency: '100%' },
    { name: 'CSS3', category: 'Frontend', initials: 'CS', proficiency: '98%' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Exact Somil Style Header */}
        <div data-aos="fade-down" className="mb-14">
          <div className="inline-block px-5 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-indigo-400 text-xs font-semibold mb-4 tracking-wide shadow-inner">
            Technical Skills
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">My </span>
            <span className="text-indigo-500">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto font-normal">
            Technologies I work with to build world-class web applications
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-xl shadow-lg hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Solid Purple/Violet Badge */}
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {skill.initials}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{skill.category}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-0.5">{skill.name}</h3>
                <p className="text-[11px] text-slate-400 mb-4">{skill.category} Development</p>
              </div>

              {/* Progress Bar & Percentage */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-indigo-400">{skill.proficiency}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}