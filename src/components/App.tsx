import { FC } from 'react'

import Hero from './Hero'

const App: FC = () => {
  return (
    <div className="lg:container lg:mx-auto p-4 bg-white shadow-sm lg:shadow">
      <Hero />
    </div>
  )
}

export default App
