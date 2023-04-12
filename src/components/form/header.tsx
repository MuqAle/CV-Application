import { ChangeEvent } from "react"
import Input from "./input"

interface HeaderProp{
    addInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

const HeaderItem = ({addInput}:HeaderProp) => {
    return (
        <div className= 'header'>
            <h2>Personal Details</h2>
            <Input name="firstName" label='First Name' onChange={addInput}></Input>
            <Input name="lastName" label ='Last Name' onChange={addInput}></Input>
            <Input name="location" label='Location' onChange={addInput}></Input>
            <Input name="email" label='Email' onChange={addInput}></Input>
            <Input name="phoneNumber" label='Phone Number' onChange={addInput}></Input>
        </div>
    )
}


export default HeaderItem