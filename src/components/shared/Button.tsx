import { FC, ReactElement, ReactNode } from 'react'
import cn from 'classnames'

type ButtonProps = {
  children: ReactElement | ReactNode
  type: 'primary' | 'secondary'
  className?: string
}

const Button: FC<ButtonProps> = ({ children, type, className = '' }) => {
  const primaryStyles = `
    bg-red-600 hover:bg-red-700 focus:bg-red-700
    text-white font-bold
    selection:bg-white selection:text-red-700
  `
  const secondaryStyles = `
    border border-red-600 hover:border-red-700
    text-red-600 focus:text-red-700 hover:text-red-700 
    selection:bg-red-700 selection:text-white
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
          focus:outline focus:outline-red-700
          rounded-full 
          block md:inline-block 
          py-2 px-4 md:py-4 md:px-6
          text-center md:text-left
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
