import profilePic from '../assets/me.jpg'

const Hero = () => {
  return (
    <div>
      {/* image size can be reduced since we're only using it as a 115px image */}
      <img
        src={profilePic}
        className="w-20 lg:w-28 rounded-full ml-3"
        alt="Ethan Kramer in a suit coat at a nice restaurant"
      />
      <div className="mt-3">
        <p className="text-xl text-zinc-600 font-bold p-3 pb-0">Ethan Kramer</p>
        <h1 className="text-3xl md:text-4xl text-red-500 font-bold p-3">
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
        <p className="text-base text-zinc-600 pt-2 px-3 md:py-3">
          As a seasoned engineer with over ten years of experience, I thrive on
          owning every part of the system, from front-end to back-end, as well
          as the infrastructure with Terraform and AWS (Amazon Web Services). I
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
      <div className="px-3 py-4">
        {/* Extract these to button components, with primary and secondary types the margin will have to be optional, pass in className attr */}
        <a
          href="#"
          className="
            bg-red-500 hover:bg-red-700 
            text-white font-bold 
            rounded-full 
            block md:inline-block 
            py-2 px-4 md:py-4 md:px-6 
            mb-4 md:mr-4 md:mb-0 
            transition-colors duration-300"
        >
          See My Experience &darr;
        </a>
        <a
          href="#"
          className="
            border border-red-500 hover:border-red-700 
            rounded-full 
            block md:inline-block 
            py-2 px-4 md:py-4 md:px-6 
            text-red-500 hover:text-red-700 
            transition-colors duration-300"
        >
          Check Out My Skills
        </a>
      </div>
    </div>
  )
}

export default Hero
