export type SkillsItemsType = {
  label: string;
  skills: {
    tooltip: string;
    icon: string;
  }[];
}

export const skillsItems: SkillsItemsType[] = [
  {
    label: 'Frontend',
    skills: [
      {
        tooltip: 'TypeScript',
        icon: 'ts'
      },
      {
        tooltip: 'React',
        icon: 'react'
      },
      {
        tooltip: 'Tailwind',
        icon: 'tailwind'
      }
    ]
  },
  {
    label: 'Backend',
    skills: [
      {
        tooltip: 'NodeJS',
        icon: 'nodejs'
      },
      {
        tooltip: 'Express',
        icon: 'express'
      },
      {
        tooltip: 'PHP',
        icon: 'php'
      }
    ]
  },
  {
    label: 'Tools & Platforms',
    skills: [
      {
        tooltip: 'Git',
        icon: 'git'
      },
      {
        tooltip: 'Figma',
        icon: 'figma'
      },
      {
        tooltip: 'Vercel',
        icon: 'vercel'
      }
    ]
  },
  {
    label: '<languages/>',
    skills: [
      {
        tooltip: 'TypeScript',
        icon: 'ts'
      },
      {
        tooltip: 'PHP',
        icon: 'php'
      },
      {
        tooltip: 'Java',
        icon: 'java'
      }
    ]
  }
];
