import { useState } from 'react'

const Example = () => {
  const personObj = { name: 'Tom', age: 18 }
  const [person, setPerson] = useState(personObj)

  const changeName = (e) => {
    // setPerson({ name: e.target.value, age: person.age })
    setPerson({ ...person, name: e.target.value })
  }

  const changeAge = (e) => {
    setPerson({ age: e.target.value, name: person.name })
  }

  const reset = () => {
    setPerson({ name: '', age: '' })
  }

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" onChange={changeName} value={person.name} />
      <input type="number" onChange={changeAge} value={person.age} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
}

export default Example
