import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import BoxContainer from "./components/BoxContainer";
import "./components/Input.css";
import CharBox from "./components/CharBox";

function App() {
  let charBoxId = 0;
  const [charBoxesState, updateCharBoxesInput] = useState<CharBox[]>([]);

  const onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    updateCharBoxesInput(
      e.target.value.split("").map((c) => new CharBox(c, charBoxId++))
    );
  };

  const onClickHandler: (charBoxId: number) => void = (charBoxId) => {
    const charBoxes = charBoxesState.filter(
      (charBox) => charBox.id !== charBoxId
    );
    updateCharBoxesInput(charBoxes);
  };

  let warning: JSX.Element | null = null;

  if (charBoxesState.length <= 5) {
    warning = <div>Make input longer</div>;
  }

  let boxContainer: JSX.Element | null = null;

  if (charBoxesState.length > 5) {
    boxContainer = (
      <BoxContainer
        charBoxes={charBoxesState}
        onClickHandler={onClickHandler}
      ></BoxContainer>
    );
  }

  return (
    <div className="App">
      <Input
        value={charBoxesState.map((charBox) => charBox.c).join("")}
        onChangeInput={onChangeInput}
      ></Input>
      {warning}
      {boxContainer}
    </div>
  );
}

export default App;
