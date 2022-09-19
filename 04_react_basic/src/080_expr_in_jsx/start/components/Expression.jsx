import React from 'react'
import './Expression.css'

const Expression = () => {
  const title = 'Expression'
  const arry = ['item1', 'item2', 'item3']
  const hello = (arg) => `${arg} Function`

  return (
    <div className={title.toLocaleLowerCase()}>
      {/* JSXでは波括弧でJSを埋め込める */}
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('Hello')}</h3>
    </div>
  )
}

export default Expression
