import { useReducer } from 'react'
import { useState } from 'react'

const Example = () => {
  const [state, setState] = useState(0)
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // if (action === '+') {
    //   return ++prev
    // } else if (action === '-') {
    //   return --prev
    // }

    switch (type) {
      case '+':
        return prev + step
      case '-':
        return prev - step
      default:
        throw new Error('不明なアクションです')
    }
  }, 0)

  const countUp = () => {
    setState((prev) => ++prev)
  }

  const rCountUp = () => {
    dispatch({ type: '+', step: 2 })
  }

  const rCountDown = () => {
    dispatch({ type: '-', step: 3 })
  }

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>-</button>
      </div>
    </>
  )
}

export default Example
