import { useState } from 'react'
import emptyResume from './components/form/empty_resume'
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useImmer } from 'use-immer'



function App() {
  const [resume,updateResume] = useImmer(emptyResume) 

  const addItem = (itemType:'experience' | 'education') => {
    if(itemType === 'experience'){
      updateResume(() => {resume.experienceData.push(
        
      )})
    }
  }

  const accessEvent = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, formObject:string) => {
    formObject = e.target.value
  }

  return (
    <div className="App">
    </div>
  )
}

export default App
