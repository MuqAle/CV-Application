import ExperienceItem from "./experience";
import EducationItem from "./education";
import { ChangeEvent } from "react";
import emptyResume from "./empty_resume";

interface FormProps{
    itemType:'experience' | 'education',
    resume:typeof emptyResume
    deleteItem:(id:string,itemType:'experience' | 'education') => void,
    addItem:(itemType:'experience' | 'education') => void,
    changeItem: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:string,itemType:'experience' | 'education') => void
}

const FormList = ({itemType,resume,deleteItem,addItem,changeItem}:FormProps) => {
    if(itemType === 'experience'){
        return(
            <ul>
                {resume.experienceData.map(item => (
                    <ExperienceItem id={item.id} 
                        deleteItem={()=> deleteItem(item.id,itemType)}
                        changeItem={(e) => changeItem(e,item.id,itemType)}/>
                    ))
                }
                <button onClick={() => addItem(itemType)}>Add</button>
            </ul> 
        )
    }
    if(itemType === 'education'){
        return(
            <ul>
                {resume.educationData.map(item => (
                    <EducationItem id={item.id} 
                        deleteItem ={() => deleteItem(item.id, itemType)} 
                        changeItem={(e) => changeItem(e,item.id,itemType)}/>
                    
                    ))
                }
                <button onClick={() => addItem(itemType)}>Add</button>
            </ul>
        )
    }
    return null
}

export default FormList