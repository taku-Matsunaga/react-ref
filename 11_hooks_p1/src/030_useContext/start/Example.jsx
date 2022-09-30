import { createContext } from 'react'
import Child from './components/Child'

export const MyContext = createContext('hello')

const Example = () => {
  const value = 'hello'
  return <Child value={value} />
}

export default Example
