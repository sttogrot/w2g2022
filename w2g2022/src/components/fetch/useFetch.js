import React from 'react'
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
        .then(response => {
          if (!response.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return response.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, );
    }, [url])
  
    return { data, isPending, error };
  }
