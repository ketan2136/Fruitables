import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { rootReducher } from "./reducher";
import {thunk} from "redux-thunk";
// import  thunk  from "redux-thunk";



export const configureStore = () => {
    const persistConfig = {
        key: 'root',
        storage: storage,
        whitelist: ['facility', 'auth'] // Correct the reducer name
    };

    const persistedReducer = persistReducer(persistConfig, rootReducher);

    let store = createStore(persistedReducer, applyMiddleware(thunk)); // Pass persistedReducer to createStore
     const persistor = persistStore(store);
    return store;
};
