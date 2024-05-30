import { FC, useState, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { Experience as ExperienceType } from '../types/experience'
import expData from '../data/experience.json'

import Hero from './Hero'
import Nav from './Nav'
import Experience from './Experience'

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
    </div>
  )
}

export default App
