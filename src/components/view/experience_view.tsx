interface ExperienceViewProps{
    company:string,
    position:string,
    location:string,
    startDate:string,
    endDate:string,
    description:string
}

const experienceView = ({company,position,location,startDate,endDate,description}:ExperienceViewProps) => {
    return(       
        <div>
            <div className="experience_heading">
                <p><b>{position}</b></p>
                <p><b>{startDate} - {endDate}</b></p>
            </div>
            <div className="experience_company">
                <p><i>{company}</i></p>
                <p><i>{location}</i></p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default experienceView
