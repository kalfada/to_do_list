import { useEffect, useState } from "react"

export default function Clock() {
    const [time, setTime] = useState(new Date())


    function setTimeInterval() {
        setTime(new Date())
    }


    useEffect(() => {
        let interval = setInterval(setTimeInterval, 1000)
        return () => clearInterval(interval)
    }, [])
    return <h1>{time.toLocaleTimeString()}</h1>
}