
import React from 'react';
import { ShieldCheck, KanBan, Settings, Zap } from 'lucide-react';

const Management: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-black text-white mb-6">Gestão Ágil e QA Avançado</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Garantimos que o projeto seja entregue no prazo, dentro do orçamento e sem erros.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Nosso Tech Stack de Gestão</h2>
              <div className="flex flex-wrap gap-4">
                {['Jira', 'Confluence', 'GitHub Actions', 'Docker', 'Kubernetes', 'Selenium', 'Cypress'].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-slate-700 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                Utilizamos as melhores ferramentas do mercado para garantir transparência total. Você acompanha cada "card" do Jira em tempo real.
              </p>
              <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20">
                <p className="text-white font-bold mb-2 flex items-center gap-2">
                  <Zap size={18} className="text-emerald-500" /> Entrega 20% mais rápida
                </p>
                <p className="text-slate-400 text-sm">Nossa metodologia reduz o tempo de desenvolvimento eliminando desperdícios.</p>
              </div>
           </div>
           <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-12">
              <ShieldCheck className="text-emerald-500 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-6">QA: 99% de Cobertura</h3>
              <p className="text-slate-400 mb-8">
                Testes automatizados que rodam a cada commit. Testes de stress, penetração e unitários para que você durma tranquilo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">✓ Automação de Regressão</li>
                <li className="flex items-center gap-3 text-slate-300">✓ Testes de Carga (User Peak)</li>
                <li className="flex items-center gap-3 text-slate-300">✓ Auditoria de Código</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
