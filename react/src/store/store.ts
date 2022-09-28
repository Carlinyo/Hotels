import { configureStore } from "@reduxjs/toolkit";
import BuscketReducer from "./reducers/BuscketReducer/BuscketReducer";
import HotelReducer from "./reducers/HotelReducer/HotelReducer";



export const store = configureStore({
    reducer:{
        gHreducer:HotelReducer,
        BsctReducer : BuscketReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch