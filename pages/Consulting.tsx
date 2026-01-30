import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Search, 
  BarChart3, 
  Rocket, 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  ArrowUpRight,
  Calculator
} from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero Section - Foco na Dor e Alívio */}
        <div className="max-w-4xl mb-24">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Consultoria Estratégica & Financeira</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            Assuma o Controle Real dos <br />
            <span className="text-emerald-600">Números do seu Negócio.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Parar de "apagar incêndios" financeiros exige processos e clareza. Ajudamos você a organizar o caixa, aumentar o lucro e planejar o crescimento com segurança.
          </p>
        </div>

        {/* Pilares da Consultoria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          
          {/* Organização Financeira */}
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Search size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Organização Financeira</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Damos clareza total sobre o que entra e sai. Criamos processos confiáveis e métricas claras para você nunca mais ter dúvida sobre o saldo da sua empresa.
            </p>
          </div>

          {/* Melhoria de Rentabilidade */}
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Melhoria de Rentabilidade</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Foco no que sobra no bolso. Trabalhamos na redução de custos, interpretação de despesas e definição de preços corretos para aumentar seu lucro real.
            </p>
          </div>

          {/* Fluxo de Caixa Saudável */}
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Fluxo de Caixa Saudável</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Estruturamos e fortalecemos o caixa da sua empresa para evitar surpresas negativas e manter suas operações sempre estáveis e seguras.
            </p>
          </div>

          {/* Planejamento Estratégico */}
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Planejamento Estratégico</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Decidimos juntos a melhor rota para crescer. Auxiliamos na gestão de dívidas, captação de recursos e investimentos inteligentes para o futuro.
            </p>
          </div>

          {/* Geração de Valor & ROI */}
          <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Calculator size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Geração de Valor & ROI</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Orientamos sua empresa para que ela entregue retorno consistente aos sócios e gere valor real de mercado a longo prazo.
            </p>
          </div>
        </div>

        {/* Banner de Proposta */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Transforme sua gestão em <br />
                <span className="text-emerald-500">resultado previsível.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl">
                Nossa consultoria foca em transformar a bagunça dos números em uma máquina de lucro. Sem teorias complexas, apenas processos que funcionam no dia a dia.
              </p>
              <Link to="/contato" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20">
                Quero Organizar Minha Empresa <ArrowUpRight size={24} />
              </Link>
            </div>
            <div className="lg:w-2/5 grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                <p className="text-4xl font-black text-emerald-500 mb-2">100%</p>
                <p className="text-xs font-bold uppercase text-slate-500">Confidencialidade</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                <p className="text-4xl font-black text-emerald-500 mb-2">ROI</p>
                <p className="text-xs font-bold uppercase text-slate-500">Foco em Retorno</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/10 blur-[120px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;