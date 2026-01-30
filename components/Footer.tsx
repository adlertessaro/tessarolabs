
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, MessageCircleMore, Globe, Handshake, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-6 block">
              Tessaro<span className="text-slate-900 dark:text-white"> Labs</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8">
              Laboratório de Inovação e Desenvolvimento. Braço tecnológico estratégico para negócios que buscam escala global e eficiência real.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <MapPin size={20} className="text-emerald-500" />
                <span>Brasil: Farroupilha, RS</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Globe size={20} className="text-emerald-500" />
                <span>Ireland: Dublin, Cork, Limerick</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Soluções</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/sistemas" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sistemas</Link></li>
              <li><Link to="/sites" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sites</Link></li>
              <li><Link to="/gestao" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Gestão</Link></li>
              <li><Link to="/consultoria" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Consultoria</Link></li>
              <li><Link to="/parcerias" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-500 transition-colors"><Handshake size={16} /> Seja um Parceiro</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2 text-xs"><Mail size={14} /> contato@tessarolabs.com</li>
              <li className="flex items-center gap-2 text-xs"><MessageCircleMore size={14} /> +55 (54) 93300-5187</li>
              <li><Link to="/trabalhe-conosco" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-500 transition-colors"><Briefcase size={16} /> Trabalhe Conosco</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Tessaro Labs. Tecnologia inteligente. Alma humana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
