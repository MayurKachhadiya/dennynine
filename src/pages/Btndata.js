import React from 'react'
import Portfolio from './Portfolio';
const printButtonLabel = (event) => {
    console.log(event.target.name);
    //do some stuff here
  };
  
const Btndata = () => {
  return (
    <div>
      <div className="App">
      <Portfolio 
        buttons={["All", "Photos", "Videos","Designs","Coffee"]}
        doSomethingAfterClick={printButtonLabel}
        />
    </div>
    </div>
  )
}

export default Btndata
