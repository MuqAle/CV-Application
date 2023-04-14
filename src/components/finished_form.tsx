import Form from "./form/form";
import PreviewForm from "./view/preview";
import emptyResume from "./form/empty_resume";
import exampleResume from "./form/example_form";
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useImmer } from 'use-immer'
import ResumePDF from "./pdf_genereator";
import { PDFDownloadLink } from "@react-pdf/renderer";




const FinishedForm = () => {
    const [resume,updateResume] = useImmer(exampleResume) 

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
            city:'',
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

    const emptyResumeBtn = () => {
      updateResume(emptyResume)
    }

    const exampleResumeBtn =() => {
      updateResume(exampleResume)
    }

    return(
        <main>
          <div className="button_group">
            <button className='clear_btn' onClick={emptyResumeBtn}>Clear Resume</button>
            <button className="example_btn" onClick={exampleResumeBtn}>Example Resume</button>
            <PDFDownloadLink  document={<ResumePDF resume={resume}/>} fileName={resume.personalData.firstName +'_'+ resume.personalData.lastName+'_Resume'}>
              <button className="pdf_btn">Render PDF</button>
            </PDFDownloadLink>
          </div>
          <div id="form">
            <div className="resume_form">
            <Form resume={resume} deleteItem={deleteItem} addItem={addItem} changeItem={changeArrayItem} addInput={changePersonal}/>
            </div>
            <div className="resume_view">
            <PreviewForm resume={resume}/>
            </div>
          </div>
        </main>
    )
}

export default FinishedForm