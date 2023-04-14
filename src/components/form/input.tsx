import { ChangeEvent } from "react"

interface Input{
    label:string,
    name:string,
    value:string,
    onChange:(e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value,label,name,onChange}:Input) => {
    return(
        <input value ={value} type='text' name={name} placeholder={label} onChange={onChange}></input>
    )
    
}


export default Input