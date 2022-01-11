import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';
import {ResultContextProvider} from './Contexts/ResultContextProvider'

ReactDOM.render(
    <React.StrictMode>
        <ResultContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ResultContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
