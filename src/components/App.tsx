import { FC, useState, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { Experience as ExperienceType } from '../types/experience'
import expData from '../data/experience.json'

import Hero from './Hero'
import Nav from './Nav'
import Experience from './Experience'
import Skills from './Skills'
import AddlDetail from './AddlDetail'

const App: FC = () => {
  const [exp, setExp] = useState<ExperienceType>()

  useEffect(() => {
    setExp(expData)
  }, [])

  return (
    <div className="lg:container lg:mx-auto p-4 bg-white shadow-sm lg:shadow relative">
      <Nav />
      <Hero />
      {!isEmpty(exp) && <Experience jobs={exp.jobs} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
        <Skills />
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
    </div>
  )
}

export default App
