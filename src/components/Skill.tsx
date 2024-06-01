import { FC } from 'react'
import { IconType } from '../types/skills'

import SvgIcon from './shared/SvgIcon'

type SkillProps = {
  name: string
  id: IconType
}

const Skill: FC<SkillProps> = ({ name, id }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow p-4 ml-3">
      <SvgIcon id={id} className="w-14" />
      <p>{name}</p>
    </div>
  )
}

export default Skill
