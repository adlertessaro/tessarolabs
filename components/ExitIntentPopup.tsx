import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importação necessária

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  // Função para fechar e navegar
  const handleConfirm = () => {
    setIsVisible(false);
    navigate('/contato');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white dark:bg-slate-900 w-full max-w-lg p-10 rounded-3xl border border-emerald-500/30 shadow-[0_0_80px_-12px_rgba(16,185,129,0.4)]"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500 shadow-inner">
              <Gift size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">Espere!</h2>
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">Não vá agora.</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed">Tenha seu site profissional em apenas 7 dias.</p>
            
            <div className="space-y-4">
              <button 
                onClick={handleConfirm} // Chama a função de navegação
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/30 text-lg"
              >
                Quero meu site!
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full text-slate-400 text-sm font-bold hover:text-slate-600 dark:hover:text-slate-200 transition-all uppercase tracking-widest"
              >
                Prefiro não aparecer na internet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;