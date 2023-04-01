import { ChangeEvent } from "react";
import Input from "./input";


interface ExperienceProp{
    addInput: (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => void,
    addItem: () => void
    deleteItem: () => void
}
const experienceItem = ({addInput,addItem,deleteItem}:ExperienceProp) => {
    return(
        <div className="experience">
            <Input label='Company' onChange={addInput}></Input>
            <Input label='Position' onChange={addInput}></Input>
            <Input label='Location' onChange={addInput}></Input>
            <Input label='Start Date' onChange={addInput}></Input>
            <Input label='End Date' onChange={addInput}></Input>
            <textarea placeholder= 'Description' onChange={addInput}></textarea>
            <div className="buttons">
                <button onClick={addItem}>Add</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default experienceItem