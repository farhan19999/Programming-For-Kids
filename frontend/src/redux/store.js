import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export let store = configureStore({
    reducer:{
        user : persistedReducer
    },
    middleware :[thunk]
})

export let persistor = persistStore(store)
