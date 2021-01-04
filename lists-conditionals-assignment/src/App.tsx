import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import BoxContainer from './components/BoxContainer'
import './components/Input.css'

function App() {
  const [inputState, updateInput] = useState("")
  const onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    updateInput(e.target.value)
  }
  const onClickHandler: (e: React.MouseEvent) => void = (e) => {
    const boxEle = e.target as HTMLSpanElement
    let newInputState = ''
    document.querySelectorAll('.box').forEach(box => {
      if (box.id !== boxEle.id) {
        newInputState = newInputState + box.textContent
      }
    })
    updateInput(newInputState)
  }


  let warningText = <BoxContainer 
  text={inputState}
  onClickHandler={onClickHandler}></BoxContainer>

  if (inputState.length < 5) {
    warningText = <p>Add more text</p>
  }

  return (
    <div className="App">
      <Input
      value={inputState}
      onChangeInput={onChangeInput}></Input>
      {warningText}
    </div>
  );
}

export default App;
