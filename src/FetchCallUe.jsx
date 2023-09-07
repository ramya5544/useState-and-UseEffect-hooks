import React, { useState,useEffect } from 'react';

 const FetchCallUe = () => {
    const[value,setValue]=useState([]);
    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{
    //   await fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res=>res.json())
    //   .then(data=>setValue(data))
    //   .catch(err=>console.log(err))

    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>setValue(res.data))
    .catch(err=>console.log(err))
     }

    console.log("fetchData",value);
    return (
        <div>
          <h1> {value.map((item,index)=>{
          return(
            <>
            <div key={index}></div>
            <p>{item.id}</p>
            <p>{item.body}</p>
            <p>{item.title}</p>
            </>
          )
          })}</h1> 
        </div>
    );
}

export default FetchCallUe;