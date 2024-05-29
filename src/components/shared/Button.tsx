import { FC, ReactElement, ReactNode } from 'react'
import cn from 'classnames'

type ButtonProps = {
  children: ReactElement | ReactNode
  type: 'primary' | 'secondary'
  className?: string
}

const Button: FC<ButtonProps> = ({ children, type, className = '' }) => {
  const primaryStyles = `
    bg-red-600 hover:bg-red-700 
    text-white font-bold 
  `
  const secondaryStyles = `
    border border-red-600 hover:border-red-700
    text-red-600 hover:text-red-700 
  `

  return (
    <a
      href="#"
      className={cn(
        {
          [primaryStyles]: type === 'primary',
          [secondaryStyles]: type === 'secondary',
        },
        `
          rounded-full 
          block md:inline-block 
          py-2 px-4 md:py-4 md:px-6
          transition-colors duration-300
        `,
        className,
      )}
    >
      {children}
    </a>
  )
}

export default Button
