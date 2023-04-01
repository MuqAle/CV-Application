import { ChangeEvent } from "react"

interface Input{
    label:string,
    onChange:(e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label,onChange}:Input) => {
    return(
        <input type='text' placeholder={label} onChange={onChange}></input>
    )
    
}


export default Input