export interface ResumeContact {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
}

export interface ResumeSkill {
  name: string;
  level?: number;
}

export interface ResumeExperienceItem {
  title: string;
  company: string;
  timeline: string;
  points: string[];
}

export interface ResumeEducationItem {
  degree: string;
  institution: string;
  timeline: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  description: string;
  contact: ResumeContact;
  skills: ResumeSkill[];
  experience: ResumeExperienceItem[];
  education: ResumeEducationItem[];
  interests: string[];
}
