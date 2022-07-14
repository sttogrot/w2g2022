import React from 'react'
import "./css/room.css";
import useGetFetch from './fetch/useGetFetch'
import {useNavigate} from "react-router-dom"
import { createRoom } from "./Controller/RoomController";


const Room = () => {
  const navigate = useNavigate()
  const handleButton = () => {		// gives button its funktion
		if(sessionStorage.getItem('id')==null){
			navigate('/UserCreateSide')
		}
		else{
      createRoom()
			navigate('/Watchparty')
		}
	}

  

  return (
    <body>
      <div class="home">
        <div class="title_text">
          <h1 class="title">Treten Sie einer vorhandenen Watchparty bei</h1>
        </div>
        <div class="roomlist">
  
        </div>
        <div class="welcome_text">
          <p class="textbox">Oder vielleicht doch eine eigene Watchparty erstellen?</p>
          <button onClick={event => handleButton()} className="homescreen_buttons">Einen neuen Raum erstellen</button>
        </div>
      </div>
    </body>
  )

  
}
export default Room;
