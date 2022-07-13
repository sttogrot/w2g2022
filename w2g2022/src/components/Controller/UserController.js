/*

 create user should be done
 delete user should be done
TODO get user state or figure out when user closes browser or leaves site
*/

// collection of funktions relates to the controll of a user

 export const createUser = (input) => {
    const id =null
    const roomname= null
    const url = 'https://gruppe18.toni-barth.com//users/'
    //post user
    fetch(url, {
        method:'POST',
        headers:{"Content-Type": "application/json"}, // deklares intent, which data it wants
        body:  JSON.stringify({"name": input})  
    }).then(response => {response.json()})                 
    .then(data => {id=data.id})
    return {id, input, roomname} // to save it and use it for other methodes
}

export const deleteUser = (id) => {                 // as an alternative one could change it, so this funktion would resive the id directly
        // delete request
        fetch('https://gruppe18.toni-barth.com//users/:'+ id, {
          method:'DELETE',
      })
    }


