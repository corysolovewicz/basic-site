import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../scss/index.scss';

import App from './components/App';

const element = document.getElementById('content');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), element);

document.body.classList.remove('loading');
