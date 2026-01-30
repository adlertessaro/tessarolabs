import React from 'react';
import { 
  BarChart3, 
  Wallet, 
  CreditCard, 
  ArrowRightLeft, 
  TrendingUp, 
  DollarSign, 
  LineChart, 
  Lightbulb, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Activity,
  CalendarDays,
  Receipt,
  HandCoins,
  Gem,
  ArrowRight,
  PieChart,
  Target,
  ArrowUp,
  ArrowDown,
  MousePointerClick,
  Percent
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente Visual de Dashboard para Persuasão
const MockDashboard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 p-4 md:p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-1000">
      {/* Header do Mock */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white">Painel Focus BI</h4>
          <p className="text-sm text-slate-500">Visão Geral de Unidade</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest">Live</div>
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
        </div>
      </div>

      {/* KPIs Rápidos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Fluxo Mensal', val: 'R$ 142.500', change: '+12%', up: true },
          { label: 'Ticket Médio', val: 'R$ 84,90', change: '+5%', up: true },
          { label: 'Contas a Pagar', val: 'R$ 12.300', change: '-2%', up: false },
          { label: 'Margem Líquida', val: '32,4%', change: '+3%', up: true },
        ].map((kpi, i) => (
          <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{kpi.label}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">{kpi.val}</p>
            <div className={`flex items-center gap-1 text-[10px] font-bold ${kpi.up ? 'text-emerald-500' : 'text-rose-500'}`}>
              {kpi.up ? <ArrowUp size={10} /> : <ArrowDown size={10} />} {kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de Barras Simulado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 h-64 flex flex-col justify-end gap-2 relative">
            <div className="absolute top-4 left-6">
                <p className="font-bold text-slate-900 dark:text-white">Vendas vs Custos</p>
                <p className="text-[10px] text-slate-500">Performance Semanal</p>
            </div>
            <div className="flex items-end justify-between gap-3 h-32 px-2">
                {[45, 75, 50, 95, 60, 85, 70].map((h, i) => (
                    <div key={i} className="flex gap-1 items-end w-full group">
                        <div style={{ height: `${h}%` }} className="w-full bg-emerald-500 rounded-t-md group-hover:bg-emerald-400 transition-all cursor-pointer"></div>
                        <div style={{ height: `${h * 0.6}%` }} className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-md"></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SAB</span><span>DOM</span>
            </div>
        </div>

        {/* Círculo de Progressão */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-center items-center text-center">
            <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" strokeWidth="10" className="text-slate-200 dark:text-slate-700" />
                    <circle cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" strokeWidth="10" strokeDasharray="314" strokeDashoffset="80" className="text-emerald-500" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-2xl font-black text-slate-900 dark:text-white">74%</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase">Lucro Bruto</p>
                </div>
            </div>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Meta mensal de rentabilidade atingida com sucesso.</p>
        </div>
      </div>
    </div>
  );
};

const Focus: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pt-20">
      
      {/* Hero Section - Texto na Esquerda, Ilustração na Direita */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900/20 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LADO ESQUERDO: TEXTO E BOTÃO */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
                <BarChart3 size={14} />
                Inteligência Gerencial Focus
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight text-slate-900 dark:text-white">
                Seus números viram <br />
                <span className="text-emerald-600">Lucro Real.</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10">
                O Focus BI entrega a clareza que relatórios comuns escondem. Monitore seu ticket médio e rentabilidade em tempo real, extraindo os dados direto do seu sistema.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link to="/contato" className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-emerald-900/30 flex items-center gap-4">
                  Saber Mais <MousePointerClick size={24} />
                </Link>
              </div>
            </div>

            {/* LADO DIREITO: ILUSTRAÇÃO TÉCNICA (Substitui a imagem que não carregou) */}
            <div className="relative group">
              {/* Efeito de brilho ao fundo */}
              <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
              
              {/* Moldura da Imagem */}
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://www.powerportal.com.br/img/powerbiarte/upload/Modelo_Power_bi_1734439908.png" 
                  alt="Focus BI Dashboard" 
                  className="w-full h-full object-cover aspect-video lg:aspect-square"
                />
                {/* Overlay sutil para harmonizar com o tema emerald */}
                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
              </div>

              {/* Elemento Flutuante de Ticket Médio (Mantido para dar profundidade) */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:block animate-bounce-slow">
                 <p className="text-[10px] font-black text-slate-400 uppercase">Status Atual</p>
                 <p className="text-2xl font-black text-emerald-600">Alta Performance</p>
                 <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold">
                    <TrendingUp size={12} /> Dados em Tempo Real
                 </div>
              </div>
            </div>
          </div>

          {/* O MockDashboard de dados reais continua abaixo */}
          <div className="mt-20">
            <MockDashboard />
          </div>
        </div>
      </section>

      {/* Retail Specific Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Saúde Financeira no Varejo</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                Ideal para Farmácias e <br /> Pequenos Varejistas.
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Desenvolvido para ajudar pequenos varejistas a otimizar sua saúde financeira. O Focus conecta os dados do seu sistema à sua estratégia financeira sem complicações.
              </p>
              <div className="space-y-4">
                {[
                  'Integração',
                  'Controle',
                  'Auditoria',
                  'Monitoramento'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                    <CheckCircle2 className="text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-950 p-12 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
               <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-8">
                  <Activity size={32} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 italic">"O Focus mudou a forma como enxergamos o fechamento de caixa. Hoje sei exatamente onde está minha margem."</h3>
               <p className="text-slate-500 font-bold">— Proprietário de Rede Farmacêutica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Funcionalidades - Foco em Dados e Decisão */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
            Seus dados, agora com clareza.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            O Focus se conecta ao seu sistema atual para organizar as informações que você já tem, mas que ficam escondidas em relatórios difíceis.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Activity />, 
              title: 'Raio-X das Vendas', 
              desc: 'Veja o desempenho real de cada unidade ou PDV sem precisar abrir diversos relatórios manuais.' 
            },
            { 
              icon: <HandCoins />, 
              title: 'Análise de Ticket Médio', 
              desc: 'Saiba exatamente quanto seu cliente gasta e identifique oportunidades para aumentar sua receita por venda.' 
            },
            { 
              icon: <TrendingUp />, 
              title: 'Margem e Lucratividade', 
              desc: 'Entenda o que sobra no bolso após os custos, visualizando o lucro real de forma simples e visual.' 
            },
            { 
              icon: <ArrowRightLeft />, 
              title: 'Fluxo de Entradas e Saídas', 
              desc: 'Acompanhe as movimentações geradas pelo seu sistema para ter uma visão clara do seu saldo operacional.' 
            },
            { 
              icon: <Percent />, 
              title: 'Impacto de Descontos', 
              desc: 'Monitore o quanto sua equipe está concedendo de desconto e como isso afeta a saúde do seu negócio.' 
            },
            { 
              icon: <PieChart />, 
              title: 'Curva de Performance', 
              desc: 'Descubra quais períodos e produtos geram mais resultado, baseando seu estoque e escala em dados reais.' 
            },
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final - Persuasão de Fechamento */}
      <section className="py-24 bg-emerald-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-white rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight">Assuma o controle total hoje.</h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto mb-16 font-medium">
            Leve a gestão financeira do seu varejo para o próximo nível. Sem planilhas complexas, apenas inteligência real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contato" className="px-12 py-6 bg-white text-emerald-600 rounded-[2rem] font-black text-2xl hover:scale-105 hover:bg-slate-50 transition-all shadow-2xl flex items-center gap-4">
              Solicitar Acesso ao Focus <ArrowRight size={28} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Focus;