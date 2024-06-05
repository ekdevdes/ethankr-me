import { FC } from 'react'
import SvgIcon from './shared/SvgIcon'

const Nav: FC = () => {
  return (
    <nav className="shadow rounded-full fixed bg-white right-5 lg:right-28 xl:right-32 2xl:right-52 z-10 p-3 pr-1">
      <ul className="flex">
        <li className="mr-2">
          <a
            href="https://github.com/ekdevdes"
            target="_blank"
            rel="noopener"
            className="group"
          >
            <SvgIcon
              id="github"
              className="w-6 fill-zinc-300 hover:fill-zinc-500 transition-colors"
            />
            <span className="sr-only">View my Github profile</span>
          </a>
        </li>
        <li className="mr-2">
          <a
            href="https://linkedin.com/in/ethankr"
            target="_blank"
            rel="noopener"
            className="group"
          >
            <SvgIcon
              id="linkedin"
              viewBox="0 0 24 24"
              className="w-6 fill-zinc-300 hover:fill-zinc-500 transition-colors relative top-[1px]"
            />
            <span className="sr-only">View my LinkedIn profile</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
