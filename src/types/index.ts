export type ViewMode = 'editorial' | 'presentation' | 'print';

export interface ServiceCapability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  overview: string;
  detailedScope: string[];
  deliverables: string[];
  toolsAndTech: string[];
  businessValue: string;
  iconName: string;
  phase2AssetPrompt: string;
}

export interface MethodologyStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  activities: string[];
  outputs: string[];
  estimatedTimeline: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  code: string;
  description: string;
  keyChallenges: string[];
  tcSolutions: string[];
  sampleUseCases: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientCategory: string;
  serviceId: string;
  tagline: string;
  background: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  phase2AssetPrompt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  responsibilities: string[];
  specialties: string[];
  phase2AssetPrompt: string;
}

export interface PageDefinition {
  pageNumber: number;
  pageCode: string;
  title: string;
  shortTitle: string;
  category: string;
}

