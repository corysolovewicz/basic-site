import React from 'react'
import { Link } from 'react-router-dom'; 

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box'; 
import Actions from 'grommet/components/icons/base/Actions';

const HeaderComponent = () => (
	<Header splash={false}
	  float={false}
	  fixed={false}
	  size='small'
	  colorIndex='light-2'>
		<Heading align='center'>
		</Heading>
		<Box flex={true}
		  justify='end'
		  direction='row'
		  responsive={false}>
		</Box>
		<Menu icon={<Actions />}
		  dropAlign={{"right": "right"}}>
			<Anchor href='https://github.com/corysolovewicz' 
			  className='active'>
				My Github
			</Anchor>
			<Anchor href='mailto:cory@solovewi.cz'>
				My Email
			</Anchor>
			<Anchor href='https://twitter.com/corysolovewicz'>
				My Twitter
			</Anchor>
			<Anchor>
				<Link to='/Test'>
					Test
				</Link>
			</Anchor>
		</Menu>
	</Header>
)

export default HeaderComponent