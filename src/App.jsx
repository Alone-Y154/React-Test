import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './Components/Forms'
import { useState } from 'react';
import Test from './Components/Test';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData]= useState()

  const registrationDetails = (data) => {
    setUserData(data);
  };



 return(
      <div className='form'>
        <div>
          <Routes>
            <Route path="/" element={<Forms registrationDetails={registrationDetails}/>} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
 )
}

export default App
