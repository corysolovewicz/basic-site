import React from 'react';

import App from 'grommet/components/App';

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Blog = () => (
  <App centered={false} >
    <Header />
    <Hero />
    <div>
      <p>Blog Goes here</p>
    </div>
    <Footer />
  </App>
);

export default Blog;
