import { ChangeEvent } from "react"

interface Input{
    label:string,
    name:string,
    onChange:(e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label,name,onChange}:Input) => {
    return(
        <input type='text' name={name} placeholder={label} onChange={onChange}></input>
    )
    
}


export default Input