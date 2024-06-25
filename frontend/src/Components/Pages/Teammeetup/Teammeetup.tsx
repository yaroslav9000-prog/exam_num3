import { useEffect, useState } from "react";
import "./Teammeetup.css";
import axios from "axios";
// import axios from "axios";



function Teammeetup(): JSX.Element {
    const [teams, setTeams] = useState<any>([]);
    const [selected, setSelected] = useState();
    const [meetups, setMeetups] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("http://localhost:3500/api/teams");
            setTeams(response.data);
        }
        fetchData();
    },[])

    useEffect(()=>{
        const fetchMeetups = async (selected: number)=>{
            const data = await axios.get("http://localhost:3500/api/teams" + "/" + selected)
            setMeetups(data.data);
        }
        selected&& fetchMeetups(selected);
    }, selected)


    const onChange= (e: any) =>{
        setSelected(e.target.value);
    }
    return (
        <div className="Teammeetup">
            <h1>team meetup</h1>
            <div>
            <label htmlFor="team">Choose Your team</label>
            <select onChange={(e)=>onChange(e)} name="teams" id="teams">
            <option value="default">Please pick</option>
                {teams.map((item:any,index:number)=>(
                    
                    <option value={item.id} key={index}>{item.dev_team_name}</option>
                    ))}
            </select>
            </div>
            {meetups.map((item:any,index)=>(
                <div className="Box" key={index}>
                    <h3>Team id: {item.dev_team_id}</h3>
                    <h3>Meetup id: {item.id}</h3>
                    <h3>Meetup start: {item.meeting_start}</h3>
                    <h3>Meetup end: {item.meeting_end}</h3>
                    <h3>Desc: {item.protocol}</h3>
                </div>
            ))}

            
        </div>
    );
}

export default Teammeetup;
