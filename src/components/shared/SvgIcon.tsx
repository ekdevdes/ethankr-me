import { FC } from 'react'
import { IconType } from '../../types/skills'

type SvgIconProps = {
  id: IconType
  viewBox?: string
  className?: string
}

const SvgIcon: FC<SvgIconProps> = ({
  id,
  viewBox = '0 0 128 128', // most icons are this size
  className = '',
}) => {
  return (
    <svg viewBox={viewBox} className={className}>
      <use href={`#${id}`} />
    </svg>
  )
}

export default SvgIcon
