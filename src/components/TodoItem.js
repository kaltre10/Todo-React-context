
const TodoItem = ({task, addCompleted, tasksDelete}) => {

    return (
        <li>
            <span class="btn" onClick={() => addCompleted(task.id)}>{task.completed ? '✔️' : '⏲️'}</span>
            <span className={task.completed ? "completed" : null}>{task.name}</span>
            <span class="btn"  onClick={() => tasksDelete(task.id)}> ❌ </span>
        </li> 
     );
}
 
export default TodoItem;