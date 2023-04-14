import { ChangeEvent } from "react";
import Input from "./input";
import emptyResume from "./empty_resume";


interface ExperienceProp{
    changeItem: (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => void,
    deleteItem: () => void
    addItem:(type:string) => void,
    experienceValue:typeof emptyResume.experienceData[0]
}

const ExperienceItem = ({experienceValue,changeItem,deleteItem,addItem}:ExperienceProp) => {

    return(
        <section className="experience">
            <Input value={experienceValue.position} name='position' label='Position' onChange={changeItem}></Input>
            <Input value={experienceValue.company} name='company' label='Company' onChange={changeItem}></Input>
            <Input value={experienceValue.startDate} name='startDate' label='Start Date' onChange={changeItem}></Input>
            <Input value={experienceValue.endDate} name='endDate' label='End Date' onChange={changeItem}></Input>
            <Input value={experienceValue.location} name='location' label='Location' onChange={changeItem}></Input>
            <textarea value={experienceValue.description} name='description' placeholder= 'Description' onChange={changeItem}></textarea>
            <div className="buttons">
                <button className="experience_delete" onClick={deleteItem}>Delete</button>
                <button className="experience_add" onClick={() => addItem('experience')}>Add</button>
            </div>
        </section>
    )
}

export default ExperienceItem