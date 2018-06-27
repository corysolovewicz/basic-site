import React from 'react';

import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';

const FooterComponent = () => (
  <Footer justify='between'>
    <Box direction='row'
      align='center'
      pad={{ between: 'medium' }}>
      <Paragraph margin='none'>
        Copyright © {(new Date()).getFullYear()} Cory Solovewicz
      </Paragraph>
    </Box>
  </Footer>
);

export default FooterComponent;
