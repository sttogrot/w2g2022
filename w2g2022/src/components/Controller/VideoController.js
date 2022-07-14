import React, { useState } from 'react'
/**
*    TODO post videos (form and methode)
 *   TODO video sync
 */

  
export const postVideo = (url) => {
        // get video url, fetch video 
        console.log(url)
        fetch('https://gruppe18.toni-barth.com/rooms/'+sessionStorage.getItem('roomname') +'/video',{
            method:'PUT',
            headers:{"Content-Type": "application/json"}, 
            body:  JSON.stringify({"user": sessionStorage.getItem('id'),"url": url}),})
            .then( (response) => {  window.sessionStorage.setItem("url", getVideo()) } )
    }
    const syncVideo = () => {
        // get state of video and sync it ps: OOF
    }

    export const getVideo = () => {
        // get video url, fetch video url
        fetch('https://gruppe18.toni-barth.com/rooms/' + sessionStorage.getItem('roomname') + '/video')
        .then(response => {return response.json()}).then(data => { sessionStorage.setItem("url", data)})
    }
