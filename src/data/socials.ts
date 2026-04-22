import { type SocialLink } from '../types';
import {
  Mail,
  Globe,
  Video,
  Gamepad2,
  AtSign,
} from 'lucide-react';

// lucide-react doesn't have social brand icons in v1.8.0
// Using generic icons that represent each platform
export const socials: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/Juan-Jc',
    label: 'GitHub',
  },
  {
    platform: 'instagram',
    url: 'http://www.instagram.com/jotacemusic',
    label: 'Instagram',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/juancamilopuerta/',
    label: 'LinkedIn',
  },
  {
    platform: 'twitch',
    url: 'https://www.twitch.tv/jotacemusic',
    label: 'Twitch',
  },
  {
    platform: 'email',
    url: 'mailto:juan.puerta1994@gmail.com',
    label: 'Email',
  },
];

export const socialIcons = {
  github: Globe, // Using Globe as generic web icon
  instagram: Video, // Using Video as visual content icon
  linkedin: AtSign, // Using AtSign as professional network icon
  twitch: Gamepad2, // Using Gamepad2 for gaming platform
  email: Mail,
};
