import { ChangeEvent } from "react"
import Input from "./input"

interface HeaderProp{
    addInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

const headerItem = ({addInput}:HeaderProp) => {
    return (
        <div className= 'header'>
            <Input label='First Name' onChange={addInput}></Input>
            <Input label ='Last Name' onChange={addInput}></Input>
            <Input label='Phone Number' onChange={addInput}></Input>
            <Input label='Email' onChange={addInput}></Input>
            <Input label='Location' onChange={addInput}></Input>
        </div>
    )
}


export default headerItem