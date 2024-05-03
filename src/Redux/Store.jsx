import { rootReducher } from "./reducher";
import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"; // Corrected the import
import {thunk} from "redux-thunk"; // Corrected the import
import createSagaMiddleware from 'redux-saga'

export const configureStore = () => {

    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['facility', 'auth', 'cart', 'users', 'userNew', 'review'] 
    };

    // const sagaMiddleware = createSagaMiddleware();
    
    // const middlewares = [thunk, sagaMiddleware]; // Combine middlewares

    const persistedReducer = persistReducer(persistConfig, rootReducher); 

    const store = createStore(
        persistedReducer,
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store);

    return { store, persistor };
};

export const { store } = configureStore(); 
export const persistor = persistStore(store);
