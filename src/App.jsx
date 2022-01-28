import React from 'react';
import { useState } from 'react'; //import usestatae

const App = () => {
  const [FullName, setFullName] = useState({      //use state pass in an object//
    fname: '',
    lName: '',
    eMail: '',
    phone: ''
  }); //useState is a hook


  const eventPass = (e) => {      // object pass in event
        
//object diestrcucting//
    const {value,name} = e.target;


    setFullName((preValue)=>{

return{
  ...preValue,
  [name] : value,      // its mean jo prevalue ka andar object hain un ka name iss name sa mill raha ha tu us ki  value show kr do//
};
           
          
    


      // if(name==='fname'){
      //   return{
      //     fname: value,
      //     lName: preValue.lName,
      //      eMail: preValue.eMail,
      //      phone: preValue.phone
      //   };  
      //   }else if (name==='lName'){
      //     return{
      //       fname: preValue.fname,
      //       lName: value,
      //        eMail: preValue.eMail,
      //        phone: preValue.phone
      //     };
      //   }else if (name==='eMail'){
      //     return{
      //       fname: preValue.fname,
      //       lName: preValue.lName,
      //        eMail: value,
      //        phone: preValue.phone
      //     };
      //   }else if (name==='phone'){
      //     return{
      //       fname: preValue.fname,
      //       lName: preValue.fname,
      //        eMail: preValue.eMail,
      //         phone: value
      //     };
      //   }
  });
};

const onSubmits=(e)=> {
  e.preventDefault();
  alert('form submitted');

};





  return(
<>
<div>
  <h1>  {FullName.fname} {FullName.lName}  </h1>
  <p> {FullName.eMail}</p>
  <p> {FullName.phone}</p>

  </div>
  <form onSubmit={onSubmits}>                                                
<input type="text"  placeholder='Enter your name' name='fname' onChange={eventPass} value={FullName.fname}/>                   
{/* //!curent value is fullname so we use fullNammefname */}

<br></br>
<input type="text"  placeholder='Enter your last name' name='lName' onChange={eventPass} value={FullName.lName}/>
<br></br>
<input type="email"  placeholder='Enter your last Email' name='eMail' onChange={eventPass} value={FullName.eMail}/>
<br></br>
<input type="number"  placeholder='Enter your last phone' name='phone' onChange={eventPass} value={FullName.phone}/>
<br></br>
<button type='submit'> click me  </button>

</form>
</>
 );
};

export default App;
