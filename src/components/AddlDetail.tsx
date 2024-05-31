import { FC } from 'react'
import { Job } from '../types/experience'

import Detail from './Detail'

type AddlDetailProps = {
  title: string
  details: Job
}

const AddlDetail: FC<AddlDetailProps> = ({ title, details }) => {
  return (
    <div className="mb-4">
      <p className="text-xl text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white mb-4">
        {title}
      </p>
      <div className="ml-3">
        <Detail details={details} type="edu" />
      </div>
    </div>
  )
}

export default AddlDetail
