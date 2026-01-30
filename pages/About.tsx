import React from 'react';
import { 
  Globe, 
  MapPin, 
  Target, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users,
  Rocket,
  Eye,
  Layers,
  Activity,
  CheckCircle2,
  Building2,
  Search
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 animate-in fade-in duration-700 pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-600/5 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Rocket size={14} />
            Laboratório de Software
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-tight text-slate-900 dark:text-white">
            Tessaro Labs: <br />
            <span className="text-emerald-600">Onde a Inovação Ganha Vida.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Atuamos como o braço tecnológico estratégico de negócios que buscam escala através de engenharia moderna, IA e automação.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Anos de Mercado' },
              { value: '100%', label: 'Foco em Entrega' },
              { value: '100+', label: 'Clientes Atendidos' },
              { value: '99%', label: 'Cobertura QA' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl md:text-5xl font-black text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operation & HQ Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Building2 className="text-emerald-600" size={20} />
                <span className="font-bold text-sm text-slate-600 dark:text-slate-300">Nossas Bases</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                Presença em <span className="text-emerald-600">Farroupilha</span> e hubs na <span className="text-emerald-600">Irlanda.</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2 font-black text-emerald-600 mb-2 uppercase text-xs tracking-widest">
                    <MapPin size={14} /> Sede Brasil
                  </div>
                  <p className="text-sm text-slate-500">Localizada em Farroupilha/RS, conectada ao ecossistema industrial e tech local.</p>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2 font-black text-emerald-600 mb-2 uppercase text-xs tracking-widest">
                    <Globe size={14} /> Europa
                  </div>
                  <p className="text-sm text-slate-500">Presença estratégica na Irlanda (Dublin, Cork, Limerick) para projetos globais.</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-emerald-600 pl-8">
                "Nosso ambiente de trabalho é o reflexo da nossa agilidade: focado, moderno e transparente."
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-600/10 blur-[100px] rounded-full"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-2 group hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Coworking Space" 
                  className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Dream */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-xs mb-6">
                <Search size={16} />
                Nossa Jornada
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                De laboratório de ideias para <br/>
                <span className="text-emerald-500">referência em boas ideias.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Nascemos do desejo de resolver problemas reais sem a burocracia das fábricas de software tradicionais. Evoluímos para um modelo onde a tecnologia é o meio para gerar valor imediato.
              </p>
              <div className="flex items-center gap-4 text-slate-300 font-bold">
                <div className="w-12 h-1 px-1 bg-emerald-600 rounded-full"></div>
                Tecnologia como ferramenta, não como moda.
              </div>
            </div>
            <div className="lg:pt-32">
              <div className="inline-flex items-center gap-2 text-blue-400 font-black uppercase tracking-widest text-xs mb-6">
                <Globe size={16} />
                Visão Global
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Impacto sem <br/>
                <span className="text-blue-400">fronteiras.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                Acreditamos que boas ideias não possuem território. Trabalhamos com mentalidade global para entregar soluções que funcionam em qualquer mercado.
              </p>
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                 <p className="text-2xl font-black italic text-blue-300">"Pensamos de forma estratégica para agir com precisão técnica."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">O que entregamos</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Unimos expertise técnica e visão de negócio para entregar resultados mensuráveis através de tecnologia de elite.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'Sistemas Customizados', icon: <Layers size={24} /> },
              { label: 'Integrações de Dados', icon: <Cpu size={24} /> },
              { label: 'IA Generativa Aplicada', icon: <Zap size={24} /> },
              { label: 'Arquitetura Serverless', icon: <Rocket size={24} /> },
              { label: 'Dashboards Real-time', icon: <Activity size={24} /> },
              { label: 'Segurança & Compliance', icon: <ShieldCheck size={24} /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-start gap-5 group hover:border-emerald-600 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-emerald-600 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Target size={180} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-widest">Missão</h3>
                <p className="text-xl text-emerald-50 leading-relaxed font-medium">
                  Desenvolver soluções digitais inteligentes que simplifiquem processos e gerem valor real para empresas, combinando tecnologia web, automação e inteligência artificial.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <Eye size={180} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-600/10 rounded-3xl flex items-center justify-center mb-8 text-emerald-600">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-widest text-emerald-600">Visão</h3>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Ser reconhecida como referência nacional em inovação digital e automação inteligente, promovendo a transformação tecnológica de negócios por meio de soluções sob medida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">
              <ShieldCheck size={20} />
              Nossos Pilares
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white">Cultura de Elite</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Agilidade', desc: 'Entregas contínuas sem burocracia.', icon: <Activity size={28} /> },
              { title: 'Inovação', desc: 'Foco em IA e arquitetura moderna.', icon: <Zap size={28} /> },
              { title: 'Transparência', desc: 'Acompanhamento real via Jira/Slack.', icon: <Eye size={28} /> },
              { title: 'Escalabilidade', desc: 'Sistemas prontos para o crescimento.', icon: <Users size={28} /> },
              { title: 'Qualidade', desc: '99% de cobertura em testes automatizados.', icon: <Layers size={28} /> }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-emerald-600 transition-all flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h4 className="text-xl font-black mb-4 group-hover:text-emerald-600 transition-colors text-slate-900 dark:text-white">{value.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-white rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight">Tecnologia que resolve. Soluções que geram resultado.</h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto mb-16 font-medium">
            Criamos sistemas e automações sob medida para escalar operações e simplificar o dia a dia das empresas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/contato" className="px-12 py-6 bg-white text-emerald-600 rounded-[2rem] font-black text-2xl hover:scale-105 hover:bg-slate-50 transition-all shadow-2xl group flex items-center gap-4">
              Começar Agora <Zap size={28} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;