
interface EducationViewProp{
    program:string,
    university:string,
    city:string,
    startDate:string,
    endDate:string,
    description:string
}

const EducationView = ({program,university,city,startDate,endDate,description}:EducationViewProp) => {
    return (
        <li className="education_view">
            <div className="education_header">
                <p>{program} | {university} | {city}</p>
                <p><b>{startDate} - {endDate}</b></p>
            </div>
            <p>{description}</p>
        </li>
    )
}

export default EducationView