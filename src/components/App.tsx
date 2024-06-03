import { FC, useRef } from 'react'
import { Job } from '../types/experience'
import { Skill as SkillType } from '../types/skills'
import Icons from '../assets/icons.svg?react'

import expData from '../data/experience.json'
import skillData from '../data/skills.json'

import Hero from './Hero'
import Nav from './Nav'
import Experience from './Experience'
import Skills from './Skills'
import AddlDetail from './AddlDetail'

const App: FC = () => {
  const jobs = useRef<Job[]>(expData.jobs)
  const skills = useRef<SkillType[]>(skillData.skills)

  return (
    <div>
      <div className="lg:container lg:mx-auto p-4 bg-white shadow-sm lg:shadow relative mb-14">
        <Nav />
        <Hero />
        <Experience jobs={jobs.current} />
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
          <Skills skills={skills.current} />
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
    </div>
  )
}

export default App
