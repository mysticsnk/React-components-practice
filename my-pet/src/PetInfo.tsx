export interface PetInfoProps {
    type: string,
    name: string,
    age: number,
    color: string
}

export const PetInfo = ({type, name, age, color} : PetInfoProps) => {
    return <div>
        <h2>{name}</h2>
        <p>A {type}</p>
        <p>Aged {age}</p>
        <p>Color: {color}</p>
    </div>
}

export default PetInfo