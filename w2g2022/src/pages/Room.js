import React from 'react'
import { useFetch } from '../components/fetch/useFetch';
export const Room = () => {
  const {data: rooms, isPending, error} = useFetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/rooms/')
  return (
    <div>
      <h1>Hier könnten ihre Räume sichtbar sein</h1>
      <div className='raumliste'>
        { error && <div>{ error }</div> }
        { rooms && <li>rooms</li> }
      </div>
    </div>
  )
}
export default Room;
