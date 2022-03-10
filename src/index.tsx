import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {AuthRoute} from './layers/auth-route';

import './firebase-init-app';

import './index.css';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthRoute/>
        </BrowserRouter>   
    </React.StrictMode>,
  document.getElementById('root')
);