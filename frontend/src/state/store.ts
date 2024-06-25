import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from "./teams/teamsSlice";

export const store = configureStore({
    reducer:{
        teams: teamsReducer
    }
})



export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;