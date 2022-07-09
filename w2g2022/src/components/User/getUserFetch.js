import React from 'react'

export const getUserFetch = () => {

  
  fetch('https://gitlab.hs-anhalt.de/barth_to/watch2gether/-/blob/main/src/controllers/users.ts', {method: 'GET',}
  )
  .then((response)) => response.json())
    
  

  return (
    <div>getUserFetch</div>
  )
}
