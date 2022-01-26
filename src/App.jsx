import React from 'react';
import { useState } from 'react'; //import usestatae

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(newTime);

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(updateTime, 1000); //update time is callback function which used second how many time function callback//

  return (
    <>
      <h1> {cTime}</h1>
    </>
  );
};

export default App;
