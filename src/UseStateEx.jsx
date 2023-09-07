import React, { useState } from 'react';

function UseStateEx(props) {
    const[data,setData]=useState(20)
    const[value, setValue]=useState([1,2,3,4,5])
    const[arrObj, setArrObj]= useState([{id:6,name:"azy"},{id:7,name:"abc"},{id:8,name:"zxc"}])
    const handleSubmit=()=>{
        setData(data=>data+1)
    }
    return (
        <div>
            {data}
            <div>
     <button onClick={handleSubmit}>Submit</button>
     {value.map((item,index)=>{
        return(
            <>
            <div key={index}>
                <h3>{item}</h3>
            </div>
            </>
        )
     })}
    
     </div>

     {arrObj.map((item,index)=>{
        return(
            <>
            <div key={index}>
                <h3>ID:{item.id}</h3>
                <h3>NAME:{item.name}</h3>
            </div>
            </>
        )
     })}
</div>

    );
}

export default UseStateEx;