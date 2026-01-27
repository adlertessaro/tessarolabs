
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

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
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">Espere um minuto!</h2>
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">Receba uma consultoria de viabilidade gratuita.</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed">Não saia sem validar sua ideia com nossos especialistas. Economize tempo e dinheiro no seu próximo projeto.</p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/30 text-lg"
              >
                Sim, quero validar meu projeto!
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full text-slate-400 text-sm font-bold hover:text-slate-600 dark:hover:text-slate-200 transition-all uppercase tracking-widest"
              >
                Prefiro arriscar sozinho
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
