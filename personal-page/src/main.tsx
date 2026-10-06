import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PersonalPage from './PersonalPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersonalPage fullName='Gudli Gudlier Gudlierovich'
    phone='1234567890'
    email='gudli.b@gmail.com'
    city='Uzhorod'
    workExperience='2 years of studying in ITstep'
    skills={["C#", "TS", "DB management", "HTML", "CSS", "React"]}
    photoSrc=''
    />
  </StrictMode>
)
