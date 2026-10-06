export interface MovieProps {
    title: string,
    producer: string,
    releaseYear: number,
    studio: string,
    posterSrc: string
}


export const Movie = ({title, producer, releaseYear, studio, posterSrc} : MovieProps) => {
    return <div>
        <h2>{title}</h2>
        <p>Produced by: {producer}</p>
        <p>Released in {releaseYear}</p>
        <p>Presented by studio {studio}</p>
        <img src={posterSrc} alt="poster" />
    </div>
}

export default Movie