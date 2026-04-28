import { socials, socialIcons } from '../data/socials';

export function SocialLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {socials.map((social) => {
        const IconComponent = socialIcons[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] px-4 py-4 transition-all duration-300 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-card)]"
            title={social.label}
            aria-label={social.label}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-card)] text-[color:var(--color-text)]">
              <IconComponent className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-[color:var(--color-text)]">
                {social.label}
              </span>
              <span className="block truncate text-sm text-[color:var(--color-muted)]">
                {social.value}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
