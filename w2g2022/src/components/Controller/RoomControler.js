/*

TODO create Room ( only methode)
TODO delete Room
TODO join room
TODO leave room
TODO post videos (form and methode)
TODO video sync
*/

import React from 'react'

const RoomControler = () => {

    const createRoom =() => {
        //put request, creation of room
        fetch(url, {
            method:'´POST'               
        }).then(
            console.log(respons)
        )  //take respons, its the name of new room
        // get user and put him into room
    }
    const deleteRoom = () => {
        // delete room with roomname
    }
    const joinRoom = () => {
        // get roomname and user id put them in url
        // use url with POST 
    }
    const leaveRoom = () => {
        // delete user from room
    }
    const postVideo = () => {
        // dget video url from form
        //fetch video url
        //setvideo State to 0 min and deployed
    }
    const syncVideo = () => {
        // get state of video and sync it ps: OOF
    }
  return (
    <div></div>
  )
}

export default RoomControler