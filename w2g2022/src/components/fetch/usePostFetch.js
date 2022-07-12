import { useState } from 'react'

export const usePostFetch = (url, content) => {
  
    const{data, setData} = useState('') //TODO man brauch die create  methode dafür
    setData(content)
    fetch(url, {
        method:'´POST',
        headers:{"Content-Type": "application/json"}, // deklares intent
        body: JSON.stringify(data)                    // turns data in to json

    })
}
