
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const CTAForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tel: '',
    servico: 'Sistemas Customizados',
    msg: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-emerald-600/10 p-12 rounded-3xl border border-emerald-500/30 text-center"
      >
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Solicitação Recebida!</h2>
        <p className="text-emerald-700 dark:text-emerald-100 text-lg mb-8">Nosso laboratório analisará seu caso e entraremos em contato em até 24h com uma proposta estratégica.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden transition-colors">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Qual sua ideia hoje?</h2>
        <p className="text-slate-600 dark:text-slate-400">Conte-nos seu plano e nós ajudamos a realizar.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Como podemos te chamar?</label>
            <input 
              required
              type="text" 
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Qual seu E-mail?</label>
            <input 
              required
              type="email" 
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              placeholder="joao@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Serviço de Interesse</label>
          <select 
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            value={formData.servico}
            onChange={(e) => setFormData({...formData, servico: e.target.value})}
          >
            <option>Sistemas Sob Medida</option>
            <option>Criação de Site Alta Performance</option>
            <option>Parceria para Agências</option>
            <option>IA & Integrações</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Mensagem</label>
          <textarea 
            rows={4}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            placeholder="Descreva seu projeto ou necessidade de parceria..."
            value={formData.msg}
            onChange={(e) => setFormData({...formData, msg: e.target.value})}
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 text-lg transition-all"
        >
          <span>Solicitar Análise Técnica</span>
          <Send size={20} />
        </motion.button>
      </form>
    </div>
  );
};

export default CTAForm;
