import React from 'react'
import "./css/room.css";
import useGetFetch from './fetch/useGetFetch'


const Room = () => {
  const {data} = useGetFetch('https://gruppe18.toni-barth.com/rooms/')
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
          <button onClick={event => window.location.href = '/Host'} className="homescreen_buttons">Einen neuen Raum erstellen</button>
        </div>
      </div>
    </body>
  )

  
}

export default Room;
