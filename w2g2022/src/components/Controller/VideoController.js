import React, { useState } from 'react'
/**
*    TODO post videos (form and methode)
 *   TODO video sync
 */

  // nimmt video und übergibt es der Api, benutzt die inder session gespeicherten id, führt danach die methode get video direkt aus
export const postVideo = (url) => { 
        // get video url, fetch video 
        console.log(url)
        fetch('https://gruppe18.toni-barth.com/rooms/'+sessionStorage.getItem('roomname') +'/video',{
            method:'PUT',
            headers:{"Content-Type": "application/json"}, 
            body:  JSON.stringify({"user": sessionStorage.getItem('id'),"url": url}),})
            .then( (response) => { getVideo()} )
    }
    const syncVideo = () => {
        // get state of video and sync it ps: OOF
    }
    // speichert die Url, die in der api hinterlegt ist alss ein session key und returned diesen
    export const getVideo = () => {
        // get video url, fetch video url
        fetch('https://gruppe18.toni-barth.com/rooms/' + sessionStorage.getItem('roomname') + '/video')
        .then(response => {return response.json()}).then(data => { sessionStorage.setItem("url", data.url)})
        return sessionStorage.getItem('url')
    }
