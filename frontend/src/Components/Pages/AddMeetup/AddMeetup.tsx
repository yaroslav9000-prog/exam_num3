import axios from "axios";
import "./AddMeetup.css";
import {FormSubmitHandler, SubmitHandler, useForm} from "react-hook-form";
type formValues = {
    teamID: string,
    meetingStart: string,
    meetingEnd: string,
    desc: string,
    room: string,
}
function AddMeetup(): JSX.Element {
    const {register, handleSubmit, reset, formState :{ errors}} = useForm<formValues>();
    //reqBody.teamID, reqBody.meetingStart, reqBody.meetingEnd, reqBody.desc, reqBody.room
    const onSubmit = async (data: formValues)=>{
        try{
            axios.post("http://localhost:3500/api/teams/add_meetup", data);
        }catch(errors){
            console.log(errors);
        }
    };
    const onError = () =>{
        console.log(errors);
    }
    return (
        <div className="AddMeetup">
			<form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="teamID">Team ID</label>
                <input type="number" placeholder="Team ID" {...register("teamID", {required: true})} id="teamID" />
                <label htmlFor="meetingStart"></label>
                <input type="datetime-local" placeholder="Meeting start" {...register("meetingStart",{required: true})} id="meetingStart"/>
                <label htmlFor="meetingEnd">Meeting End</label>
                <input type="datetime-local" placeholder="Meeting end" {...register("meetingEnd",{required: true})} id="meetingEnd"/>
                <label htmlFor="desc">Description</label>
                <input type="text" placeholder="Description" {...register("desc",{required: true})} id="desc"/>
                <label htmlFor="room">Room name</label>
                <input type="text" placeholder="Room Name" {...register("room",{required: true})} id="room"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default AddMeetup;
