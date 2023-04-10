interface ExperienceViewProps{
    company:string,
    position:string,
    location:string,
    startDate:string,
    endDate:string,
    description:string
}

const ExperienceView = ({company,position,location,startDate,endDate,description}:ExperienceViewProps) => {
    return(       
        <li className="experience_view">
            <div className="experience_heading">
                <p><b>{position}</b></p>
                <p><b>{startDate} - {endDate}</b></p>
            </div>
            <div className="experience_company">
                <p><i>{company}</i></p>
                <p><i>{location}</i></p>
            </div>
            <p>{description}</p>
        </li>
    )
}

export default ExperienceView
