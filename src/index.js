import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import myStore from './store';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(myStore)


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);