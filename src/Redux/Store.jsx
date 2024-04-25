// import { applyMiddleware, createStore } from "redux";
// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from "redux-persist";
import { rootReducher } from "./reducher";
// import {thunk} from "redux-thunk";



// export const configureStore = () => {

//     const persistConfig = {
//         key: 'root',
//         storage: storage,
//         whitelist: ['facility', 'auth', 'cart'] 
//     };

//     const persistedReducer = persistReducer(persistConfig, rootReducher);

//     const store = createStore(persistedReducer, applyMiddleware(thunk)); 
//     // const store = createStore(rootReducher, applyMiddleware(thunk)); 

//      const persistor = persistStore(store);

//      return store;
// };


// export const store = configureStore();
// export const persistor = persistStore(store);


import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"; // Corrected the import
import {thunk} from "redux-thunk"; // Corrected the import
import createSagaMiddleware from 'redux-saga'

export const configureStore = () => {

    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['facility', 'auth', 'cart', 'users', 'userNew'] 
    };

    const sagaMiddleware = createSagaMiddleware();
    
    const middlewares = [thunk, sagaMiddleware]; // Combine middlewares

    const persistedReducer = persistReducer(persistConfig, rootReducher); // Use rootReducer

    const store = createStore(
        persistedReducer,
        applyMiddleware(...middlewares)
    );

    const persistor = persistStore(store);

    return { store, persistor };
};

export const { store } = configureStore(); // Destructure store and persistor
// export const store = configureStore();
export const persistor = persistStore(store);
console.log(store);