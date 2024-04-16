import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { rootReducher } from "./reducher";
import {thunk} from "redux-thunk";



export const configureStore = () => {

    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['facility','auth', 'cart'] 
    };

    const persistedReducer = persistReducer(persistConfig, rootReducher);

    const store = createStore(persistedReducer, applyMiddleware(thunk)); 
    // const store = createStore(rootReducher, applyMiddleware(thunk)); 

     const persistor = persistStore(store);

     return store;
};
