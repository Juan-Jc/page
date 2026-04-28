import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
