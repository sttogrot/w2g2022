import React from 'react'


const RoomList = (data) => {

  return (
    <div>
        {data && <div> {data.map(() => (  <div><h2>{data.name}</h2></div>)  )  }</div>}
    </div>
  )
}

export default RoomList