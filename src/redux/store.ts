import { configureStore } from "@reduxjs/toolkit"; 
import storage  from "redux-persist/lib/storage";
import counterReducer from './features/counter.slice';

const persistConfig = {
    key: "root",
    storage
}

export const store = configureStore({
    reducer: {
        counterReducer
    },
    devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;