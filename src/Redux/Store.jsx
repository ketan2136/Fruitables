import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { rootReducher } from "./reducher";
import  thunk  from "redux-thunk";
// import  thunk  from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['facility'] // Correct the reducer name
};

const persistedReducer = persistReducer(persistConfig, rootReducher);

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk)); // Pass persistedReducer to createStore

    return store;
};
