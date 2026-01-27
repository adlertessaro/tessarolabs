
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
}

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, bullets, ctaText }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100 transition-opacity">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold bg-white dark:bg-slate-900/50 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <ChevronRight className="text-emerald-500" size={18} />
                {bullet}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contato"
              className="group bg-emerald-600 hover:bg-emerald-500 text-white text-lg px-10 py-5 rounded-full font-black transition-all flex items-center gap-2 shadow-2xl shadow-emerald-900/30"
            >
              {ctaText}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="text-left">
               <p className="text-xs text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">Compromisso Tessaro</p>
               <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">Pague após a entrega da 1ª versão.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
