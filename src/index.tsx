import React from 'react';
import ReactDOM from 'react-dom';

import {Routes} from './components/layers/routes';

import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <Routes/>
    </React.StrictMode>,
  document.getElementById('root')
);