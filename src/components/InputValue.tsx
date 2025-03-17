import { useState } from "react"

const InputValue = () => {
    const [inputValue, setInputValue] = useState("")
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange}/>
            <p>入力内容:{inputValue}</p>
        </div>
    )
}

export default InputValue

