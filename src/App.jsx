import { useState } from "react"


const App = ()=> {
  const [ counter, setCounter ] = useState(0);
  const [ showText, setShowText ] = useState(true);

  const counterHandler = (event)=> {
    console.log(event);
    setCounter((prevCounter)=> prevCounter + 1)
    setShowText(!showText)
  }
  return (
    <div>
      <p>{ counter }</p>
      <br />
      <button  onClick={counterHandler}>Increment</button>
      { showText && <p>Our text to showText </p>}
    </div>
  )
}

export default App
