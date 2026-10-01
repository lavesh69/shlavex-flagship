export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  position: string;
  department: string;
  departmentSlug: string;
  portrait: string;
  profileHero: string;
  thumbnail: string;
  biography: string;
  responsibilities: string[];
  expertise: string[];
  philosophy: string;
  order: number;
  featured?: boolean;
  isLeadership?: boolean;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

export interface DepartmentLeadershipRef {
  name: string;
  position: string;
  slug: string;
}

export interface Department {
  id: string;
  slug: string;
  number: string; // e.g. "01", "02", ... "10"
  name: string;
  headline: string;
  philosophy: string;
  description: string;
  image: string;
  leadership: DepartmentLeadershipRef[];
  responsibilities: string[];
  relatedAreas: string[];
  order: number;
  featured?: boolean;
}

export interface PhilosophyPrinciple {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  statement: string;
  narrative: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export type ContactCategory = 'GENERAL' | 'PARTNERSHIPS' | 'CAREERS' | 'MEDIA';

export interface ContactSubmission {
  category: ContactCategory;
  name: string;
  email: string;
  organization?: string;
  message: string;
}
