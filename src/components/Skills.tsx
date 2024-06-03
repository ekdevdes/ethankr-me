import { FC, useState } from 'react'
import { Skill as SkillType } from '../types/skills'
import chunk from '../utils/chunk'

import Skill from './Skill'
import Button from './shared/Button'

type SkillsProps = {
  skills: SkillType[]
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  const [skillsExpanded, setSkillsExpanded] = useState<boolean>(false)

  const chunkedSkills = chunk<SkillType>(skills, 12)

  return (
    <div className="md:mr-4 mb-4" id="skills">
      <p className="text-xl text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white mb-4">
        Skills
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {chunkedSkills[0].map(skill => (
          <Skill name={skill.name} id={skill.id} key={skill.id} />
        ))}
        {skillsExpanded &&
          chunkedSkills[1].map(skill => (
            <Skill name={skill.name} id={skill.id} key={skill.id} />
          ))}
      </div>
      <div className="py-3 px-3">
        <Button
          type="tertiary"
          className="my-3 relative group"
          onClick={() => {
            setSkillsExpanded(isExpanded => !isExpanded)
          }}
        >
          {skillsExpanded ? 'View Less' : 'View More'}{' '}
          {skillsExpanded ? (
            <span
              aria-hidden="true"
              className="ml-2 absolute top-0 transition-transform group-hover:-translate-y-2"
            >
              &uarr;
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="ml-2 absolute top-0 transition-transform group-hover:translate-y-2"
            >
              &darr;
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}

export default Skills
