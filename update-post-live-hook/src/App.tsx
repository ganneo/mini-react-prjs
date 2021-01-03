import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Output } from './components/Output';
import './components/Input.css'

const App: React.FC<any> = () => {
  const [inputState, inputUpdater] = useState("Put in a input")
  const [contentState, contentUpdater] = useState("Write your post")

  const inputOnChangeHandler =  (e: React.ChangeEvent<HTMLInputElement>) => {
    inputUpdater(e.target.value)
  }
  const contentOnChangeHandler =  (e: React.ChangeEvent<HTMLInputElement>) => {
    contentUpdater(e.target.value)
  }

  return (
    <div className="App">
      <Input title={inputState} content={contentState} inputOnChangeHandler={inputOnChangeHandler} contentOnChangeHandler={contentOnChangeHandler}></Input>
      <Output title={inputState} content={contentState}></Output>
    </div>
  );
}

export default App;
