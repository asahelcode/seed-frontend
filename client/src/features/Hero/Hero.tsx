import React from 'react'
import { Container } from '@material-ui/core'

import HeroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <Container maxWidth='md'>
      <img src={HeroImg} alt="" width="100%" />
    </Container>
  )
}

export default Hero