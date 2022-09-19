import { useState } from 'react'
import styled from 'styled-components'

const Example = () => {
  const [isSelected, setIsSelected] = useState(false)

  const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${({isSelected}) => (isSelected ? 'pink' : '')};
  `

  const clickHandler = () => setIsSelected((prev) => !prev)

  const OrangeButton = styled(StyledButton)`
    background-color: orange;
  `

  return (
    <>
    <OrangeButton>ボタン</OrangeButton>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
      <button className={`btn ${isSelected ? 'selected' : ''}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: 'center' }}>{isSelected && 'クリックされました。'}</div>
    </>
  )
}

export default Example
