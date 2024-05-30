import { FC } from 'react'

import Hero from './Hero'
import Nav from './Nav'

const App: FC = () => {
  return (
    <div className="lg:container lg:mx-auto p-4 bg-white shadow-sm lg:shadow relative">
      <Nav />
      <Hero />
    </div>
  )
}

export default App
