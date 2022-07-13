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


    export const createRoom =(theUser) => {
        const url = 'https://gruppe18.toni-barth.com//rooms/'
        //put request, creation of room
        fetch(url, {
            method:'POST'               
        })
        //take respons, its the name of new room
        .then( response => {
            response.json()})
        .then (data => {
            console.log(data)
            theUser.roomname= data.name
        })  
        // put user into room
        fetch(url+':'+theUser.roomname+'/users', {
        method:'PUT',
        body: { "user": theUser.id } 
        })
        return theUser
    }
    export const deleteRoom = (name) => {
        // delete room with roomname
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name, {
          method:'DELETE',
      })
    }
    export const joinRoom = (theUser, name) => {
        // get roomname and user id put them in url
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name+'/users', {
            method:'PUT',
            body: {"user": theUser.id}
        })
        //update theUser
        sessionStorage.removeItem('roomname');
        window.sessionStorage.setItem("room", name)
        return theUser
    }
    export const leaveRoom = (id, roomname) => {
        id=JSON.stringify(id)
        // delete user from room
        fetch('https://gruppe18.toni-barth.com//rooms/:'+roomname+'/users', {
          method:'DELETE',
          body: {"user": id}
      })
        //update theUser
        sessionStorage.removeItem('roomname');
    }
    export const displayUserlist = (name) => {
        fetch('https://gruppe18.toni-barth.com//rooms/:'+name+'/users', {
            method:'GET'
        }).then(  respons =>  {respons.json()}).then(data => {console.log(data)}) // TODO
    }


