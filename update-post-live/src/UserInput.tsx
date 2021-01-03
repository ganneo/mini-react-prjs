import React from "react";

type onChangeEvent = {
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Input: React.FC<onChangeEvent> = (props) => {
    return (
        <form>
            <input type="text"
            id="title"
            placeholder="give a value"
            onChange={props.onChangeInput}/>
            <textarea 
            id="post"
            placeholder="type your content"
            onChange = {props.onChangeTextArea}
            rows = {5}
            ></textarea>
        </form>
    )
}

export default Input