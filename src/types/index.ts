export type Theme = 'dark' | 'light';

export interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}

export interface SocialLink {
  platform: 'github' | 'instagram' | 'linkedin' | 'twitch' | 'email';
  url: string;
  label: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface ThemeContextValue {
  theme: Theme;
  neonColor: string;
  toggleTheme: () => void;
  setNeonColor: (color: string) => void;
}

export const NEON_COLORS = [
  { name: 'Rosa', value: '#ec4899' },
  { name: 'Azul', value: '#3b82f6' },
  { name: 'Verde', value: '#22c55e' },
  { name: 'Púrpura', value: '#a855f7' },
  { name: 'Naranja', value: '#f97316' },
] as const;
