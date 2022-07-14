import React, { useState } from 'react';
import "./css/watchparty.css";
import {useNavigate} from "react-router-dom"
import { leaveRoom } from './Controller/RoomController';
import ReactPlayer from 'react-player';
import { postVideo } from './Controller/VideoController';

const Watchparty = () => {		// room siplay with userlist of rpp
	const [link, setLink] = useState('')
	const [url, setUrl] = useState('https://www.youtube.com/watch?v=Q0B5dLHDQ2w')
	const navigate = useNavigate()
	const unsername= sessionStorage.getItem('name')
	const id = sessionStorage.getItem('id')
	const roomname = sessionStorage.getItem('roomname')
	const handleButton = () => {		// gives button its funktion leave, submit video
		setUrl(link)
		postVideo(url)
		console.log(url)
	}
	const handleButton2 = () => {		// gives button its funktion, leave Room
		leaveRoom(sessionStorage.getItem('roomname'))
		navigate('/Room')
	}

	
	
	
	return (
		<>
			<body class="home">
				<div>
					<div class="partytitle_text">
						<h1 class="party_title">Raum: {roomname}</h1>
					</div>
					<div class="player">
						<ReactPlayer controls url={url} width={1280} height={720}/>
						
						<p class="users">Nutzer in dieser Watchparty:</p>
						
					</div>
					<div class="links">
						<input type="text" name="roomname" class="link_box" placeholder="Link einfügen" value={link} onChange={(change) => setLink(change.target.value)}></input>
						<button onClick={event => handleButton()} className="link_submit">Starten	</button>
						<button onClick={event => handleButton2()} className="link_leave">Raum Verlassen</button>
					</div>
					
				</div>
			</body>
		</>
	);
};

export default Watchparty;
