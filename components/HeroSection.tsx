
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// components/HeroSection.tsx

interface HeroProps {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  image?: string; // Nova prop opcional
}

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, bullets, ctaText, image }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 transition-colors duration-300">
      {/* Background Ornaments ... */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100 transition-opacity">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${image ? 'lg:flex-row' : 'items-center'} gap-12`}>
          
          {/* Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${image ? 'lg:w-1/2 text-left' : 'text-center'}`}
          >
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 border border-slate-200 dark:border-slate-700">
              <ShieldCheck size={16} /> Laboratório de Inovação & Desenvolvimento
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
              {title.includes(':') ? title.split(':')[0] : title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-500">
                {title.includes(':') ? title.split(':')[1] : 'Labs'}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12">
              {subtitle}
            </p>

            <div className={`flex flex-wrap ${image ? '' : 'justify-center'} gap-4 mb-12`}>
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold bg-white dark:bg-slate-900/50 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <ChevronRight className="text-emerald-500" size={18} />
                  {bullet}
                </div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row items-center ${image ? '' : 'justify-center'} gap-6`}>
              <Link to="/contato" className="group bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-10 py-5 rounded-full font-black transition-all flex items-center gap-2 shadow-2xl shadow-emerald-900/30">
                {ctaText} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Imagem de Desenvolvimento */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                <img src={image} alt="Coding development" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent"></div>
              </div>
              
              {/* Elemento flutuante de código para reforçar o tema */}
              
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
