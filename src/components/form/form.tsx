import ExperienceItem from "./experience";
import EducationItem from "./education";
import { ChangeEvent } from "react";
import emptyResume from "./empty_resume";
import HeaderItem from "./header";
import { v4 as uuidv4 } from 'uuid'

interface FormProps{
    resume:typeof emptyResume
    deleteItem:(id:string,itemType:'experience' | 'education') => void,
    addItem:(itemType:'experience' | 'education') => void,
    changeItem: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:string,itemType:'experience' | 'education') => void
    addInput:(e: ChangeEvent<HTMLInputElement>) => void
}

const Form = ({resume,deleteItem,addItem,changeItem,addInput}:FormProps) => {
        return(
            <div id="input_form">
                <HeaderItem addInput={addInput}/>
                <ul id="education_data">
                    <h2>Education</h2>
                    {
                    resume.educationData.length === 0 ? (
                        <button className="education_add" onClick={() => addItem('education')}>Add</button>
                    ):
                        (resume.educationData.map(item => (
                            <EducationItem key={item.id} 
                            deleteItem ={() => deleteItem(item.id, 'education')} 
                            changeItem={(e) => changeItem(e,item.id,'education')}
                            addItem={() => addItem('education')}/>
                            )))
                    }
                    
                </ul>
                <ul id="experience_data">
                    <h2>Experience</h2>
                    {
                    resume.experienceData.length === 0 ? (
                        <button className="experience_add" onClick={() => {addItem('experience')}}>Add</button>
                    ):
                        (resume.experienceData.map(item => (
                            <ExperienceItem key={item.id} 
                                deleteItem={()=> deleteItem(item.id,'experience')}
                                changeItem={(e) => changeItem(e,item.id,'experience')}
                                addItem={() => addItem('experience')}/>
                            )))
                    }

                </ul> 
            </div>
        )
}

export default Form