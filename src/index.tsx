import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {AuthRoute} from './layers/auth-route';

import * as firebase from 'firebase/app';

import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyBpGtMgMGT7yHyivLUw_uJjUfiweqL9WFY",
    authDomain: "vk-copy-c43ef.firebaseapp.com",
    projectId: "vk-copy-c43ef",
    storageBucket: "vk-copy-c43ef.appspot.com",
    messagingSenderId: "621613126855",
    appId: "1:621613126855:web:11b7f410ac581a8b01dae2"
})

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthRoute/>
        </BrowserRouter>   
    </React.StrictMode>,
  document.getElementById('root')
);