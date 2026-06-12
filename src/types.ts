export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  scale: string;
  materials: string[];
  description: string;
  imageUrl: string;
  blueprintImg?: string;
  details: string[];
  challenge: string;
  solution: string;
}

export interface ServiceStep {
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
  technicalDetails: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
}
