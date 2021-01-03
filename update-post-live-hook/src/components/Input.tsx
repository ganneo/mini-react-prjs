import React from 'react'

export interface inputProps {
    title: string,
    content: string,
    inputOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    contentOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Input: React.FC<inputProps> = (props) => {
    return (
        <div className="input-holder">
            <input type="text" value={props.title} onChange={props.inputOnChangeHandler}/>
            <input type="text" value={props.content} onChange={props.contentOnChangeHandler}/>
        </div>
    )
}
