import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Profile from "./components/profile";
import Details from "./components/detail";

function App() {
  const [myNumber, setNumber] = useState(123);

  const callBackToParent = data => {
    // alert('Calling API: '+ data);
    setNumber(data);
  };

  const detailsCallback = data => {
    alert("Details page API: " + data);
  };
  return (
    <div className="App">
      <Profile
        userName="User1"
        handleButtonClick={data => callBackToParent(data)}
      />
      <Details
        userId={myNumber}
        handleButtonClick={data => detailsCallback(data)}
      />
    </div>
  );
}

export default App;
