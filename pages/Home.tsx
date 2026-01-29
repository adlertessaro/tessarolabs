
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CasesCarousel from '../components/CasesCarousel';
import CTAForm from '../components/CTAForm';
import { SERVICES } from '../constants';
import { Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      <HeroSection 
        title="Tessaro Labs: Tecnologia que resolve"
        subtitle="Construímos soluções digitais que conectam tecnologia e estratégia de negócio, transformando ideias em sites, sistemas e integrações que realmente funcionam."
        bullets={["Custom Systems", "Integrations", "AI & Data", "High Performance Web", "Product Engineering"]}
        ctaText="Entrar em Contato"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">O Que Fazemos de Melhor</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Unimos expertise técnica e visão de negócio para entregar resultados mensuráveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <ServiceCard 
                key={s.id}
                title={s.title}
                description={s.description}
                features={s.features}
                iconName={s.icon}
                path={s.path}
                caseMetric={s.caseMetric}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-6">
                <Handshake size={18} />
                <span>Parceria White Label</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">Agência: Foque na Estratégia, nós focamos no Código.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Seja o braço tecnológico mais forte do seu cliente. A Tessaro Labs atua nos bastidores entregando sites ultra-rápidos e sistemas do mais simples ao mais complexo para seus clientes, enquanto você mantém o relacionamento e a marca.
              </p>
              <Link to="/parcerias" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/20">
                Quero ser uma Agência Parceira <ArrowRight size={18} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
               <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Parceria para Agências de Marketing</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['Desenvolvimento white-label', 'Apoio técnico para projetos', 'Sites e sistemas sob medida', 'Integrações entre plataformas', 'Performance e estabilidade', 'Organização do projeto', 'Prazos fidelizados', 'Comunicação clara', 'Entrega com qualidade'].map(t => (
                      <div key={t} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center text-xs font-bold text-slate-600 dark:text-slate-400">
                        {t}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Cases de Sucesso</h2>
          </div>
          <CasesCarousel />
        </div>
      </section> */}

      <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <CTAForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
