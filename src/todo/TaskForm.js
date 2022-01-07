import { useState } from 'react'
import '../css/TaskForm.css'

function TaskForm() {
    const [counter, setCounter] = useState(0)

    function clicked(event) {
        event.preventDefault()
        setCounter(counter + 1)
    }

    return (
        <form action="" onSubmit={clicked}>
            <input type="text" name="" id="" className="textInput" />
            <input type="submit" value="+" className="submit_btn"/>
        </form>
    )
}

export default TaskForm