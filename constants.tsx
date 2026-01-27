
import { Layout, Database, ShieldCheck, Globe, Cpu, Zap } from 'lucide-react';
import { ServiceInfo, CaseStudy, Testimonial } from './types';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'custom',
    title: 'Sistemas Sob Medida',
    description: 'Desenvolvimento de software exclusivo para os processos únicos da sua empresa.',
    features: ['Arquitetura Robusta', 'IA Embarcada', 'Segurança', 'Escalabilidade', 'Integrações'],
    icon: 'Cpu',
    path: '/cases-sistemas',
    caseMetric: ' '
  },
  {
    id: 'scanntech',
    title: 'Varejo Inteligente',
    description: 'Integração profunda com Scanntech e inteligência de dados para PDV.',
    features: ['Automação de Promoções', 'Dashboards Real-time', 'Sincronização Fiscal'],
    icon: 'Layout',
    path: '/gestao',
    caseMetric: 'Zero perda de dados'
  },
  {
    id: 'sites',
    title: 'Sites de Performance',
    description: 'Websites focados em conversão agressiva e velocidade extrema.',
    features: ['Nota 100 Lighthouse', 'SEO Dominante', 'White Label p/ Agências'],
    icon: 'Zap',
    path: '/sites',
    caseMetric: 'Conversão +45%'
  },
  {
    id: 'qa',
    title: 'QA & Gestão Ágil',
    description: 'Garantia de qualidade e acompanhamento via Jira/Confluence.',
    features: ['99% Cobertura de Testes', 'Gestão Transparente', 'DevOps Automático'],
    icon: 'ShieldCheck',
    path: '/gestao',
    caseMetric: 'Entrega 20% mais rápida'
  }
];

export const CASES: CaseStudy[] = [
  {
    id: '1',
    title: 'Scanntech Integration',
    description: 'Conectamos o ecossistema de varejo físico à nuvem com latência zero.',
    metric: '99.9% Uptime',
    image: 'https://picsum.photos/seed/scanntech/800/400'
  },
  {
    id: '2',
    title: 'Dashboard de Performance',
    description: 'Consolidação de dados de múltiplas plataformas em uma única tela estratégica.',
    metric: 'Decisões 2x +Rápidas',
    image: 'https://picsum.photos/seed/dashboard/800/400'
  },
  {
    id: '3',
    title: 'MVP para Fintech',
    description: 'Lançamento de plataforma de pagamentos escalável em 30 dias.',
    metric: 'Time-to-market Recorde',
    image: 'https://picsum.photos/seed/fintech/800/400'
  },
  {
  id: 'demandas',
  title: 'Monitoramento de Demandas',
  description: 'Plataforma centralizada para controle de fluxo operacional e produtividade em tempo real.',
  metric: '+30% Eficiência',
  image: 'https://picsum.photos/seed/monitor/800/400'
},
{
  id: 'helpdesk',
  title: 'HelpDesk Inteligente',
  description: 'Sistema completo de abertura e acompanhamento de chamados com triagem automatizada.',
  metric: 'SLA 99.8%',
  image: 'https://picsum.photos/seed/help/800/400'
},
{
  id: 'api-hub',
  title: 'API Gateway Simplificado',
  description: 'Conexão e orquestração de APIs de terceiros para integração rápida de ecossistemas.',
  metric: 'Setup 5x +Rápido',
  image: 'https://picsum.photos/seed/api/800/400'
}
];

export const STRATEGIC_PARTNERS = [
  { name: 'AWS', role: 'Cloud Infrastructure' },
  { name: 'Google Cloud', role: 'Data & AI' },
  { name: 'Scanntech', role: 'Varejo Inteligente' },
  { name: 'Atlassian', role: 'Agilidade & Gestão' },
  { name: 'RD Station', role: 'Marketing Automation' }
];

// Adicione ao seu constants.tsx
export const SYSTEM_DETAILS_CASES = [
  {
    title: "Monitoramento de Demandas",
    description: "Plataforma para controle de fluxo operacional e produtividade em tempo real.",
    icon: "Activity",
    features: ["Dashboards Live", "Gestão de Gargalos"]
  },
  {
    title: "HelpDesk & Chamados",
    description: "Sistema de abertura e acompanhamento de demandas com triagem inteligente.",
    icon: "MessageSquare",
    features: ["SLA Garantido", "Histórico Completo"]
  },
  {
    title: "API Hub Simplificado",
    description: "Conexão de APIs de terceiros com orquestração centralizada e segura.",
    icon: "Share2",
    features: ["Setup em 48h", "Segurança Bancária"]
  },
  {
    title: "Outras Soluções",
    description: "Desenvolvimento de microserviços, automações e integrações proprietárias.",
    icon: "PlusCircle",
    features: ["Cloud Native", "Escalabilidade"]
  }
];
