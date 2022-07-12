import React, { useState } from 'react';
import "./css/host.css";
import { createUser } from "../components/Controller/UserController"
import { createRoom } from "./Controller/RoomControler"
import {useNavigate} from "react-router-dom"

const Host = () => {
	const [inp, setInput] = useState('')
	const navigate = useNavigate()
	const massage = "hallo"
	const user ={massage}
	const handleButton = () => {		// gives button its funktion
		//submit user
		//const user = createUser(inp)
		//user = createRoom(user)
		console.log(inp)
		navigate('/Watchparty',{state:user});
		
	}
	return (
		<>
			<body class="home">
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
						<button onClick={event => handleButton()} className="host_button">Starten	</button>
                        </div>
                    </div>
				</div>
			</body>
		</>
	);
};

export default Host;
