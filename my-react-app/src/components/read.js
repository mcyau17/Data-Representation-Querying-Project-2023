import React from "react";
import Books from "./books";
import { useEffect, useState } from "react";
import axios from "axios";

function Read(){


const [data, setData] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:4000/api/books')
    .then((response)=>{
        setData(response.data.myBooks)
    })
    .catch((error)=>{
        console.log(error);
    });
},[]);
    

    return(
        <div>
            <h3>Hello from Read</h3>
            <Books myBooks={data}></Books>
        </div>
        );
    } 
export default Read;