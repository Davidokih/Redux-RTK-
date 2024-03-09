import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './reducers'
import { RtkSlice } from "./RTK";

export const store = configureStore({
    reducer: {
        CounterReducer,[RtkSlice.reducerPath]: RtkSlice.reducer
    },
    middleware: (getAllMiddelware)=> getAllMiddelware().concat(RtkSlice.middleware)
})