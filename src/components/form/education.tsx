import { ChangeEvent } from "react"
import Input from "./input"
import emptyResume from "./empty_resume"

interface EducationProp{
    changeItem: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    deleteItem: () => void,
    addItem: (type:string) => void,
    educationValue: typeof emptyResume.educationData[0]
}

const EducationItem = ({educationValue,changeItem,deleteItem,addItem}:EducationProp) => {
    return (
        <section className= 'education'>
            <Input value={educationValue.program} name="program" label='Program/Course' onChange={changeItem}></Input>
            <Input value={educationValue.university} name='university' label ='University' onChange={changeItem}></Input>
            <Input value={educationValue.city} name='city' label ='City' onChange={changeItem}></Input>
            <Input value={educationValue.startDate} name='startDate' label='Start Date' onChange={changeItem}></Input>
            <Input value={educationValue.endDate} name='endDate' label='End Date' onChange={changeItem}></Input>
            <textarea value={educationValue.description} name='description' placeholder='Description' onChange={changeItem}></textarea>
            <div className="buttons">
                <button className='education_delete' onClick={deleteItem}>Delete</button>
                <button className="education_add" onClick={() => addItem('education')}>Add</button>
            </div>
        </section>
    )
}


export default EducationItem