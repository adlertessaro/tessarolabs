
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Zap, ShieldCheck, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';
import CTAForm from '../components/CTAForm';

const Partners: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Partnership Hero */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-6 uppercase tracking-widest">
                  <Handshake size={16} /> Programa de Parcerias Elite
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                  Sua Agência <br />
                  <span className="text-emerald-500">com DNA Tech.</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Não recuse mais projetos por falta de braço técnico. A Tessaro Labs entrega a engenharia, você entrega a estratégia. Parceria 100% White Label focada em escala e lucratividade.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                   <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <Star className="text-yellow-500" />
                      <span className="font-bold text-slate-700 dark:text-slate-300">White Label Absoluto</span>
                   </div>
                   <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <Zap className="text-emerald-500" />
                      <span className="font-bold text-slate-700 dark:text-slate-300">Entrega em tempo recorde</span>
                   </div>
                </div>

                <a href="#become-partner" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl inline-flex items-center gap-2 hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-500/30">
                  Quero ser um Parceiro <ArrowRight />
                </a>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full animate-pulse"></div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-3xl"
               >
                  <div className="space-y-6">
                     <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl flex gap-6 border border-slate-100 dark:border-slate-700">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                           <Globe size={28} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sites High-Ticket</h4>
                           <p className="text-slate-500 text-sm">Sua agência vende, nós entregamos com Lighthouse 100.</p>
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl flex gap-6 border border-slate-100 dark:border-slate-700">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                           <ShieldCheck size={28} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">Suporte Especializado</h4>
                           <p className="text-slate-500 text-sm">Time de devs dedicado para resolver qualquer integração.</p>
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl flex gap-6 border border-slate-100 dark:border-slate-700">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                           <Handshake size={28} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">Tabela Progressiva</h4>
                           <p className="text-slate-500 text-sm">Quanto mais projetos, maior sua margem de lucro.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Fluxo de Parceria</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Simples, direto e lucrativo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'Aplicação', d: 'Você preenche o formulário abaixo e nós analisamos o perfil da sua agência.' },
              { n: '2', t: 'Onboarding', d: 'Alinhamos os fluxos de trabalho (Jira/Slack) e tabelas de preços.' },
              { n: '3', t: 'Vendas', d: 'Sua agência vende as soluções. Nós fornecemos todo o apoio técnico na pré-venda.' },
              { n: '4', t: 'Execução', d: 'Nós desenvolvemos, você revisa e entrega ao cliente final com sua marca.' },
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
                 <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl">
                    {step.n}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.t}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
                 {i < 3 && <div className="hidden md:block absolute top-14 left-[80%] w-full h-[2px] bg-slate-200 dark:bg-slate-800 z-0"></div>}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Table */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 mb-32 relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-12 text-center">Por que ser um Parceiro Tessaro?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle className="text-emerald-500 shrink-0" />
                       <p className="text-lg"><strong>Capacidade Técnica Infinita:</strong> Pegue projetos de qualquer complexidade sem medo.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle className="text-emerald-500 shrink-0" />
                       <p className="text-lg"><strong>Prazos Garantidos:</strong> Nosso laboratório opera em regime ágil de alta performance.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle className="text-emerald-500 shrink-0" />
                       <p className="text-lg"><strong>Qualidade Premium:</strong> SEO, Velocidade e UX que farão seu cliente te amar.</p>
                    </div>
                 </div>
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-2xl font-bold mb-6">Média de Ganhos das Agências</h4>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span>Sites Institucionais</span>
                          <span className="text-emerald-400 font-bold">30% - 50% Margem</span>
                       </div>
                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span>Sistemas Custom</span>
                          <span className="text-emerald-400 font-bold">20% - 40% Margem</span>
                       </div>
                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span>Manutenção Mensal</span>
                          <span className="text-emerald-400 font-bold">Recorrência Total</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[150px]"></div>
        </section>

        {/* CTA Form */}
        <section id="become-partner" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Inscreva sua Agência</h2>
            <p className="text-slate-500 dark:text-slate-400">Dê o primeiro passo para ter o braço tecnológico mais forte do mercado.</p>
          </div>
          <CTAForm />
        </section>
      </div>
    </div>
  );
};

export default Partners;
