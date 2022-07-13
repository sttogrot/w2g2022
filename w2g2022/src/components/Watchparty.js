import React from 'react';
import "./css/watchparty.css";
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';

const Watchparty = () => {
	const location = useLocation();
	const user = location.state.user
	const handleButton = () => {		// gives button its funktion
		
	}
	console.log(window.sessionStorage.getItem("key"))

	
	
	
	return (
		<>
			<body class="home">
				<div>
					<div class="partytitle_text">
						<h1 class="party_title">hier soll dan der raumname hin am besten</h1>
					</div>
					<div class="player">
						<ReactPlayer controls url="https://www.youtube.com/watch?v=4LdA_PpeSz0" width={1280} height={720}/>
					</div>
					<div class="links">
						<input type="text" name="roomname" class="link_box" placeholder="Link einfügen"></input>
						<button onClick={event => handleButton()} className="link_submit">Starten	</button>
					</div>
					<div class="users">
						<p>Hier aktuelle nutzer des raumes in einer zeile auflisten</p>
					</div>
				</div>
			</body>
		</>
	);
};

export default Watchparty;
