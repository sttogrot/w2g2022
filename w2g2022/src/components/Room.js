import React from 'react'
import "./css/room.css";
import useGetFetch from './fetch/useGetFetch'
import { useNavigate } from "react-router-dom"
import { createRoom } from "./Controller/RoomController";
import { useEffect, useState } from "react";
import RoomList from './RoomList';


const Room = () => {
  const navigate = useNavigate()
  const handleButton = () => {		// gives button its funktion
    if (sessionStorage.getItem('id') == null) {
      navigate('/UserCreateSide')
    }
    else {
      createRoom()
      setTimeout(function () {
        navigate('/Watchparty')
      }, 500)
    }
  }

<<<<<<< HEAD
  const [data, getData] = useState([])
  const URL = 'https://gruppe18.toni-barth.com/rooms/';

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = () => {
    fetch(URL)
      .then((res) =>
        res.json())

      .then((response) => {
        console.log(response.rooms);
        getData(response.rooms);
      })

  }

=======
 
  
>>>>>>> 4f958ba0815d5a3062a2b85414347df9ef74554e

  return (
    <body>
      <div>
        <div class="title_text">
          <h1 class="title">Treten Sie einer vorhandenen Watchparty bei</h1>
        </div>
<<<<<<< HEAD
        <div >
          <h3 class="h3">Vorhandene Räume</h3>
          <p class="roomlist">
            {data.map((rooms, name) => (
              <tr key={name}>
                <button onClick={event =>  handleButton()} className="room_button">{rooms.name}</button>
              </tr>
            ))}
          </p>
        </div>
        <div>
        
=======
        <div class="roomlist">
          <RoomList></RoomList>
>>>>>>> 4f958ba0815d5a3062a2b85414347df9ef74554e
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