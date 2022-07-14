import React, { useState } from 'react'
import "./css/host.css";
import {useNavigate} from "react-router-dom"
import { createRoom } from "./Controller/RoomController";

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
						<div class="zwei">
							<button onClick={event => handleButton()} className="host_button">Raum erstellen</button>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Host;
