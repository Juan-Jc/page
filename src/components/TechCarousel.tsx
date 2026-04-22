import { techs } from '../data/techs';
import { useTheme } from '../context/ThemeContext';

export function TechCarousel() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-gray-400' : 'text-gray-500';

  // Duplicate icons for seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="carousel-container overflow-hidden py-4 relative">
      <div className="animate-carousel flex gap-8 whitespace-nowrap">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center gap-1 flex-shrink-0"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className={`text-xs ${textColor}`}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
