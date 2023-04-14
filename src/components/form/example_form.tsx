import { v4 as uuidv4 } from 'uuid'

const exampleResume = {
    personalData:{
        firstName:'John',
        lastName:'Smith',
        phoneNumber:'(012)-345-6789',
        email:'john_smith@gmail.com',
        location:'New York'
    },
    educationData:[{
        id:uuidv4(),
        program:'Master of Liberal Arts',
        university:'Monsters University',
        city:'Monstropolis',
        startDate:'May 2018 ',
        endDate:'May 2022',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    },{
        id:uuidv4(),
        program:'Bachelors of Science',
        university:'Monsters University',
        city:'Monstropolis',
        startDate:'May 2012 ',
        endDate:'May 2016',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    }],
    experienceData:[{
        id:uuidv4(),
        company:'Rande Corporate & Investment Banking',
        position:'Associate, Information Technology',
        location:'Detroit, MI',
        startDate:'September 2013',
        endDate:'Present',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    },
    {
        id:uuidv4(),
        company:'Olson Financial ',
        position:'Associate, Information Technology',
        location:'Singapore',
        startDate:'February 2011',
        endDate:'September 2013',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    },
    {
        id:uuidv4(),
        company:'PS Engineering Information Ltd.',
        position:'Software Developer',
        location:'New York City, NY',
        startDate:'July 2010',
        endDate:'January 2011',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    },
    {
        id:uuidv4(),
        company:'Silver Technologies Ltd.',
        position:'Software Developer',
        location:'Dallas, TX',
        startDate:'July 2008',
        endDate:'January 2009',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    }
    ]
}

export default exampleResume