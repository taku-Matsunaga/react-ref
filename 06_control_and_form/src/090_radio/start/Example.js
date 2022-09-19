import React, { useState } from 'react'

const Example = () => {
  const [fruit, setFruit] = useState('Apple')
  const onChange = (e) => setFruit(e.target.value)

  const RADIO_COLLECTION = ['Apple', 'Banana', 'Cherry']

  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input type="radio" value={value} checked={fruit === value} onChange={onChange} />
            {value}
          </label>
        )
      })}
      <h3>{fruit}食べたい</h3>
    </>
  )
}

export default Example
