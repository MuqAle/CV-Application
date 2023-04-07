import { useState } from 'react'
import emptyResume from './components/form/empty_resume'
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useImmer } from 'use-immer'



function App() {
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

  const changeItem = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, formObject:string) => {

  }

  return (
    <div className="App">
    </div>
  )
}

export default App
