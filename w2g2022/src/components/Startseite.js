import React from 'react';
import "./css/Startseite.css";
import { useFetch } from './useFetch';

const Home = () => {
		const { data: users, isPending, error } = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/users/');
		return (
			<>
				<div class="home">
					<div class="title_text">
						<h1>Watch YouTube Together with Friends!</h1>
					</div>
					<div class="welcome_text">
						<p>infotext über features</p>
					</div>
					<div >
						<button onClick={event => window.location.href = '/Host'} className="homescreen_buttons">Einen neuen Raum erstellen</button>
						<button onClick={event => window.location.href = '/Room'} className="homescreen_buttons">Einen vorhanden Raum beitreten</button>
					</div>
					<div>
						{error && <div>{error}</div>}
						{users && <li>users</li>}
					</div>

				</div>

			</>
		);
	};

export default Home;
