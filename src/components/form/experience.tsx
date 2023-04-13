import { ChangeEvent } from "react";
import Input from "./input";


interface ExperienceProp{
    changeItem: (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => void,
    deleteItem: () => void
    addItem:(type:string) => void
}

const ExperienceItem = ({changeItem,deleteItem,addItem}:ExperienceProp) => {
    return(
        <section className="experience">
            <Input  name='position' label='Position' onChange={changeItem}></Input>
            <Input  name='company' label='Company' onChange={changeItem}></Input>
            <Input  name='startDate' label='Start Date' onChange={changeItem}></Input>
            <Input  name='endDate' label='End Date' onChange={changeItem}></Input>
            <Input  name='location' label='Location' onChange={changeItem}></Input>
            <textarea name='description' placeholder= 'Description' onChange={changeItem}></textarea>
            <div className="buttons">
                <button className="experience_delete" onClick={deleteItem}>Delete</button>
                <button className="experience_add" onClick={() => addItem('experience')}>Add</button>
            </div>
        </section>
    )
}

export default ExperienceItem