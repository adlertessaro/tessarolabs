
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Upload, Send, CheckCircle, Rocket, Code, Cpu, ShieldCheck } from 'lucide-react';

const Careers: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            <Rocket size={16} /> Carreira na Tessaro Labs
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">
            Faça parte do <span className="text-emerald-500">Laboratório.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Estamos sempre em busca de mentes inquietas que queiram transformar problemas complexos em código elegante e soluções de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Why Tessaro Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Por que codar conosco?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Code />, title: 'Tech Stack de Elite', desc: 'React, Node, Go, AWS, IA e muito mais.' },
                { icon: <Briefcase />, title: 'Projetos Globais', desc: 'Atuação em hubs no Brasil e Irlanda.' },
                { icon: <Cpu />, title: 'Inovação Pura', desc: 'Sistemas críticos e integrações complexas.' },
                { icon: <ShieldCheck />, title: 'Cultura Ágil', desc: 'Gestão transparente e focada em entrega.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-emerald-500 mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-emerald-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
               <h3 className="text-2xl font-bold mb-4">Trabalho Híbrido & Remoto</h3>
               <p className="text-emerald-100 leading-relaxed">
                 Valorizamos a autonomia e a entrega. Nossas sedes em Farroupilha e Dublin são hubs de conexão, mas sua produtividade não tem fronteiras.
               </p>
               <div className="absolute top-0 right-0 w-32 h-full bg-white/10 -skew-x-12 translate-x-16"></div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative transition-colors">
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Candidatura Enviada!</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Nosso time de talentos analisará seu perfil cuidadosamente. Se houver match, entraremos em contato em breve.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Enviar outra candidatura
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Ex: Maria Santos"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">E-mail Pessoal</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="maria@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Área de Atuação</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                      <option>Desenvolvimento Frontend</option>
                      <option>Desenvolvimento Backend</option>
                      <option>Mobile (React Native)</option>
                      <option>UI/UX Design</option>
                      <option>QA & Testing</option>
                      <option>Gestão de Projetos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">LinkedIn / Portfolio</label>
                    <input 
                      type="url" 
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Anexar Currículo (PDF)</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept=".pdf"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl px-4 py-8 text-center group-hover:border-emerald-500 transition-all">
                      <Upload className="mx-auto text-slate-400 group-hover:text-emerald-500 mb-2 transition-colors" />
                      <p className="text-slate-500 text-sm font-medium">
                        {fileName || 'Clique para selecionar ou arraste o arquivo aqui'}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 text-lg transition-all"
                >
                  <span>Enviar Candidatura</span>
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
