import { ArrowUpRight, GitBranch } from 'lucide-react';
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
      className="group block rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-card)]"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
            Proyecto seleccionado
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
            {project.name}
          </h3>
        </div>
        <div className="rounded-full bg-[color:var(--color-card)] p-2 text-[color:var(--color-text)]">
          <GitBranch className="h-4 w-4" />
        </div>
      </div>

      <p className="mb-3 text-sm font-medium text-[color:var(--color-text)]/80">
        {project.highlight}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-[color:var(--color-border)] px-2.5 py-1 text-xs text-[color:var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm font-medium text-[color:var(--color-text)]">
        <span className="inline-flex items-center gap-2">
          Ver repositorio
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        {project.demoUrl ? (
          <span className="text-[color:var(--color-muted)]">Demo disponible</span>
        ) : (
          <span className="text-[color:var(--color-muted)]">Código fuente</span>
        )}
      </div>
    </a>
  );
}
