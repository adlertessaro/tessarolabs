
export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  path: string;
  caseMetric?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  metric: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
