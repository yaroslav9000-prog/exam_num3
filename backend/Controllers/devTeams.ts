import express from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
const getAllTeams = async () =>{
    try{
        const sql = `
        SELECT * from dev_teams 
        `;
        return await execute(sql);
    }catch(err){
        console.log(err)
    }
}

const getTeamMeetings = async (teamID: string) =>{
    
    try{
        const sql= `
        SELECT * FROM meetups WHERE dev_team_id = ${teamID}
    `
        return await(execute(sql));
    }catch(err){
        console.error(err);
    }
}

const addMeeting = async  (teamID: string, meetingStart: string, meetingEnd: string, desc: string, room: string)=>{

    try{
        await execute("set foreign_key_checks = 0")
        const sql = `
        insert into meetups values(0, ${parseInt(teamID)}, "${meetingStart}", "${meetingEnd}", "${desc}", "${room}")`;
        await execute(sql);
    }catch(err){
        console.log(err);
    }
}
export{
    getAllTeams,
    getTeamMeetings,
    addMeeting
}