// import { legacy_createStore as createStore } from "redux";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

import { configureStore, combineReducers } from "@reduxjs/toolkit";


import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import ShoppingCartReducer from './reducers/reducers'

// persist Config
const persistConfig = {
    key: 'root',
    storage,
}

const allReducer = combineReducers({
    All_items: ShoppingCartReducer
})

const persistedReducer = persistReducer(persistConfig, allReducer)


const myStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



// const myStore = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

// const myStore = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

export default myStore





/*
    import { configureStore } from "@reduxjs/toolkit";
    import Reducer from "./reducers/allReducers";
    
    const myStore = configureStore({
        reducer: {
            All_items: Reducer(ShoppingCartReducer)
        },
    })

    export default myStore
 
*/ 