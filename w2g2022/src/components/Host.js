import React, { useState } from 'react'
import "./css/host.css";
import { useNavigate } from "react-router-dom"
import { createUser } from "./Controller/UserController";
import { createRoom } from "./Controller/RoomController";
import ReactPlayer from 'react-player';

const Host = () => {
	const [inp, setInput] = useState('')
	const navigate = useNavigate()
	const handleButton = () => {		// gives button its funktion
		//submit user
		const user = createUser(inp)
		user = createRoom(user)
		window.sessionStorage.setItem("id", user.id);
		window.sessionStorage.setItem("name", user.name);
		window.sessionStorage.setItem("room", user.roomname);
		navigate('/Watchparty');
		// Save data to sessionStorage
	}

	return (
		<>
			<body>
				<div>
					<div class="hosttitle_text">
						<h1 class="hosttitle">Erstellen sie einen eigenen Raum für ihre Watchparty!</h1>
					</div>
					<div class="host_text">
						<p class="host_textbox">Bitte geben Sie einen Benutzernamen ein um einen Raum zu erstellen.</p>
					</div>
					<div class="input">
						<div class="eins">
							<input type="text" class="input_box" placeholder="Benutzernamen eingeben zb.: Floppa" value={inp} onChange={(change) => setInput(change.target.value)}></input>
						</div>
						<div class="zwei">
							<button onClick={event => handleButton()} className="host_button">Raum erstellen</button>
						</div>
					</div>
				</div>
				<div class="player">
				<ReactPlayer controls url="https://www.youtube.com/watch?v=4LdA_PpeSz0" width={1280} height={720} name="testplayer"/>
					</div>
			</body>
		</>
	);
};

export default Host;
