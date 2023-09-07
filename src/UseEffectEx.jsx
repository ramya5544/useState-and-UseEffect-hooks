import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
    const[value,setValue]=useState(0)
    useEffect(()=>{

        console.log("useEffect block")
    },[value])
    const handleClick=() =>{
        setValue(val=>val+10)
    }
    return (
        <div>
            <h1>{value}</h1>
           <button onClick={handleClick}>click</button>  
        </div>
    );
}

export default UseEffectEx;