import { useEffect, useState } from "react";
import "./Teams.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { Team } from "../../../Models/Team";
// import axios from "axios";




function Teams(): JSX.Element {
    
    const teams: Team[] = useSelector((state:RootState)=>{
        return state.teams.value
    })
    
    return (
        <div className="Teams">
            {teams.length > 0?
            
            teams.map((item:any, index:number)=>(
                <div key={index} className="Box">
                    <h3>{item.id}</h3>
                    <h3>ID: {item.dev_team_name}</h3>
                </div>
            )):
            <h1>Not working</h1>
        }
        </div>
    );
}

export default Teams;
