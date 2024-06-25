import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Switch from "../../Pages/Teammeetup/Teammeetup";
import Teams from "../../Pages/Teams/Teams";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Teammeetup from "../../Pages/Teammeetup/Teammeetup";
import { useEffect, useState } from "react";
import AddMeetup from "../../Pages/AddMeetup/AddMeetup";
import { Team } from "../../../Models/Team";
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "../../../state/store";
import { Dispatch } from "@reduxjs/toolkit";
import { setTimeout } from "timers/promises";
import { getTeamsAsync } from "../../../state/teams/teamsSlice";

function Main(): JSX.Element {
    const teams: Team[] = useSelector((state:RootState)=>{
        return state.teams.value
    })
    const dispatch = useDispatch<appDispatch>();
    const updateTime = 1000 * 60 * 2;
    dispatch(getTeamsAsync);
    setInterval(()=>{
        dispatch(getTeamsAsync);
    }, updateTime);
    return (
        <div className="Main">
			<Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/teams" element={<Teams/>}/>
                <Route path="/teams/meetups" element={<Teammeetup/>}/>
                <Route path="/teams/meetups/add" element={<AddMeetup/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default Main;
