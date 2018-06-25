import React, { Component } from 'react';


import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Headline from 'grommet/components/Headline'; 
import Box from 'grommet/components/Box'; 
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Columns from 'grommet/components/Columns';


import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialBitcoinIcon from 'grommet/components/icons/base/SocialBitcoin';

import Header from './Header'; 
import Footer from './Footer';

export default class BasicApp extends Component {
  render() {
    return (
      <App centered={false} >
      <Box colorIndex='light-1' full={true} >
      <Box>
      <Header />


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
        
        <Headline strong={false} size='medium' align='center'>
  				
				</Headline>
        	
					<Columns size='small'
					  justify='center'
					  maxCount={4}
					  masonry={false}>
					  <Box align='center'
					    pad='medium'
					    margin='small'
					    colorIndex='light-2'>
					    <Anchor icon={<SocialGithubIcon size='large'/>}
  					label=''
  					href='https://github.com/corysolovewicz' />
					  </Box>
					  <Box align='center'
					    pad='medium'
					    margin='small'
					    colorIndex='light-2'>
					    <Anchor icon={<SocialMailIcon size='large' />}
  					label=''
  					href='mailto:cory@solovewi.cz' />
					  </Box>
					  <Box align='center'
					    pad='medium'
					    margin='small'
					    colorIndex='light-2'>
					    <Anchor icon={<SocialTwitterIcon size='large' />}
  					label=''
  					href='https://twitter.com/corysolovewicz' />
					  </Box>
					  <Box align='center'
					    pad='medium'
					    margin='small'
					    colorIndex='light-2'>
					    <Anchor icon={<SocialBitcoinIcon size='large' />}
  					label=''
  					href='bitcoin:3CorySf8ZY6k8xCmnHMjgLRTNsVbUTpfEe' />
					  </Box>
					</Columns>
      	</Box>
      	<Box align='center'>
      	<p><strong>OpenPGP Fingerprint: 7A27 E28E 05C3 7339 F78C A730 912D BEAA EFAB 2728</strong></p>
				</Box>      
      </Box>
      <Footer/>
      </App>
    );
  }
}
