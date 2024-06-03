import { FC } from 'react'
import { IconType } from '../types/skills'

import SvgIcon from './shared/SvgIcon'

type SkillProps = {
  name: string
  id: IconType | string
}

const Skill: FC<SkillProps> = ({ name, id }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow p-4 ml-3">
      <SvgIcon id={id} className="w-14 fill-zinc-300 hover:fill-zinc-600" />
      <p className="text-base text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white mt-2">
        {name}
      </p>
    </div>
  )
}

export default Skill
