import React from 'react';
import './index.css';
import App from './components/App/App';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
