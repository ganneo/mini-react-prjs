import CharBox from "./CharBox";
import "./Box.css";

export interface BoxProps {
  charBox: CharBox;
  onClickHandler: (id: number) => void;
}

const Box: React.FC<BoxProps> = (props) => {
  return (
    <span
      className="Box"
      onClick={() => props.onClickHandler(props.charBox.id)}
    >
      {props.charBox.c}
    </span>
  );
};

export default Box;
