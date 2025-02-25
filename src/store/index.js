import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slice/watchListSlice';
import MoviewSlice from './slice/moviewSlice';


export const store = configureStore({
    reducer:{
        watchList:watchListSlice,
        movies:MoviewSlice

    }
})


