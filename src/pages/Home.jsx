import React from 'react'
import Hero from '../components/hero/Hero'
import Tools from '../components/tools/Tools'
import Project from '../components/project/Project'
import ContantCta from '../components/contentCta/ContantCta'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Tools/>
      <Project/>
      <ContantCta/>
    </div>
  )
}

export default Home