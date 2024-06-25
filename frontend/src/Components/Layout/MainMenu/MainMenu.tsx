import "./MainMenu.css";
import {NavLink} from "react-router-dom";
function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
			<NavLink to="/">Home Page</NavLink>
			<NavLink to="/teams">Teams list</NavLink>
			<NavLink to="/teams/meetups">Team's meetings</NavLink>
            <NavLink to="/teams/meetups/add">Add new meetup</NavLink>
        </div>
    );
}

export default MainMenu;
