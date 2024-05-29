import { FC } from 'react'

import Button from './shared/Button'
import profilePic from '../assets/me.jpg'

const Hero: FC = () => {
  return (
    <div>
      {/* image size can be reduced since we're only using it as a 115px image */}
      <img
        src={profilePic}
        className="min-w-20 lg:min-w-28 w-20 lg:w-2 rounded-full ml-3"
        width="125"
        alt="Ethan Kramer in a suit coat at a nice restaurant"
      />
      <div className="mt-3">
        <p className="text-xl text-zinc-600 font-bold p-3 pb-0 selection:bg-red-700 selection:text-white">
          Ethan Kramer
        </p>
        <h1 className="text-3xl md:text-4xl text-red-600 font-bold p-3 selection:bg-red-700 selection:text-white">
          <p>
            <span aria-hidden="true">🎨</span> Pixel Pusher
          </p>
          <p>
            <span aria-hidden="true">💻</span> Data Nerd
          </p>
          <p>
            <span aria-hidden="true">☁️</span> Cloud Enthusiast
          </p>
        </h1>
        <p className="text-sm md:text-base text-zinc-600 pt-2 px-3 md:py-3 selection:bg-red-700 selection:text-white">
          As a seasoned engineer with over ten years of experience, I thrive on
          owning every part of the system, from front-end to back-end, as well
          as the infrastructure with Terraform and Amazon Web Services (AWS). I
          firmly believe that software engineering is a team sport. It's not
          only about building the most technically robust solution, but
          collaborating with a team of individuals, each highly skilled in their
          own areas, to craft the best solutions for customers. Because in the
          end, the best technology isn’t just about technical excellence — it’s
          about creating something that seamlessly enhances people’s lives,
          allowing them to focus on what truly matters: living life, making
          memories and being present for the moments that matter.
        </p>
      </div>
      <div className="px-3 pt-6 md:pt-4 pb-4">
        <Button
          type="primary"
          className="mb-4 md:mr-4 md:mb-0 lg:pr-10 relative group text-center md:text-left"
        >
          See My Experience
          <span
            aria-hidden="true"
            className="ml-2 absolute top-4 transition-transform group-hover:translate-y-2 hidden lg:inline-block"
          >
            &darr;
          </span>
        </Button>
        <Button type="secondary" className="text-center md:text-left">
          Checkout My Skills
        </Button>
      </div>
    </div>
  )
}

export default Hero
