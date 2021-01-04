import React from 'react'

export interface BoxProps {
    letter: string
    onClickHandler: (e: React.MouseEvent) => void
    id: number
}

const Box: React.FC<BoxProps> = (props) => {
    return <span
    className="box"
    onClick={props.onClickHandler}
    id={props.id.toString()}>{props.letter}</span>
}

export default Box
