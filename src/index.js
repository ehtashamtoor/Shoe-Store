import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import myStore from './store';


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}>
        <App />
    </Provider>
);