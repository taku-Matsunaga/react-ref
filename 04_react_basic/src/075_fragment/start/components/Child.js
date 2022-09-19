import './Child.css'
import React from 'react'

const Child = () => {
  return (
    // 余計なタグを出さない
    // 属性は付けられないがFragmentにはkeyを付けられる
    // <React.Fragment>
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur molestiae animi omnis consequuntur
        sapiente sunt ipsa. Deserunt vel dicta autem quidem voluptatem ab illum reprehenderit, quas esse magni dolor!
      </p>
      </>
      // </React.Fragment>
  )
}

export default Child
