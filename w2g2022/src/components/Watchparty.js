import React, { useState, useEffect } from 'react';
import "./css/watchparty.css";
import {useNavigate} from "react-router-dom"
import { leaveRoom } from './Controller/RoomController';
import ReactPlayer from 'react-player';
import { getVideo, getVideoStat, postVideo, postVideoPos, postVideoStat } from './Controller/VideoController';
import { handlePause, handlePlay } from './Controller/PlayerController';

const Watchparty = () => {		// room siplay with userlist of rpp
	const firstUrl = 'https://www.youtube.com/watch?v=Q0B5dLHDQ2w'
	const [link, setLink] = useState('')
	
	const navigate = useNavigate()
	const unsername= sessionStorage.getItem('name')
	const id = sessionStorage.getItem('id')
	const roomname = sessionStorage.getItem('roomname')
	const [first, setFirst]= useState(true)
	;
	//player stats
	const [url, setUrl] = useState(null)
	const [playing, setPlaying] = useState(false)
	const [controls, setControls] = useState(true)

	//handler

	const  handlePlay = () => {
		console.log('onPlay')
		postVideoStat('playing')
	  }
	
	   const  handlePause = () => {
		console.log('onPause')
		postVideoStat('paused')
	  }
	   const  handleSeekChange = (e) => {
		
		postVideoPos(parseFloat(e.target.value))
	  }
	
	// constantly snyc
	useEffect(() =>{
		const interval = setInterval(() => {
			sync()
			console.log('updated')
		  }, 3000);
		  return () => clearInterval(interval);
		}, []);

	// buttons
	const handleButton = () => {		// gives button its funktion leave, submit video
		setUrl(link)
		postVideo(link)
		console.log(url)
	}
	const handleButton2 = () => {		// gives button its funktion, leave Room
		leaveRoom(sessionStorage.getItem('roomname'))
		
		navigate('/Room')
	}

	// syncs
	// calls multiple functions, which shouls sync different aspects of the player
	const sync = async () => {		//  the room should update, url, position
		syncUrl()
		 compareState()
	}
	// takes value of getVideo and sets it as room(user) url, when url = compare nothing happens to the player, if compare was differen the player changes 
	const syncUrl = () => {
		const compare = getVideo()
		setUrl(compare)
		sessionStorage.setItem("url", url)
		return true
	}
	// should get the status of the video and paus/play the video, but doesnt work
	const compareState = () =>{
		if(getVideoStat()=='playing')
		{
			setPlaying(true)
		}
		if(getVideo()=='paused')
		{
			setPlaying(false)
		}
	}
	// gets the video Podition of the server
	const comparePos = () => {
		
	}

	//_____________________________________________________________________________________________

	return (
		<>
			<body class="home">
				<div>
					<div class="partytitle_text">
						<h1 class="party_title">Raum: {roomname} </h1>
					</div>
					<div class="player">
						<ReactPlayer
						 className='react-player'
						 width={1280} 
						 height={720}
						 url={url}
						 playing={playing}
						 controls={controls}
						 onReady={() => console.log('onReady')}
						 onStart={() => console.log('onStart')}
						 onPlay={handlePlay()}
						 onPause={handlePause()}
						 onBuffer={() => console.log('onBuffer')}
						 onSeek={e=> {handleSeekChange(e)}}
						/>
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

export default Watchparty
