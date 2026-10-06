import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Movie from './Movie'
import poster from "../src/img/Inglorious Basterds poster.jpg"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Movie title='Inglorious Basterds' 
    producer='Quentin Tarantino'
    releaseYear={2009}
    studio='Weinstein'
    posterSrc={poster}

    />
  </StrictMode>,
)
