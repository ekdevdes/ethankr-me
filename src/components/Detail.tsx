import { FC, useState } from 'react'
import has from 'lodash/has'
import get from 'lodash/get'
import cn from 'classnames'
import { Job } from '../types/experience'
import chunk from '../utils/chunk'

import Button from './shared/Button'

type DetailProps = {
  details: Job
  type?: 'exp' | 'edu'
}

const Detail: FC<DetailProps> = ({ details, type = 'exp' }) => {
  const duties = get(details, 'duties', [])
  const skills = get(details, 'skills', [])

  // Break jobs with alot of duties and skills into more manageable sizes
  const chunkedDuties = chunk(duties, 3)
  const chunkedSkills = chunk(skills, 15)
  const shouldShowViewMoreButton =
    chunkedDuties[1].length > 0 || chunkedSkills[1].length > 0

  const [expanded, setExpanded] = useState<boolean>(false)

  // If we don't have a to date for job listings say "to Current" for edu listings don't show a to date
  const dates = has(details, 'year_to') ? (
    <>
      &nbsp;to <span>{details.year_to}</span>
    </>
  ) : (
    <>
      {type === 'exp' ? (
        <>
          to <span>Current</span>
        </>
      ) : null}
    </>
  )

  // Breaking up the listing out of the job responsibilities for easier readability
  const _duties = (
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
            hidden: !expanded,
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
  )

  const viewMoreButton = (
    <Button
      type="tertiary"
      className="my-3 relative group"
      onClick={() => {
        setExpanded(isExpanded => !isExpanded)
      }}
    >
      {expanded ? 'View Less' : 'View More'}{' '}
      {expanded ? (
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
  )

  return (
    <div
      className="shadow rounded-lg md:mr-4 mb-6 p-4 flex flex-col"
      id="experience"
    >
      <p className="text-sm font-bold text-zinc-600 selection:bg-red-700 selection:text-white">
        <span>{details.year_from}</span>
        {dates}
        <span className="mx-1">&middot;</span>
        <span>{details.company}</span>
        {has(details, 'type') && <>&nbsp;&middot; {details.type}</>}
      </p>
      <p className="text-xl text-red-600 font-bold mb-3 selection:bg-red-700 selection:text-white">
        {details.position}
      </p>
      {type === 'exp' && <>{_duties}</>}
      {type === 'exp' && (
        <div className="mt-auto">
          <p className="text-sm font-bold text-zinc-600 selection:bg-red-700 selection:text-white mb-3">
            Skills:{' '}
            <span className="font-normal">{chunkedSkills[0].join(', ')}</span>
            {expanded && chunkedSkills[1].length > 0 && (
              <span className="font-normal">
                , {chunkedSkills[1].join(', ')}
              </span>
            )}
          </p>
          {/* Only show the 'View More' button if there actually is more duties to show */}
          {shouldShowViewMoreButton ? (
            <>{viewMoreButton}</>
          ) : (
            <>
              {/* A spacer to align the skills evenly, not necessary on mobile since we stack the exp cards */}
              <div className="md:p-8 lg:p-6"></div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Detail
