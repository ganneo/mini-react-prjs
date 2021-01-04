interface InputProps {
    value: string
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <div>
            <input 
            type="text"
            onChange={props.onChangeInput}
            className="text-input"
            value={props.value}
            />
        </div>
 )
}

export default Input