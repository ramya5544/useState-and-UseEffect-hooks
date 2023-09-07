import React from 'react';
import Child from './Child';
import UseStateEx from './UseStateEx';
import UseEffectEx from './UseEffectEx';
import FetchCallUe from './FetchCallUe';

function App(props) {
  let arr=[1,2,3,4,5,6]
    let arrObj=[
      {id:1,name:"ram",exp:10},
    {id:2,name:"seen",exp:10}
  ]
  return (
    
    <div>
      <Child arr={arr} arrObj={arrObj}/>
      <UseStateEx/>
      <UseEffectEx/>
      <FetchCallUe/>
    </div>
  );
}

export default App;