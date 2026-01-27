
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  iconName: string;
  path: string;
  caseMetric?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, iconName, path, caseMetric }) => {
  const Icon = (Icons as any)[iconName] || Icons.Layout;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <Check size={16} className="text-emerald-500 shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {caseMetric && (
        <div className="bg-emerald-500/5 dark:bg-emerald-500/10 py-2 px-4 rounded-lg mb-6 border border-emerald-500/20">
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Case Sucesso</p>
          <p className="text-lg font-extrabold text-slate-900 dark:text-white">{caseMetric}</p>
        </div>
      )}

      <Link
        to={path}
        className="mt-auto group flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 px-6 py-4 rounded-xl transition-all font-bold text-slate-900 dark:text-white hover:text-white"
      >
        <span>Saber Mais</span>
        <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
