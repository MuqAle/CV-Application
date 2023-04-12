import { ChangeEvent } from "react"
import Input from "./input"

interface EducationProp{
    changeItem: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    deleteItem: () => void,
}

const EducationItem = ({changeItem,deleteItem}:EducationProp) => {
    return (
        <li className= 'education'>
            <Input name="program" label='Program/Course' onChange={changeItem}></Input>
            <Input name='university' label ='University' onChange={changeItem}></Input>
            <Input name='startDate' label='Start Date' onChange={changeItem}></Input>
            <Input name='endDate' label='End Date' onChange={changeItem}></Input>
            <textarea name='description' placeholder='Description' onChange={changeItem}></textarea>
            <div className="buttons">
                <button className='education_delete' onClick={deleteItem}>Delete</button>
            </div>
        </li>
    )
}


export default EducationItem