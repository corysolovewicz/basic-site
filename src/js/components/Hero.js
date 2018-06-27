import React from 'react'

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box'; 
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

const HeroComponent = () => (
  <Hero background={<Image src='/img/hexdump_genesis_block_cory_solovewicz.png'
    fit='cover'
    full={true} />}
    align={{"top": true}} 
    backgroundColorIndex='dark'
    size='small' >
    <Box direction='row'
        justify='center'
        align='center'>
      <Box basis='1/2'
        align='end'
        pad='medium' />
      <Box basis='1/2'
        align='start'
        pad='medium'>
        <Card heading='Solovewicz'
      description='Fullstack Developer, Crypto Geek, And Contributor to Open Source'
      label='Cory'
      link={<Anchor href='mailto:cory@solovewi.cz'
      primary={true}
      label='Contact Me' />} />
      </Box>
    </Box>
  </Hero>
)

export default HeroComponent