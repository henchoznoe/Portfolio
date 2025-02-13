import OpenIn from '../icons/OpenIn.tsx';

type ProjectItemProps = {
  name: string;
  desc: string;
  link: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div
      className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl z-10 mx-2 sm:mx-0 hover:border-blue-300">
      <div>
        <h2 className="text-lg font-semibold text-white">{props.name}</h2>
        <p className="mt-3 text-base text-zinc-200">{props.desc}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <a href={props.link} target="_blank"
           className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2">
          Visit <OpenIn/>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
