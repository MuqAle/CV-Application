import EducationView from "./education_view";
import ExperienceView from "./experience_view";
import HeaderView from "./header_view";
import emptyResume from "../form/empty_resume";


interface Preview{
    resume: typeof emptyResume
}
const PreviewForm = ({resume}:Preview) => {
    return(
        <div id="preview">
            <HeaderView firstName={resume.personalData.firstName} lastName={resume.personalData.lastName} location={resume.personalData.location} email={resume.personalData.email} number={resume.personalData.phoneNumber}/>
            <ul id="education_data_view">
                <h2>Education</h2>
                
                {resume.educationData.map(item => (
                    <EducationView key={item.id} program={item.program} university={item.university} startDate={item.startDate} endDate={item.endDate} description={item.description}/>
                ))}
            </ul>
            <ul id="experience_data_view">
                <h2>Work Experience</h2>
                {resume.experienceData.map(item => (
                    <ExperienceView key={item.id} company={item.company} position={item.position} location={item.location} startDate={item.startDate} endDate={item.endDate} description={item.description}/>
                ))}
            </ul>
        </div>
    )
}

export default PreviewForm