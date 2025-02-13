import { projectsList, ProjectType } from '../constants/projects/projects-items.ts';
import ProjectItem from '../components/projects/ProjectItem.tsx';

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center mt-20">
        <h1 className="font-bold text-5xl md:text-6xl 2xl:text-7xl uppercase tracking-wider">Projects</h1>
      </div>
      <div className="flex flex-wrap w-full justify-center py-20 gap-8 sm:gap-10 px-2">
        {projectsList.map((project: ProjectType, index: number) => (
          <ProjectItem key={index} name={project.name} desc={project.desc} link={project.link}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
