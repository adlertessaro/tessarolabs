
import React from 'react';
import { ShieldCheck, Zap, Eye, Globe, MapPin, Target } from 'lucide-react';
import { STRATEGIC_PARTNERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro */}
        <div className="mb-24">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Laboratório de Software</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">Tessaro Labs: Onde a Inovação Ganha Vida.</h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Mais do que uma fábrica de software, somos um laboratório de inovação estratégica. Atuamos como o braço tecnológico de negócios que buscam escala através de IA, Cloud e Automação.
          </p>
        </div>

        {/* Cultura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              t: 'Agilidade', 
              d: 'Uso rigoroso de metodologias ágeis para entregas contínuas e evolução rápida.', 
              i: <Zap className="text-yellow-500" /> 
            },
            { 
              t: 'Inovação', 
              d: 'Foco constante em tecnologias de ponta como IA generativa e arquitetura serverless.', 
              i: <ShieldCheck className="text-emerald-500" /> 
            },
            { 
              t: 'Transparência', 
              d: 'Acompanhamento em tempo real via Jira e Confluence. Sem segredos, sem burocracia.', 
              i: <Eye className="text-blue-500" /> 
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {item.i}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.t}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        {/* Global Hubs */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-32 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-black mb-8">Atuação Global, <br/><span className="text-emerald-500">DNA Gaúcho.</span></h2>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <MapPin className="text-emerald-500 shrink-0" />
                   <div>
                     <p className="font-bold text-xl">Sede Brasil</p>
                     <p className="text-slate-400">Farroupilha/RS - O polo industrial da inovação.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <Globe className="text-emerald-500 shrink-0" />
                   <div>
                     <p className="font-bold text-xl">Presença Internacional</p>
                     <p className="text-slate-400">Hubs estratégicos na Irlanda: Dublin, Cork e Limerick.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="p-8 bg-slate-800 rounded-2xl text-center">
                 <p className="text-4xl font-black text-emerald-500 mb-2">10+</p>
                 <p className="text-xs font-bold uppercase text-slate-500">Anos de Mercado</p>
               </div>
               <div className="p-8 bg-slate-800 rounded-2xl text-center">
                 <p className="text-4xl font-black text-emerald-500 mb-2">100%</p>
                 <p className="text-xs font-bold uppercase text-slate-500">Foco em Sucesso</p>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/10 blur-[120px]"></div>
        </div>

        {/* Strategic Partners */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Alianças Estratégicas</h2>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
            {STRATEGIC_PARTNERS.map(p => (
              <div key={p.name} className="flex flex-col items-center">
                 <p className="text-2xl font-black text-slate-800 dark:text-white">{p.name}</p>
                 <p className="text-xs font-bold text-emerald-500">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
