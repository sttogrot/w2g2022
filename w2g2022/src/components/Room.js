import React from 'react'
import "./css/room.css";
import useGetFetch from './fetch/useGetFetch'
import { useNavigate } from "react-router-dom"
import { createRoom } from "./Controller/RoomController";
import { useEffect, useState } from "react";


const Room = () => {
  const navigate = useNavigate()
  const handleButton = () => {		// gives button its funktion
    if (sessionStorage.getItem('id') == null) {
      navigate('/UserCreateSide')
    }
    else {
      createRoom()
      navigate('/Watchparty')
    }
  }

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
        console.log(response);
        getData(response);
      })
      
  }
  

  return (
    <body>
      <div class="home">
        <div class="title_text">
          <h1 class="title">Treten Sie einer vorhandenen Watchparty bei</h1>
        </div>
        <div class="roomlist">
          <tbody>
            <h3>Vorhandene Räume</h3>
            {data.map((rooms, name) => (
              <tr key={name}>
                <td>{rooms.name}</td>
              </tr>
            ))}
          </tbody>
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