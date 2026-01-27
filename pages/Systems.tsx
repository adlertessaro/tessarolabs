
import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Activity, Calculator, Smartphone, ArrowRight, CheckCircle2, Cpu, Code2, Layers, Lightbulb } from 'lucide-react';

const Systems: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* FOCO PRINCIPAL: SISTEMAS SOB MEDIDA */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest">
              <Code2 size={16} /> Laboratório de Inovação
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Sistemas <br />
              <span className="text-emerald-500">Sob Medida.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Não tente encaixar seu negócio em uma caixa. Desenvolvemos o software que se adapta perfeitamente aos seus processos, eliminando gargalos e escalando sua operação de forma inteligente.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                    <Layers size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Arquitetura Escalável</h4>
                    <p className="text-slate-500 text-sm">Pronto para crescer de 100 a 1 milhão de usuários sem travar.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                    <Lightbulb size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inteligência Artificial Nativa</h4>
                    <p className="text-slate-500 text-sm">Integramos IA para automação de decisões e análise de dados preditiva.</p>
                 </div>
              </div>
            </div>

            <Link to="/contato" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/20">
              Solicitar Projeto Customizado
            </Link>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 relative">
                <h3 className="text-2xl font-bold text-white mb-8">Processo de Desenvolvimento</h3>
                <div className="space-y-8">
                  {[
                    { n: '01', t: 'Discovery & Viabilidade', d: 'Análise profunda do seu negócio e tech stack.' },
                    { n: '02', t: 'Design & Prototipagem', d: 'Visualização da UX antes da primeira linha de código.' },
                    { n: '03', t: 'Sprints de Código', d: 'Desenvolvimento ágil com entregas a cada 15 dias.' },
                    { n: '04', t: 'QA & Homologação', d: 'Garantia de 99% de cobertura de testes e segurança.' },
                    { n: '05', t: 'Launch & Suporte', d: 'Lançamento escalável com monitoramento 24/7.' },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-6 group">
                      <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition-transform">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{step.t}</h4>
                        <p className="text-slate-500 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* PRODUTOS PROPRIETÁRIOS - SECUNDÁRIO */}
        <div className="pt-20 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Soluções Verticais Prontas</h2>
            <p className="text-slate-600 dark:text-slate-400">Produtos desenvolvidos pelo nosso laboratório para setores específicos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 group hover:border-emerald-500/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                  <Calculator size={24} />
                </div>
                <span className="text-[10px] font-black bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest">Focus ERP</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Saúde Financeira no Varejo</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Ideal para farmácias e pequenos varejistas que precisam de controle fiscal e integração Scanntech imediata.</p>
              <Link to="/contato" className="text-emerald-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Conhecer Licenciamento <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 group hover:border-blue-500/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                  <Activity size={24} />
                </div>
                <span className="text-[10px] font-black bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest">CoreFit IA</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Inteligência Fitness</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Gestão de academias com prescrição de treinos automatizada por IA, aumentando a retenção em até 40%.</p>
              <Link to="/contato" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Conhecer Licenciamento <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Systems;
