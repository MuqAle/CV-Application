import { ChangeEvent } from "react"
import Input from "./input"
import emptyResume from "./empty_resume"

interface HeaderProp{
    addInput: (e: ChangeEvent<HTMLInputElement>) => void,
    personalInfo:typeof emptyResume.personalData
}

const HeaderItem = ({personalInfo,addInput}:HeaderProp) => {
    return (
        <div className= 'header'>
            <h2>Personal Details</h2>
            <Input value={personalInfo.firstName} name="firstName" label='First Name' onChange={addInput}></Input>
            <Input value={personalInfo.lastName} name="lastName" label ='Last Name' onChange={addInput}></Input>
            <Input value={personalInfo.location} name="location" label='Location' onChange={addInput}></Input>
            <Input value={personalInfo.email} name="email" label='Email' onChange={addInput}></Input>
            <Input value={personalInfo.phoneNumber} name="phoneNumber" label='Phone Number' onChange={addInput}></Input>
        </div>
    )
}


export default HeaderItem