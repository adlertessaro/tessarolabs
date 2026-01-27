
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, BarChart, Rocket } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">Consultoria de Viabilidade de Produtos.</h1>
          <p className="text-xl text-slate-400">Transformamos ideias incertas em roteiros técnicos e de mercado validados. Não construa antes de testar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-900 p-12 rounded-3xl border border-slate-800">
            <Search className="text-emerald-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Análise Tech & Mercado</h3>
            <p className="text-slate-400">Avaliamos se sua ideia é tecnicamente viável e se existe demanda real no mercado antes de você investir um centavo em código.</p>
          </div>
          <div className="bg-slate-900 p-12 rounded-3xl border border-slate-800">
            <Target className="text-emerald-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Desenho de MVP</h3>
            <p className="text-slate-400">Definimos o "Mínimo Produto Viável" para você entrar no mercado rápido, gastando o mínimo possível.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-[3rem] border border-slate-700 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">Produto Viável em 30 Dias</h2>
              <p className="text-slate-400 text-lg mb-8">Nosso método exclusivo de consultoria foca em te levar da ideia à primeira versão funcional em tempo recorde.</p>
              <Link to="/contato" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all">
                Agendar Reunião de Viabilidade <Rocket size={18} />
              </Link>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-3xl font-black text-emerald-400">100%</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Confidencialidade</p>
              </div>
              <div className="text-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-3xl font-black text-emerald-400">48h</p>
                <p className="text-xs text-slate-500 uppercase font-bold">First Report</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
