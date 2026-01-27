
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Search, Layout, MousePointer2, CheckCircle, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';

const Sites: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Persuasion Hero */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
          <div className="w-full md:w-1/2">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Performance Web de Elite</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9]">Seu Site não é uma Brochura.</h1>
            <h2 className="text-3xl font-bold text-slate-400 mb-8 italic">É sua máquina de vendas mais eficiente.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Enquanto outros focam no "bonitinho", nós focamos na <strong>conversão</strong>. Desenvolvemos sites com tecnologia de ponta que carregam instantaneamente e posicionam sua marca no topo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Lighthouse 100% Garantido',
                'SEO Técnico Impecável',
                'Design Focado em UX/UI',
                'Integrado ao seu CRM/ERP'
              ].map(f => (
                <div key={f} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                  <CheckCircle className="text-emerald-500" size={18} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2rem] border border-slate-800 mb-10 shadow-2xl">
              <p className="text-emerald-500 font-black text-xl mb-2 flex items-center gap-2">
                <ShieldCheck /> GARANTIA TESSARO:
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Nós assumimos o risco. <strong>Pague apenas após a entrega</strong> da primeira versão funcional aprovada por você. Sem letras miúdas.
              </p>
            </div>

            <Link to="/contato" className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-2xl inline-block hover:scale-105 transition-all shadow-2xl shadow-emerald-500/30">
              Quero meu Site de Elite
            </Link>
          </div>

          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 bg-emerald-500/20 blur-[150px] rounded-full"></div>
             <div className="relative space-y-4">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6">
                   <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                      <Zap size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">Velocidade que Vende</h4>
                      <p className="text-slate-500 text-sm">Cada 0.1s a mais no carregamento reduz sua conversão em 7%. Nós entregamos o máximo.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6 translate-x-4 md:translate-x-8">
                   <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                      <TrendingUp size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">Escalabilidade</h4>
                      <p className="text-slate-500 text-sm">Sites preparados para receber milhares de acessos simultâneos sem perda de performance.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6">
                   <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                      <Handshake size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">White Label p/ Agências</h4>
                      <p className="text-slate-500 text-sm">Somos o braço técnico secreto das maiores agências. Entrega rápida e discreta.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Agency Focus Section */}
        <div className="bg-emerald-600 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Sua Agência precisa de um braço técnico de elite?</h2>
                <p className="text-emerald-100 text-xl mb-10 leading-relaxed">
                  Foque no que você faz de melhor: Marketing e Criatividade. Deixe a engenharia pesada, SEO técnico e integrações complexas conosco. 
                  Modelos de parceria recorrente com valores exclusivos para revenda.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                   {['Sites em 7 dias', 'Suporte 24/7', 'Código 100% seu', 'White Label', 'Integração de APIs'].map(t => (
                     <div key={t} className="bg-white/10 px-4 py-2 rounded-full font-bold text-sm border border-white/20">{t}</div>
                   ))}
                </div>
                <Link to="/parcerias" className="bg-white text-emerald-600 px-10 py-5 rounded-xl font-black text-xl hover:bg-slate-100 transition-all shadow-xl">
                  Seja um Parceiro Tech
                </Link>
             </div>
             <div className="hidden lg:flex justify-center">
                <div className="w-80 h-80 bg-white/10 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                   <Handshake size={120} />
                </div>
             </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Sites;
