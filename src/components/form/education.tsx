import { ChangeEvent } from "react"
import Input from "./input"

interface EducationProp{
    addInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    addItem: () => void
    deleteItem: () => void
}

const educationItem = ({addInput,addItem,deleteItem}:EducationProp) => {
    return (
        <div className= 'education'>
            <Input label='Program/Course' onChange={addInput}></Input>
            <Input label ='University' onChange={addInput}></Input>
            <Input label='Start Date' onChange={addInput}></Input>
            <Input label='End Date' onChange={addInput}></Input>
            <textarea  placeholder='Description' onChange={addInput}></textarea>
            <div className="buttons">
                <button onClick={addItem}>Add</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}


export default educationItem