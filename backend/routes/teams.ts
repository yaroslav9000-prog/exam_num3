import express, {Request, Response, NextFunction} from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
import { getTeamMeetings, getAllTeams, addMeeting } from "../Controllers/devTeams";


const teamsRouter = express.Router();

teamsRouter.get("/api/teams/:id", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const teamMeetups = await getTeamMeetings(req.params.id);
        await res.status(200).json(teamMeetups);
    }catch(err){
        console.error(err);
    }
})


teamsRouter.get("/api/teams", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const teams = await getAllTeams();
        await res.status(200).json(teams);
    }catch(err){
        console.log(err)
    }
    next()
})

teamsRouter.post("/api/teams/add_meetup", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const reqBody = req.body;
        await addMeeting(reqBody.teamID, reqBody.meetingStart, reqBody.meetingEnd, reqBody.desc, reqBody.room);
        res.status(200).json({"msg": "meeting is scheduled"});
    }catch(err){
        console.log(err);
    }
    next()
})



export{
    teamsRouter,
}