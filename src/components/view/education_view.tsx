
interface EducationViewProp{
    program:string,
    university:string,
    startDate:string,
    endDate:string,
    description:string
}

const educationView = ({program,university,startDate,endDate,description}:EducationViewProp) => {
    return (
        <div className="education_view">
            <div className="education_header">
                <p>{program} | {university}</p>
                <p><b>{startDate} - {endDate}</b></p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default educationView