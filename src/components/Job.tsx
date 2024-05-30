import { FC } from 'react'
import has from 'lodash/has'
import { Job as JobType } from '../types/experience'

import Button from '../components/shared/Button'

type JobProps = {
  details: JobType
}

const Job: FC<JobProps> = ({ details }) => {
  return (
    <div className="shadow rounded-lg mr-4 mb-6 p-4 flex flex-col">
      <p className="text-sm font-bold text-zinc-600 selection:bg-red-700 selection:text-white">
        <span>{details.year_from}&nbsp;</span>
        {has(details, 'year_to') ? (
          <>
            to <span>{details.year_to}</span>
          </>
        ) : (
          <>
            to <span>Current</span>
          </>
        )}
        <span className="mx-1">&middot;</span>
        <span>{details.company}</span>
      </p>
      <p className="text-xl text-red-600 font-bold mb-3 selection:bg-red-700 selection:text-white">
        {details.position}
      </p>
      <div className="mt-auto">
        <p className="text-sm font-bold text-zinc-600 selection:bg-red-700 selection:text-white mb-3">
          Top Skills:{' '}
          <span className="font-normal">{details.skills.join(', ')}</span>
        </p>
        <Button type="secondary" className="py-1 px-3 md:py-1 md:px-3">
          View Details {/* some icon */}
        </Button>
      </div>
    </div>
  )
}

export default Job
