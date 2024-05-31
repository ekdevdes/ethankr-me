import { FC } from 'react'
import { Job as JobType } from '../types/experience'

import Detail from './Detail'

type ExpProps = {
  jobs: JobType[]
}

const Experience: FC<ExpProps> = ({ jobs }) => {
  return (
    <div className="mt-3">
      <p className="text-xl text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white">
        Experience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 px-3">
        {jobs.map(job => {
          return <Detail details={job} key={job.id} />
        })}
      </div>
    </div>
  )
}

export default Experience
