import axios from "axios"
import { useEffect, useState } from "react"

const Products=()=>{
    const[responses,setResponses]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            console.log(res)
            setResponses(res.data)
        })
        .catch(err=>{
            console.log(err)})
    }, [])
    return(
        <div>
            <ul>
                {responses.map(responses=>(
                    <li key={responses.id}>{responses.name}</li>
                ))}
            </ul>
        </div>

    )
    }

export default Products