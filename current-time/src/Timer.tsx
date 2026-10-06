import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        let id = setInterval(() => {
        setTime(new Date())
    }, 1000)

    return () => {
        clearInterval(id)
    }
    }, [])
    

    return <div>
            {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
        </div>
    
}

export default Timer