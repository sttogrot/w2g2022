import React from 'react'
import { useFetch } from './useFetch';
import "./css/room.css";

const Room = () => {
  const { data: rooms, isPending, error } = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/rooms/');
  return (
    <div class="home">
      <div class="title_text">
        <h1 class="title">Hier könnten ihre Räume sichtbar sein</h1>
      </div>
      <div class="welcome_text">
        <p class="textbox">toller raum text</p>
      </div>
      <div className='raumliste'>
        {error && <div>{error}</div>}
        {rooms && <li>rooms</li>}
      </div>

    </div>
  )
}

export default Room;
