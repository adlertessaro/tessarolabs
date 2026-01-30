import React from 'react';
import { 
  Zap, 
  Dumbbell, 
  Users, 
  Cpu, 
  Layout, 
  Smartphone, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3,
  Flame,
  Target,
  Trophy,
  Network
} from 'lucide-react';

const CoreFit: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 animate-in fade-in duration-700 pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-yellow-400/10 to-transparent">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/5 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-slate-950 text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Flame size={14} fill="currentColor" />
            CoreFit
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-tight text-slate-900 dark:text-white">
            Gestão de Redes <br />
            <span className="text-yellow-500">com Inteligência.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            O ecossistema definitivo para gerenciar unidades, profissionais e alunos. Potencialize seus resultados com prescrição de treinos em uma plataforma ultra intuitiva.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contato" className="px-12 py-6 bg-yellow-400 text-slate-950 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-yellow-400/20 flex items-center justify-center gap-4">
              Começar Agora <Zap size={28} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Management Section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-yellow-400/10 blur-[100px] rounded-full"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-yellow-400 p-8 rounded-[3rem] text-slate-950 shadow-xl">
                    <Network size={40} className="mb-4" />
                    <h4 className="font-black text-xl mb-2">Gestão de Redes</h4>
                    <p className="text-sm font-bold opacity-80">Controle centralizado de múltiplas unidades e franquias.</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-[3rem] text-white border border-slate-700">
                    <Users size={40} className="mb-4 text-yellow-400" />
                    <h4 className="font-black text-xl mb-2">Time Profissional</h4>
                    <p className="text-sm text-slate-400">Gestão completa de instrutores, personal trainers e staff.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-slate-950 p-8 rounded-[3rem] text-white border border-yellow-400/30">
                    <Cpu size={40} className="mb-4 text-yellow-400" />
                    <h4 className="font-black text-xl mb-2">Treino com IA</h4>
                    <p className="text-sm text-slate-400">Algoritmos que auxiliam na criação de treinos personalizados.</p>
                  </div>
                  <div className="bg-yellow-400 p-8 rounded-[3rem] text-slate-950 shadow-xl">
                    <Smartphone size={40} className="mb-4" />
                    <h4 className="font-black text-xl mb-2">Portal do Aluno</h4>
                    <p className="text-sm font-bold opacity-80">Acesso fácil a treinos e evolução direto pelo celular.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-yellow-400/10 border border-yellow-400/20">
                <Layout className="text-yellow-500" size={20} />
                <span className="font-bold text-sm text-yellow-600 dark:text-yellow-400">Foco em Gerenciamento</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                Controle total sobre <br />
                <span className="text-yellow-500">cada detalhe da sua rede.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                O CoreFit foi desenvolvido para simplificar a administração de complexas redes de academias. Tenha uma visão clara de seus alunos e profissionais em uma interface limpa e eficiente.
              </p>
              <div className="grid gap-4">
                {[
                  'Cadastro e Monitoramento Global de Alunos',
                  'Gestão de Equipe e Permissões por Unidade',
                  'Prescrição de Treinos Assistida por Inteligência',
                  'Interface Simplificada para Alta Produtividade'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                    <CheckCircle2 className="text-yellow-500" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Student Experience */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-400/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-black uppercase tracking-widest text-xs mb-6">
            <Target size={16} />
            Inovação no Treino
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-12">Excelência para o Aluno, <br/><span className="text-yellow-400">Eficiência para o Professor.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                t: 'Suporte à Prescrição', 
                d: 'A IA sugere exercícios e volumes baseada no histórico, agilizando o trabalho do professor.',
                i: <Cpu className="mx-auto text-yellow-400 mb-6" size={48} />
              },
              { 
                t: 'Engajamento Real', 
                d: 'Acompanhamento de evolução que motiva o aluno e reduz a evasão.',
                i: <Trophy className="mx-auto text-yellow-400 mb-6" size={48} />
              },
              { 
                t: 'Visibilidade Total', 
                d: 'Relatórios detalhados sobre a base de alunos e performance das unidades.',
                i: <BarChart3 className="mx-auto text-yellow-400 mb-6" size={48} />
              }
            ].map((box, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-400/50 transition-all group">
                {box.i}
                <h4 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-colors">{box.t}</h4>
                <p className="text-slate-400 leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-yellow-400 text-slate-950 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-white rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight">O próximo nível da <br/>sua gestão.</h2>
          <p className="text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto mb-16 font-bold">
            Organize suas unidades e transforme a experiência dos seus alunos com o CoreFit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/contato" className="px-12 py-6 bg-slate-950 text-white rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 group">
              Saber Mais <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoreFit;