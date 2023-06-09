import { v4 as uuidv4 } from 'uuid'

const emptyResume = {
    personalData:{
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        location:''
    },
    educationData:[{
        id:uuidv4(),
        program:'',
        university:'',
        city:'',
        startDate:'',
        endDate:'',
        description:''
    }],
    experienceData:[{
        id:uuidv4(),
        company:'',
        position:'',
        location:'',
        startDate:'',
        endDate:'',
        description:''
    }]
}

export default emptyResume