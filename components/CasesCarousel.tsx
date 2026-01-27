
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CASES } from '../constants.tsx';

const CasesCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % CASES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + CASES.length) % CASES.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={CASES[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
              <img 
                src={CASES[current].image} 
                alt={CASES[current].title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">Metrics that matter</span>
              <h3 className="text-3xl font-bold text-white mb-4">{CASES[current].title}</h3>
              <p className="text-slate-400 mb-8 text-lg">{CASES[current].description}</p>
              <div className="text-5xl font-black text-white mb-2">
                {CASES[current].metric}
              </div>
              <p className="text-slate-500 font-medium">Melhoria comprovada pelo cliente.</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <button 
          onClick={prev}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700"
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {CASES.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-700'}`}
            />
          ))}
        </div>
        <button 
          onClick={next}
          className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CasesCarousel;
