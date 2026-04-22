import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
