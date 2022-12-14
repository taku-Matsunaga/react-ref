import { useCounterDispatch } from '../context/ConterConxtext'

const CounterButton = ({ calcType, step }) => {
  const dispatch = useCounterDispatch()
  const clickHandler = () => {
    dispatch({ type: calcType, step })
  }

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  )
}
export default CounterButton
