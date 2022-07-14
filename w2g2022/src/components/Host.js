import React, { useState } from 'react'
import "./css/host.css";
import {useNavigate} from "react-router-dom"
import {  createUser } from "./Controller/UserController";
import { createRoom } from "./Controller/RoomController";
import ReactPlayer from 'react-player';

const  Host = () => {
	const [inp, setInput] = useState('')
	const navigate = useNavigate()
	const  handleButton = async () => {		// gives button its funktion
		createRoom()
		navigate('/Watchparty')
	}

	return (
		<>
			<body>
				<div>
					<div class="hosttitle_text">
						<h1 class="hosttitle">Erstellen sie einen eigenen Raum für ihre Watchparty!</h1>
					</div>
					<div class="host_text">
						<p class="host_textbox">Drücken Sie start um einen Raum zu erstellen</p>
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
				
					</div>
			</body>
		</>
	);
};

export default Host;
