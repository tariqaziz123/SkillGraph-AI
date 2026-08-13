export type DeveloperSkill = {
  name: string;
  level?: string;
};

export type Developer = {
  id: string;
  name: string;
  location?: string;
  experienceYears?: number;
  skills: DeveloperSkill[];
};