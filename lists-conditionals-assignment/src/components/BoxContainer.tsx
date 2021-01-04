import React from "react";
import Box from "./Box";
import CharBox from "./CharBox";
import "./BoxContainer.css";

interface BoxContainerProps {
  charBoxes: CharBox[];
  onClickHandler: (id: number) => void;
}

const BoxContainer: React.FC<BoxContainerProps> = (props) => (
  <div className="BoxContainer">
    {props.charBoxes.map((charBox) => (
      <Box
        charBox={charBox}
        onClickHandler={props.onClickHandler}
        key={charBox.id}
      />
    ))}
  </div>
);

export default BoxContainer;
