import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/SongSlice'

export const store = configureStore({
    reducer,
    devTools:true,
})