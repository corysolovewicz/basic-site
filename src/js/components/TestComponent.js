import React from 'react';

import App from 'grommet/components/App';

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const TestComponent = () => (
  <App centered={false} >
    <Header />
    <Hero />
    <div>
      <ul>
        <li>This is an America</li>
      </ul>
    </div>
    <Footer />
  </App>
);

export default TestComponent;
