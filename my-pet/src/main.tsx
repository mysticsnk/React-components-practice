import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PetInfo from './PetInfo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PetInfo type='cat' name='Murzik' color="black" age={7} />
  </StrictMode>,
)
