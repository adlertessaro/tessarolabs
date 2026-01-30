import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ShieldCheck, TrendingUp, Search, Smartphone, MousePointerClick } from 'lucide-react';

const Sites: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero de Vendas - Direto ao Ponto */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
          <div className="w-full md:w-1/2">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Seu negócio no topo</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9]">Seu Site não é um Enfeite.</h1>
            <h2 className="text-3xl font-bold text-slate-400 mb-8 italic">É sua melhor ferramenta de vendas.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              De nada adianta um site bonito que ninguém encontra ou que demora a carregar. Nós criamos sites <strong>rápidos, fáceis de usar e feitos para trazer novos clientes</strong> todos os dias.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Apareça no Google',
                'Abre rápido no Celular',
                'Design que passa Confiança',
                'Fácil de navegar e comprar'
              ].map(f => (
                <div key={f} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
                  <CheckCircle className="text-emerald-500" size={18} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Proposta de Risco Zero */}
            <div className="bg-emerald-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-emerald-100 dark:border-slate-800 mb-10 shadow-sm">
              <p className="text-emerald-600 dark:text-emerald-500 font-black text-xl mb-2 flex items-center gap-2">
                <ShieldCheck /> COMPROMISSO TESSARO:
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Você só investe no que aprovar. <strong>Pague apenas depois de ver e aprovar</strong> a primeira versão do seu site. Risco zero para o seu bolso.
              </p>
            </div>

            <Link to="/contato" className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-2xl inline-block hover:scale-105 transition-all shadow-2xl shadow-emerald-900/40 text-center w-full md:w-auto">
              Quero Meu Site
            </Link>
          </div>

          {/* Cards de Benefícios Práticos */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 bg-emerald-500/20 blur-[150px] rounded-full"></div>
             <div className="relative space-y-4">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6">
                   <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                      <Smartphone size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">Perfeito no Celular</h4>
                      <p className="text-slate-500 text-sm">Mais de 80% dos seus clientes estão no celular. Seu site será leve e fácil de usar em qualquer tela.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6 translate-x-4 md:translate-x-8">
                   <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                      <Search size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">Encontrado no Google</h4>
                      <p className="text-slate-500 text-sm">Não basta existir, tem que ser visto. Configuramos seu site para que as pessoas te achem quando buscarem pelo que você faz.</p>
                   </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6">
                   <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                      <TrendingUp size={32} />
                   </div>
                   <div>
                      <h4 className="text-slate-900 dark:text-white font-black text-xl">Mais Clientes, Menos Gasto</h4>
                      <p className="text-slate-500 text-sm">Um site eficiente trabalha por você 24h por dia, tirando dúvidas e captando contatos de forma automática.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* CTA de Urgência/Facilidade */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-3xl text-center md:text-left">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Cansado de ter um site que não traz resultados?</h2>
                <p className="text-slate-400 text-xl mb-10 leading-relaxed">
                  Ter um site amador custa caro para a sua imagem. Nós cuidamos de tudo: do visual à parte técnica, para você focar apenas em atender seus novos clientes.
                </p>
                <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
                   {['Site pronto em 7 dias', 'Suporte total', 'Sem mensalidades absurdas', 'Fácil de atualizar'].map(t => (
                     <div key={t} className="bg-white/10 px-4 py-2 rounded-full font-bold text-sm border border-white/20">{t}</div>
                   ))}
                </div>
                <Link to="/contato" className="bg-emerald-600 text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-2 justify-center md:justify-start mx-auto md:mx-0 w-fit">
                  Quero uma proposta hoje <MousePointerClick size={24} />
                </Link>
             </div>
             <div className="hidden lg:flex justify-center">
                <div className="w-80 h-80 bg-emerald-600/20 rounded-full border border-emerald-500/20 flex flex-col items-center justify-center animate-pulse p-8 text-center">
                   <Zap size={80} className="text-emerald-500 mb-4" />
                   <p className="text-2xl font-black">Entrega rápida e garantida</p>
                </div>
             </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Sites;