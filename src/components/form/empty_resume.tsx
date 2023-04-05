import { v4 as uuidv4 } from 'uuid'

const emptyResume = {
    personalData:{
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        location:''
    },
    experienceData:[{
        id:uuidv4(),
        program:'',
        university:'',
        startDate:'',
        endDate:'',
        description:''
    }],
    educationData:[{
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