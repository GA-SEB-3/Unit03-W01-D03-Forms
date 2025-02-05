import './App.css'
import { useState } from 'react'

function App() {

  // for every input we need a state


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    
  })

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  /* Steps:
            1. create a state for each input
            2. add the state as the value for the input
            3. create a new handleChange function to change the state based on the input value
            4. add the function as an onChange events
  
  */

            function handleSubmit(event){
              event.preventDefault()

              alert("Success Created")

              setFormData({
                firstName: "",
                lastName: "",
                password: ""
              })
            }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <label htmlFor="lastName">last Name</label>
      <input
        onChange={handleChange}
        type="text" 
        id='lastName'
        name="lastName"
        value={formData.lastName} 
        
        />

        <label htmlFor="">First name:</label>
        <input
        type="text"
        name="firstName"
        id='firstName'
        value = {formData.firstName} 
        onChange={handleChange}/>

      <label htmlFor="">password</label>
      <input 
      value={formData.password}
      type="password" 
      id='password' 
      name='password' 
      onChange={handleChange} />

      {formData.password.length <8 && <h1>Please input 8 characters</h1>}
      <button>Submit</button>
    </form>
    
    </>
  )
}

export default App
