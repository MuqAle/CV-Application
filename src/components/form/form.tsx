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
                    {resume.educationData.map(item => (
                        <EducationItem key={item.id} 
                            deleteItem ={() => deleteItem(item.id, 'education')} 
                            changeItem={(e) => changeItem(e,item.id,'education')}/>
                        ))
                    }
                    <button className="education_add" onClick={() => addItem('education')}>Add</button>
                </ul>
                <ul id="experience_data">
                    <h2>Experience</h2>
                    {resume.experienceData.map(item => (
                        <ExperienceItem key={item.id} 
                            deleteItem={()=> deleteItem(item.id,'experience')}
                            changeItem={(e) => changeItem(e,item.id,'experience')}/>
                        ))
                    }
                    <button className="experience_add" onClick={() => addItem('experience')}>Add</button>
                </ul> 
            </div>
        )
}

export default Form