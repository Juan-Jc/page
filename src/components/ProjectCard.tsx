import { Star } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-white group-hover:text-gray-100 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-400 text-sm flex-shrink-0">
          <Star className="w-4 h-4" />
          <span>{project.stars}</span>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">
        {project.description}
      </p>
      <span className="inline-block px-2 py-1 text-xs rounded bg-white/[0.10] text-gray-300">
        {project.language}
      </span>
    </a>
  );
}
