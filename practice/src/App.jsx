import { useState } from 'react';

export default function Input() {
  const [person, setPerson] = useState(localStorage.person);

  function handleFirstNameChange(e) {
    setPerson(e.target.value);
    
    localStorage.person = person;
  }

  return (
  <>
  <label> First Name:
    <input
      value={person}
      onChange={handleFirstNameChange}
    />
  </label>
  <br/>
  {localStorage.getItem(person) }
  </>
      

    
  )
  }

