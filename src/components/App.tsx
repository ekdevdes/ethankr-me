import { FC, useState, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { Experience as ExperienceType } from '../types/experience'
import { Skills as SkillsType } from '../types/skills'
import Icons from '../assets/icons.svg?react'

import expData from '../data/experience.json'
import skillData from '../data/skills.json'

import Hero from './Hero'
import Nav from './Nav'
import Experience from './Experience'
import Skills from './Skills'
import AddlDetail from './AddlDetail'

const App: FC = () => {
  const [exp, setExp] = useState<ExperienceType>()
  const [skills, setSkills] = useState<SkillsType>()

  useEffect(() => {
    setExp(expData)
    setSkills(skillData)
  }, [])

  return (
    <div className="lg:container lg:mx-auto p-4 bg-white shadow-sm lg:shadow relative">
      <Nav />
      <Hero />
      {!isEmpty(exp) && <Experience jobs={exp.jobs} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
        <Skills skills={skills} />
        <div>
          <AddlDetail
            title="Education"
            details={{
              id: 1,
              position: 'B.S. – I.T.: Web and Mobile Technologies',
              company: 'Liberty University',
              year_from: 2016,
              skills: [],
            }}
          />
          <AddlDetail
            title="Certifications"
            details={{
              id: 1,
              position: 'HashiCorp Terraform: Certified Associate',
              company: 'HashiCorp',
              year_from: 2022,
              skills: [],
            }}
          />
        </div>
      </div>

      {/* Hide our icon refs so we can use them at other places on the site seamlessy */}
      <div className="hidden">
        <Icons />
      </div>
    </div>
  )
}

export default App
