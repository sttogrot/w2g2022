/*

 create user should be done
 delete user should be done
TODO get user state or figure out when user closes browser or leaves site
*/
import React from 'react'

const UserController = () => {

    const createUser = (name) => {
        const { id, name, roomname} = theUser;
        const url = 'https://gruppe18.toni-barth.com//users/'
        // create user with getname 
        theUser.name= name; // get name from form 
        //post user
        fetch(url, {
            method:'POST',
            headers:{"Content-Type": "application/json"}, // deklares intent, which data it wants
            body: {"name": theUser.name}  
        }).then(theUser.id=response.id, console.log(response.id))                 // should get the id and save it to theUser

        return theUser // to save it and use it for other methodes
    }

    const deleteUser = (theUser) => {                 // as an alternative one could change it, so this funktion would resive the id directly
        // delete request
        fetch('https://gruppe18.toni-barth.com//users/:'+theUser.id, {
          method:'DELETE',
      })
      // set every data null
      theUser.name= null;
      theUser.id= null;
      theUser.roomname= null;
      return theUser          // implemented, can be disregarded or deletet
    }
}

export default UserController