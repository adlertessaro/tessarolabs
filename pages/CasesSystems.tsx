import React from 'react';
import HeroSection from '../components/HeroSection';
import CTAForm from '../components/CTAForm';
import { SYSTEM_DETAILS_CASES } from '../constants';
import * as Icons from 'lucide-react';

const CasesSystems: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <HeroSection 
        title="Nossos Cases: Sistemas Customizados"
        subtitle="Soluções de engenharia sob medida para os desafios mais complexos do seu negócio."
        bullets={["HelpDesk", "Monitoramento", "APIs"]}
        ctaText="Iniciar meu projeto"
      />

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_DETAILS_CASES.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Code;
            return (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <Icons.Check size={12} /> {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <CTAForm />
        </div>
      </section>
    </div>
  );
};

export default CasesSystems;