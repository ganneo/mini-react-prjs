import React from 'react'
import Box from './Box'
let boxId = 0

interface BoxContainerProps {
    text:string,
    onClickHandler: (e: React.MouseEvent) => void
}

const BoxContainer: React.FC<BoxContainerProps> = (props) => {
    const boxElements = props.text
    .split('')
    .map(letter => 
    <Box 
    letter={letter}
    key={boxId++}
    id={boxId}
    onClickHandler={props.onClickHandler}></Box>)

    return (
        <div className="grid-container">
            {boxElements}
        </div>
    )
}

export default BoxContainer
