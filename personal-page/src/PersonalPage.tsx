export interface PersonalPageProps {
    fullName: string,
    phone: string,
    email: string,
    city: string,
    workExperience: string,
    skills: string[],
    photoSrc: string
}

export const PersonalPage = ({fullName, phone, email, city, workExperience, skills, photoSrc} : PersonalPageProps) => {
    return <div>
        <h1>{fullName}</h1>
        <p>{phone}</p>
        <p>{email}</p>
        <p>I live in {city}</p>
        <p>{workExperience}</p>
        <ul>My skills: {skills.map(skill => <li>{skill}</li>)}</ul>
        <img src={photoSrc} alt="my photo" />
    </div>
}

export default PersonalPage