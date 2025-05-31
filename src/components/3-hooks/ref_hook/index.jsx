import React from 'react'

const Demo = () => {
  const inputRef = React.useRef()

  const focusInput = () => {
    console.log(inputRef.current.value) // Logs the input element
  }

  return (
    <div>
      <h2>useRef Hook Example</h2>
      <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>点击</button>
    </div>
  )
}
export default Demo