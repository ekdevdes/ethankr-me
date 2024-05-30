import { FC, useState } from 'react'
import has from 'lodash/has'
import get from 'lodash/get'
import cn from 'classnames'
import { Job as JobType } from '../types/experience'

import Button from '../components/shared/Button'

type JobProps = {
  details: JobType
}

const Job: FC<JobProps> = ({ details }) => {
  // Duties is optional so we'll default it to an empty array here
  const duties = get(details, 'duties', [])

  // Some jobs have *alot* of duties, let's break them up to make it easier to read
  const CHUNK_SIZE = 3
  const chunkedDuties = [duties.slice(0, CHUNK_SIZE), duties.slice(CHUNK_SIZE)]

  const [dutiesExpanded, setDutiesExpanded] = useState<boolean>(false)

  return (
    <div
      className="shadow rounded-lg md:mr-4 mb-6 p-4 flex flex-col"
      id="experience"
    >
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
        {has(details, 'type') && <>&nbsp;&middot; {details.type}</>}
      </p>
      <p className="text-xl text-red-600 font-bold mb-3 selection:bg-red-700 selection:text-white">
        {details.position}
      </p>
      <div className="mt-2 lg:mb-3">
        <ul className="list-disc ml-4">
          {chunkedDuties[0].map((duty, i) => (
            <li key={i} className="mb-3">
              <p className="text-sm lg:text-base">{duty}</p>
            </li>
          ))}
        </ul>

        <ul
          className={cn(
            {
              hidden: !dutiesExpanded,
            },
            'list-disc ml-4 mt-0',
          )}
        >
          {chunkedDuties[1].map((duty, i) => (
            <li key={i} className="mb-3">
              <p className="text-sm lg:text-base">{duty}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        {/* Only show the 'View More' button if their actually is more duties to show */}
        {chunkedDuties[1].length > 0 && (
          <Button
            type="tertiary"
            className="my-3 relative group"
            onClick={() => {
              setDutiesExpanded(expanded => !expanded)
            }}
          >
            {dutiesExpanded ? 'View Less' : 'View More'}{' '}
            {dutiesExpanded ? (
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
        )}
        <p className="text-sm font-bold text-zinc-600 selection:bg-red-700 selection:text-white mb-3">
          Skills:{' '}
          <span className="font-normal">{details.skills.join(', ')}</span>
        </p>
      </div>
    </div>
  )
}

export default Job
