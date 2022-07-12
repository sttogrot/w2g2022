import React from 'react'
import { useFetch } from './useFetch';
import "./css/room.css";

const Room = () => {
  const { data: rooms, isPending, error } = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/rooms/');
  return (
    <body>
      <div class="home">
        <div class="title_text">
          <h1 class="title">Treten Sie einer vorhandenen Watchparty bei</h1>
        </div>
        <div class="roomlist">
          <p>hier soll die raumliste hin</p>
        </div>
        <div class="welcome_text">
          <p class="textbox">Oder vielleicht doch eine eigene Watchparty erstellen?</p>
          <button onClick={event => window.location.href = '/Host'} className="homescreen_buttons">Einen neuen Raum erstellen</button>
        </div>
        <div className='raumliste'>
          {error && <div>{error}</div>}
          {rooms && <li>rooms</li>}
        </div>
      </div>
    </body>
  )
}

export default Room;
