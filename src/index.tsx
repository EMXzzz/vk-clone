import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './components/layout/layout';
import {Home} from './components/pages/home/home';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Home/>
        </Layout>
    </React.StrictMode>,
  document.getElementById('root')
);