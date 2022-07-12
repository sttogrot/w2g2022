/*

 create Room should be done
 delete Room should be done
 join room should be done
 leave room should be done

TODO Userlist, how to store and display
TODO Roomlist, same problem as before
*/

import React from 'react'


// collection of funktions related to the controll of a room
const RoomControler = () => {

    const createRoom =(theUser) => {
        const url = 'https://gruppe18.toni-barth.com//rooms/'
        //put request, creation of room
        fetch(url, {
            method:'POST'               
        })
        //take respons, its the name of new room
        .then(
            console.log(respons),
            theUser.roomname= respons.name
        )  
        // put user into room
        fetch(url+':'+theUser.roomname+'/users', {
        method:'PUT',
        body: { "user": theUser.id } 
    })
        return theUser
    }
    const deleteRoom = (name) => {
        // delete room with roomname
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name, {
          method:'DELETE',
      })
    }
    const joinRoom = (theUser, name) => {
        // get roomname and user id put them in url
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name+'/users', {
            method:'PUT',
            body: {"user": theUser.id}
        })
        //update theUser
        theUser.roomname=name
        return theUser
    }
    const leaveRoom = (theUser) => {
        // delete user from room
        fetch('https://gruppe18.toni-barth.com//rooms/:'+theUser.roomname+'/users', {
          method:'DELETE',
          body: {"user": theUser.id}
      })
        //update theUser
        theUser.roomname=null
        return theUser
    }
    const displayUserlist = (name) => {
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name+'/users', {
            method:'GET'
        }).then(respons.json()).then(data)
    }
}

export default RoomControler