import { ChangeEvent } from "react";
import Input from "./input";


interface ExperienceProp{
    changeItem: (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => void,
    deleteItem: () => void
}

const ExperienceItem = ({changeItem,deleteItem}:ExperienceProp) => {
    return(
        <li className="experience">
            <Input  name='position' label='Position' onChange={changeItem}></Input>
            <Input  name='company' label='Company' onChange={changeItem}></Input>
            <Input  name='location' label='Location' onChange={changeItem}></Input>
            <Input  name='startDate' label='Start Date' onChange={changeItem}></Input>
            <Input  name='endDate' label='End Date' onChange={changeItem}></Input>
            <textarea name='description' placeholder= 'Description' onChange={changeItem}></textarea>
            <div className="buttons">
                <button className="experience_delete" onClick={deleteItem}>Delete</button>
            </div>
        </li>
    )
}

export default ExperienceItem