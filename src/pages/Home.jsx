import React from 'react'
import Hero from '../components/hero/Hero'
import Tools from '../components/tools/Tools'
import MainProject from '../components/project/MainProject'
import MiniProject from '../components/project/MiniProject'
import Project from '../components/project/Project'
import ContantCta from '../components/contentCta/ContantCta'
import TeamProjects from '../components/teamProjects/TeamProjects'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Tools/>
      <MainProject/>
      <TeamProjects/>
      <MiniProject/>
      <ContantCta/>
    </div>
  )
}

export default Home