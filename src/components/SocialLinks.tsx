import { socials, socialIcons } from '../data/socials';

export function SocialLinks() {
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
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.10] transition-all duration-300 hover:scale-105 group"
            title={social.label}
            aria-label={social.label}
          >
            <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors hidden sm:inline">
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
