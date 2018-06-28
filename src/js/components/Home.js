import React, { Component } from 'react';

import App from 'grommet/components/App';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Columns from 'grommet/components/Columns';

import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialBitcoinIcon from 'grommet/components/icons/base/SocialBitcoin';

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

export default class BasicApp extends Component {
  render() {
    return (
      <App centered={false} >
        <Box colorIndex='light-1' full={true} >
          <Box>
            <Header />
            <Hero />
            <Headline strong={false} size='medium' align='center' />
            <Columns size='small'
              justify='center'
              maxCount={4}
              masonry={false}>
              <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
                <Anchor icon={<SocialGithubIcon size='large' />}
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
            <p>
              <strong>
                OpenPGP Fingerprint: 7A27 E28E 05C3 7339 F78C A730 912D BEAA EFAB 2728
              </strong>
            </p>
          </Box>
        </Box>
        <Footer />
      </App>
    );
  }
}
