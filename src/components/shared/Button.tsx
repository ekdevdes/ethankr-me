import { FC, ReactElement, ReactNode } from 'react'
import cn from 'classnames'

type ButtonProps = {
  children: ReactElement | ReactNode
  type: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className = '',
}) => {
  const primaryStyles = `
    bg-red-600 hover:bg-red-700 focus:bg-red-700
    text-white font-bold
    selection:bg-white selection:text-red-700
    py-2 px-4 md:py-4 md:px-6
    focus:outline focus:outline-red-700
  `
  const secondaryStyles = `
    border border-red-600 hover:border-red-700
    text-red-600 focus:text-red-700 hover:text-red-700 
    selection:bg-red-700 selection:text-white
    py-2 px-4 md:py-4 md:px-6
    focus:outline focus:outline-red-700
  `
  const tertiaryStyles = `
    text-red-600 focus:text-red-700 hover:text-red-700 
    selection:bg-red-700 selection:text-white
    focus:underline hover:underline
  `

  return (
    <button
      type="button"
      className={cn(
        {
          [primaryStyles]: type === 'primary',
          [secondaryStyles]: type === 'secondary',
          [tertiaryStyles]: type === 'tertiary',
        },
        `
          rounded-full 
          block md:inline-block 
          text-center md:text-left
          transition-colors duration-300
        `,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
