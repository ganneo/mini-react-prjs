import React from 'react'

export interface outputPropType {
    title: string,
    content: string
}

export const Output: React.FC<outputPropType> = (props) => {
    return (
        <div className="post">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}