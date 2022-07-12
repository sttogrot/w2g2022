import React from 'react';
import "./css/host.css";

const Host = () => {
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
                        <input type="text" name="roomname" class="input_box" placeholder="Benutzernamen eingeben zb.: Floppa"></input>
						</div>
						<div class="zwei">
						<button onClick={event => window.location.href = '/Watchparty'} className="host_button">Starten	</button>
                        </div>
                    </div>
				</div>
			</body>
		</>
	);
};

export default Host;
