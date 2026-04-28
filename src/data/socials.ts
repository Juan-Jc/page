import { type SocialLink } from '../types';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';

export const socials: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/Juan-Jc',
    label: 'GitHub',
    value: '@Juan-Jc',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/juancamilopuerta/',
    label: 'LinkedIn',
    value: 'Perfil profesional',
  },
  {
    platform: 'email',
    url: 'mailto:juan.puerta1994@gmail.com',
    label: 'Email',
    value: 'juan.puerta1994@gmail.com',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/jotacemusic',
    label: 'Instagram',
    value: '@jotacemusic',
  },
];

export const socialIcons = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  email: Mail,
};
