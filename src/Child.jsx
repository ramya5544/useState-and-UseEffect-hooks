import React from 'react';

function Child({arr,arrObj}) {
    return (
        <div>
            {
                arr.map((item,index)=>{
                    return(
                        <>
<div key={index}>
    <h3>{item}</h3>
</div>

                        </>
                    )
                })}


{arrObj.map((item,index)=>{
    return(
        <div key={index}>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.exp}</h3> 

        </div>
    )
})}
        </div>
    );
}

export default Child;