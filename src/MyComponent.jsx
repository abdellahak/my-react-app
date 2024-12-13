import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("Abdellah");
  };

  const incrementAge = ()=>{
    setAge(age +2)
  }

  const toggleEmpoyedStatus = ()=>{
    setIsEmployed(!isEmployed)
  }
  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age : {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>is Employed : {isEmployed ? "Yes": "No"}</p>
      <button onClick={toggleEmpoyedStatus}>change status</button>
    </div>
  );
}

export default MyComponent;
