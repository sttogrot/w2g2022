import React from 'react'
import { useEffect, useState } from "react";
const RoomList = () => {

    const [blogs, getData] = useState([])
    const URL = 'https://gruppe18.toni-barth.com/rooms/';
    
    useEffect(() => {
      fetchData()
    }, [])
  
  
    const fetchData = () => {
      fetch(URL)
        .then((res) =>
          res.json())
  
        .then((response) => {
          console.log(response.rooms);
          getData(response.rooms);
        })
        
    }



    return (
        <div className="home">
          {blogs.map(blog => (
            <div className="blog-preview" >
              <h2>{ blog.name }</h2>
            </div>
          ))}
        </div>
      );
    }


export default RoomList