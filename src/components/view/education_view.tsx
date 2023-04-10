
interface EducationViewProp{
    program:string,
    university:string,
    startDate:string,
    endDate:string,
    description:string
}

const EducationView = ({program,university,startDate,endDate,description}:EducationViewProp) => {
    return (
        <li className="education_view">
            <div className="education_header">
                <p>{program} | {university}</p>
                <p><b>{startDate} - {endDate}</b></p>
            </div>
            <p>{description}</p>
        </li>
    )
}

export default EducationView