
import React from 'react';
import CTAForm from '../components/CTAForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black text-white mb-8">Vamos Conversar?</h1>
            <p className="text-xl text-slate-400 mb-12">Estamos prontos para ouvir sua ideia e transformá-la em realidade tecnológica. Solicite sua demo agora!</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">E-mail</h4>
                  <p className="text-slate-400">contato@tessarolabs.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">WhatsApp</h4>
                  <p className="text-slate-400">+55 (54) 99999-9999</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Localização</h4>
                  <p className="text-slate-400">Farroupilha/RS, Brasil</p>
                  <p className="text-slate-400">Dublin, Irlanda</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
               <p className="text-white font-bold mb-4 italic">"Atendimento rápido e focado no cliente. Recomendo fortemente para projetos de integração."</p>
               <p className="text-emerald-500 font-bold">— Time Scanntech (Parceiro)</p>
            </div>
          </div>

          <div>
            <CTAForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
