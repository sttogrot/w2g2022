import React from 'react';
import "./css/Startseite.css";
import { useFetch } from './useFetch';

const Home = () => {
	const { data: users, isPending, error } = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/users/');
	return (
		<>
			<body class="home">
				<div>
					<div class="title_text">
						<h1 class="title">Watch YouTube Together with Friends!</h1>
					</div>
					<div class="welcome_text">
						<p class="textbox">Genieße barrierefreie Unterhaltung zusammen mit deinen Freunden bei Watch2Gether der Hochschule Anhalt dank:</p>
					</div>
					<div>
						<p class="textbox">
							<ul>
								<li>
									Gänzliche Bedienbarkeit via Tastatur
								</li>
								<li>
									Farbblindenmodus (Coming Soon™)
								</li>
								<li>
									Text-To-Speech (Coming Soon™)
								</li>
								<li>
									Untertitel (Coming Soon™)
								</li>
							</ul>
						</p>
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
			</body>
		</>
	);
};

export default Home;
