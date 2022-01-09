import TaskForm from './TaskForm'
import List from './List'
import '../css/todo.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ToDo() {
    const [list, setList] = useState([])

    function getTodo() {
        axios.get('http://localhost:4000/todo')
            .then(res => {
                setList(res.data);
            })
        }
        
    useEffect(() => getTodo(),[])

    return (
        <div className='ToDo'>
            <TaskForm />
            <List list={list.filter(t=> t.done)} refreshView={getTodo}/>
            <hr />
            <List list={list.filter(t=> !t.done)} refreshView={getTodo} />
        </div>
    )
}

export default ToDo