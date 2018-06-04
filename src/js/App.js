import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Headline from 'grommet/components/Headline'; 
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box'; 
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialBitcoinIcon from 'grommet/components/icons/base/SocialBitcoin';



export default class BasicApp extends Component {
  render() {
    return (
      <App centered={false} >
      <Box colorIndex='light-1' full={true} >
      <Box>

	      <Header splash={false}
				  float={false}
				  fixed={false}
				  size='large'
				  colorIndex='grey-4-a'>
				  <Heading>
 						Sample Heading
 				  </Heading>
					  <Box flex={true}
					    justify='end'
					    direction='row'
					    responsive={false}>
					  </Box>
				</Header>

				<Hero background={<Image src='/img/code.0.jpg'
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
				      <Heading margin='none'>

				      </Heading>
				      <Card heading='Heading'
          description='Hero description text.'
          label='label'
          link={<Anchor href='#'
          primary={true}
          label='Link' />} />
				    </Box>
				  </Box>
				</Hero>

        <Title>Title</Title>
        
        <Headline strong={false} size='large'>
  				Sample Headline
				</Headline>

        <p>Hello from a Grommet page!</p>
        	<Anchor icon={<SocialGithubIcon size='large'/>}
  					label=''
  					href='https://github.com/corysolovewicz' />
				        
        	<Anchor icon={<SocialMailIcon size='large' />}
  					label=''
  					href='mailto:cory@solovewi.cz' />

         	<Anchor icon={<SocialTwitterIcon size='large' />}
  					label=''
  					href='https://twitter.com/corysolovewicz' />
				        
				        
         	<Anchor icon={<SocialBitcoinIcon size='large' />}
  					label=''
  					href='bitcoin:1AWseegSxz66JMQGuvNyGbu7uSB6C9ZBMF' />

      </Box>
      </Box>
      </App>
    );
  }
}
