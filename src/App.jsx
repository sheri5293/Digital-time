import React from 'react';
import { useState } from 'react';
import ToDolist from './ToDolist';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [List, setList] = useState([]); // now it become Array

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const ListItem = () => {
    setList((oldItems) => {
      return [...oldItems, inputList];
    
    });
    setInputList('');
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>To do List</h1>
          <br />
          <input type='text' placeholder='Enter a items' onChange={itemEvent}  value={inputList}/>
          <button onClick={ListItem}>+</button>
          <ol>
            {/* map function //Attitube (1st curent value... 2nd current value index no ... 3rd Array deal with us )  */}

            {List.map((itemValue) => {          //and call the array
              return  <ToDolist
                text={itemValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
