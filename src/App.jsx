import './App.css'
import { useState } from 'react'

function App() {

  // for every input we need a state

  const [city, setCity] = useState("")
  const [password,setPassword] = useState("")
  const [firstName, setFirstName] = useState("")

  function handleChange(event){
    setCity(event.target.value)
  }

  function handleFirstNameChange(event){
    setFirstName(event.target.value)
  }

  /* Steps:
            1. create a state for each input
            2. add the state as the value for the input
            3. create a new handleChange function to change the state based on the input value
            4. add the function as an onChange events
  
  */


  return (
    <>
    <label htmlFor="cityInput">City</label>
    <input
      onChange={handleChange}
      type="text" 
      id='cityInput'
      name="cityInput"
      value={city} 
      
      />

      <label htmlFor="">First name:</label>
      <input
       type="text"
       value = {firstName} 
       onChange={handleFirstNameChange}/>

    <label htmlFor="">password</label>
    <input type="password" id='password' name='password' onChange={(event)=>{setPassword(event.target.value)}} />

    {password.length <8 && <h1>Please input 8 characters</h1>}
    </>
  )
}

export default App
