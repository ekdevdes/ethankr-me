import { FC } from 'react'
import { Skill as SkillType } from '../types/skills'

import Skill from './Skill'

type SkillsProps = {
  skills: SkillType[]
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="md:mr-4 mb-4" id="skills">
      <p className="text-xl text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white mb-4">
        Skills
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {skills.map(skill => (
          <Skill name={skill.name} id={skill.id} />
        ))}
      </div>
    </div>
  )
}

export default Skills
