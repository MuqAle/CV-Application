import { ChangeEvent } from "react"
import Input from "./input"

interface EducationProp{
    addInput: (e: ChangeEvent<HTMLInputElement>) => void,
    addItem: () => void
    deleteItem: () => void
}

const skillItem = ({addInput,addItem,deleteItem}:EducationProp) => {
    return (
        <div className= 'skills'>
            <Input label='Skill' onChange={addInput}></Input>
            <Input label ='Description' onChange={addInput}></Input>
            <div className="buttons">
                <button onClick={addItem}>Add</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}


export default skillItem