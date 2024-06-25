import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Team} from "../../Models/Team";
import axios from "axios";

interface TeamsSlice{
    value: Team[];
}

const initialState: TeamsSlice = {
    value: []
}
const teamsSlice = createSlice({
    name: "teams",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(getTeamsAsync.fulfilled, (state, action:PayloadAction<Team[]>)=>{
            state.value = [...action.payload];            
        })
    }
})
export const getTeamsAsync = createAsyncThunk(
    "teams/getTeamsAsync",
    async ()=>{
        const response = await axios.get("http://localhost:3500/api/teams");
        const data = response.data.map((item:any)=>new Team(item.id, item.dev_team_name));
        return data;   
    }
)


export default teamsSlice.reducer;