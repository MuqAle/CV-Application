import Form from "./form/form";
import PreviewForm from "./view/preview";
import emptyResume from "./form/empty_resume";
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useImmer } from 'use-immer'



const FinishedForm = () => {
    const [resume,updateResume] = useImmer(emptyResume) 

    const addItem = (itemType:'experience' | 'education') => {
      if(itemType === 'experience'){
        updateResume((item) => {item.experienceData.push(
          {
            id:uuidv4(),
            company:'',
            position:'',
            location:'',
            startDate:'',
            endDate:'',
            description:''
        }
        )})
      }
      if(itemType === 'education'){
        updateResume((item) => {item.educationData.push(
          {
            id:uuidv4(),
            program:'',
            university:'',
            startDate:'',
            endDate:'',
            description:''
          }
        )
        })
      }
    }
  
    const deleteItem = (id:string,itemType:'experience' | 'education') => {
      if(itemType === 'experience'){
        updateResume(item => {
          const index = item.experienceData.findIndex(t => 
            t.id === id)
            item.experienceData.splice(index,1)
        })
      }
      if(itemType === 'education'){
        updateResume(item => {
          const index = item.educationData.findIndex(t => 
            t.id === id)
            item.educationData.splice(index,1)
        })
      }
    }
  
    const changeArrayItem = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id:string,itemType:'experience' | 'education') => {
      updateResume(item => {
        if(itemType === 'experience'){
          const experience = item.experienceData.find(t => t.id === id)
          type ObjectKey = keyof typeof item.experienceData[0]
          const name = e.target.name as ObjectKey 
          experience![name] = e.target.value
        }
        if(itemType === 'education'){
          const education = item.educationData.find(t => t.id === id)
          type ObjectKey = keyof typeof item.educationData[0]
          const name = e.target.name as ObjectKey 
          education![name] = e.target.value
        }
      })
    }
    
    const changePersonal = (e:ChangeEvent<HTMLInputElement>) => {
      updateResume(item => {
        const name = e.target.name as keyof typeof item.personalData
        item.personalData[name] = e.target.value
      })
    }

    return(
        <main id="form">
          <div className="resume_form">
          <Form resume={resume} deleteItem={deleteItem} addItem={addItem} changeItem={changeArrayItem} addInput={changePersonal}/>
          </div>
          <div className="resume_view">
          <PreviewForm resume={resume}/>
          </div>
        </main>
    )
}

export default FinishedForm