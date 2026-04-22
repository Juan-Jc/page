import { socials, socialIcons } from '../data/socials';
import { useTheme } from '../context/ThemeContext';

export function SocialLinks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {socials.map((social) => {
        const IconComponent = socialIcons[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 group ${
              isDark ? 'bg-white/[0.05] hover:bg-white/[0.10]' : 'bg-black/[0.04] hover:bg-black/[0.08]'
            }`}
            title={social.label}
            aria-label={social.label}
          >
            <IconComponent className={`w-5 h-5 transition-colors ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
            <span className={`text-sm transition-colors hidden sm:inline ${
              isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-700'
            }`}>
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
