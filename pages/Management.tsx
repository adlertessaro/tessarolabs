import React from 'react';
import { 
  ShieldCheck, 
  Kanban, 
  Settings, 
  Zap, 
  Target, 
  Lock, 
  ClipboardCheck, 
  LayoutList,
  Clock,
  Briefcase
} from 'lucide-react';

const Management: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - Gestão de Elite */}
        <div className="mb-20 text-center">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Estratégia e Execução</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">Gestão de Projetos e Produtos.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Garantimos que sua ideia saia do papel com organização, prazos cumpridos e total sigilo. Do planejamento à entrega final.
          </p>
        </div>

        {/* Metodologias e Prazos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-8">
              <Kanban size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Metodologias Ágeis</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Trabalhamos com o que há de melhor no mercado para garantir evolução rápida e constante. Utilizamos Sprints e ciclos de entrega que permitem ajustes velozes e feedback contínuo.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Scrum', 'Kanban', 'Lean', 'Iterações Quinzenais'].map(t => (
                <span key={t} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
              <Clock size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Prazos e Cronogramas</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Para quem precisa de previsibilidade. Trabalhamos com cronogramas estruturados e marcos de entrega (Milestones) rigorosos, garantindo que o seu lançamento aconteça exatamente no dia planejado.
            </p>
            <div className="flex items-center gap-4 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
              <Target className="text-blue-500" size={24} />
              <span className="font-bold text-blue-600 dark:text-blue-400">Foco total em cumprimento de datas.</span>
            </div>
          </div>
        </div>

        {/* Gestão de Terceiros e Implantação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <ShieldCheck size={20} /> Gestão White Label & Sigilo
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Seu Product Management <br />
              <span className="text-emerald-500">100% Confidencial.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Assumimos a gestão de softwares desenvolvidos por terceiros. Atuamos como seus olhos e ouvidos técnicos (Product Management), garantindo que o fornecedor entregue o que foi contratado, com total sigilo sobre nossa atuação.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Lock className="text-emerald-500 shrink-0" />
                <p className="text-slate-700 dark:text-slate-300 font-bold">Confidencialidade sob contrato (NDA).</p>
              </div>
              <div className="flex gap-4">
                <ClipboardCheck className="text-emerald-500 shrink-0" />
                <p className="text-slate-700 dark:text-slate-300 font-bold">Auditoria técnica de entregas.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Briefcase className="text-emerald-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-6">Implantação & Project Management</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Não apenas criamos, nós implementamos. Atuamos na gestão de projetos de implantação de sistemas, garantindo que a transição seja suave, os dados sejam migrados corretamente e sua equipe esteja treinada.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <LayoutList size={20} className="text-emerald-500" /> Coordenação de equipes de campo
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <LayoutList size={20} className="text-emerald-500" /> Gestão de riscos de implantação
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <LayoutList size={20} className="text-emerald-500" /> Homologação final de processos
                </li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-64 h-full bg-emerald-600/10 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;