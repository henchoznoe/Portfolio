import Tilt from 'react-parallax-tilt';
import { skillsItems, SkillsItemsType } from '../constants/skills/skills-items.ts';
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  return (
    <div className="min-h-dvh flex flex-col md:flex-row items-center md:px-8 lg:px-10 2xl:px-24 gap-20 md:gap-10">
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-none">
        <Tilt glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} glareColor="transparent"
              className="w-auto z-20 mx-12">
          <img src="/freelancer.png" alt="Freelancer pic" className="w-full h-full hover:scale-105 transition-all"/>
        </Tilt>
      </div>
      <div className="w-full md:w-1/2 mt-24 md:mt-0 flex flex-col items-center md:items-start gap-6">
        <h2 className="font-bold text-5xl md:text-6xl 2xl:text-7xl px-8 md:px-0 uppercase">Skills</h2>
        {skillsItems.map((cat: SkillsItemsType, index: number) => (
          <div className="flex flex-col items-center md:items-start gap-2" key={index}>
            <h3 className="font-semibold text-2xl md:text-3xl">{cat.label}</h3>
            <div className="flex gap-2">
              {cat.skills.map((skill, index) => (
                <div key={index}>
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`}
                    alt={skill.tooltip}
                    className="w-10 md:w-12"
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={skill.tooltip}
                    data-tooltip-place="bottom"
                  />
                  <Tooltip id={`tooltip-${index}`}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
