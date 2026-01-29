import React from 'react';
import HeroSection from '../components/HeroSection';
import CTAForm from '../components/CTAForm';
import { INTEGRATION_FEATURES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const Integration: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <HeroSection 
        title="Integração Estratégica: Gestão Financeira"
        subtitle="Automatize seu contas a pagar, receber e fluxo de caixa conectando seu ERP ao ecossistema bancário e de dados."
        bullets={["Cash Flow", "ERP Sync", "Bank API"]}
        ctaText="Agendar Consultoria Técnica"
      />

      {/* Seção do Botão de ERP Especial */}
      <section className="py-12 bg-emerald-600/5 dark:bg-emerald-500/5 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-900/20 flex items-center gap-3 mx-auto"
          >
            <Icons.Search size={20} />
            Consulte se seu ERP possui integração
          </motion.button>
        </div>
      </section>

      {/* Grid de Funcionalidades */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTEGRATION_FEATURES.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Zap;
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
          <div className="text-center mb-12">
             <h2 className="text-3xl font-black text-slate-900 dark:text-white">Pronto para automatizar seu financeiro?</h2>
             <p className="text-slate-500 mt-2">Nossa equipe técnica entrará em contato para validar sua estrutura.</p>
          </div>
          <CTAForm />
        </div>
      </section>
    </div>
  );
};

export default Integration;