import { Star } from 'lucide-react';
import type { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${
        isDark ? 'bg-white/[0.05] hover:bg-white/[0.10]' : 'bg-black/[0.04] hover:bg-black/[0.08]'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className={`font-semibold group-hover:transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.name}
        </h3>
        <div className={`flex items-center gap-1 text-sm flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <Star className="w-4 h-4" />
          <span>{project.stars}</span>
        </div>
      </div>
      <p className={`text-sm mb-3 line-clamp-2 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {project.description}
      </p>
      <span className={`inline-block px-2 py-1 text-xs rounded ${
        isDark ? 'bg-white/[0.10] text-gray-300' : 'bg-black/[0.06] text-gray-600'
      }`}>
        {project.language}
      </span>
    </a>
  );
}
