import React from 'react'
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    var myHeaders = new Headers();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'no-cache'
      };

    myHeaders.append('Content-Type', 'user.json');

    useEffect(() => {
      setTimeout(() => {
        fetch(url,  myInit )
        .then(response => {
          if (!response.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return response.json();
        })
        .then(data => {
          setData(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        })
      }, 1000);
    }, [url])
  
    return { data, error };
  }
