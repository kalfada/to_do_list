import TaskForm from './TaskForm'
import List from './List'
import '../css/todo.css'

function ToDo() {
    return(
        <div className='ToDo'>
            <TaskForm />
            <List done={true}/>
            <List done={false}/>
        </div>
    )
}

export default ToDo