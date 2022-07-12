import React from 'react'
import "./css/room.css";
import useGetFetch from './fetch/useGetFetch'
import RoomList from './RoomList';

const Room = () => {
  const {data} = useGetFetch('https://gruppe18.toni-barth.com/rooms/')
  return (
    <body>
      <div class="home">
        <div class="title_text">
          <h1 class="title">Treten Sie einer vorhandenen Watchparty bei</h1>
        </div>
        <div class="roomlist">
<<<<<<< HEAD
          <p>hier soll die raumliste hin</p>
=======
        <RoomList>{data}</RoomList>
>>>>>>> 0916d1f9f651103e51c58e1f6aac9a2e5b325fcb
        </div>
        <div class="welcome_text">
          <p class="textbox">Oder vielleicht doch eine eigene Watchparty erstellen?</p>
          <button onClick={event => window.location.href = '/Host'} className="homescreen_buttons">Einen neuen Raum erstellen</button>
        </div>
      </div>
    </body>
  )

  
}

export default Room;
