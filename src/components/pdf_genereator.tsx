import { Page, Text, View, Document, StyleSheet,Font } from '@react-pdf/renderer';
import emptyResume from './form/empty_resume';

interface Resume{
    resume:typeof emptyResume
}

const styles = StyleSheet.create({
    personalName:{fontFamily:'Times-Bold', fontSize:'16pt'},
    text:{fontFamily:'Times-Roman', fontSize:'12pt'},
    subHeading:{fontFamily:'Times-Bold', fontSize:'14pt', textDecoration:'underline',marginTop:'12pt'},
    boldText:{fontFamily:'Times-Bold',fontSize:'12pt'},
    italicText:{fontFamily:'Times-Italic',fontSize:'12pt'},
    format:{flexDirection: 'row',justifyContent:'space-between'}
})


const ResumePDF = ({resume}:Resume) => (
    <Document>
        <Page size="A4" style={{padding:'1in'}}>
            <View style={{textAlign:'center'}}>
                <Text style={styles.personalName}>
                    {resume.personalData.firstName} {resume.personalData.lastName}
                </Text>
                <Text style={styles.text}>
                    {resume.personalData.location}  |  {resume.personalData.email}  |  {resume.personalData.phoneNumber}
                </Text>
            </View>
                <Text style={styles.subHeading}>Education</Text>
                {resume.educationData.map(education => (
                    <View key={education.id}>
                        <View style={[styles.format,{marginTop:'12pt'}]}>
                            <Text style={styles.text}>{education.program} | {education.university}</Text>
                            <Text style={styles.boldText}>{education.startDate} - {education.endDate}</Text>
                        </View>
                        <Text style={[styles.text,{marginLeft:'24pt'}]}>{education.description}</Text>
                    </View>
                ))}
            <View>
            <View>
                <Text style={styles.subHeading}>Experience</Text>
                {resume.experienceData.map(experience => (
                    <View key={experience.id}>
                        <View style={[styles.format,{marginTop:'12pt'}]}>
                            <Text style={styles.boldText}>{experience.position}</Text>
                            <Text style={styles.boldText}>{experience.startDate} - {experience.endDate}</Text>
                        </View>
                        <View style={styles.format}>
                            <Text style={styles.italicText}>{experience.company}</Text>
                            <Text style={styles.italicText}>{experience.location}</Text>
                        </View>
                        <Text style={[styles.text,{marginLeft:'24pt'}]}>{experience.description}</Text>
                    </View>
                ))}
            </View>
            </View>
        </Page>
    </Document>
)

export default ResumePDF
