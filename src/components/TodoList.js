import { Fragment } from "react";

const TodoList = ({loading, tasks, searchTask, onLoading, onEmptyTodos, onSearchTask, render}) => {
    return (
        <Fragment>
            { loading && onLoading() }
            { tasks.length === 0 && !loading && onEmptyTodos() } 
            { searchTask.length === 0 && tasks.length > 0 && onSearchTask() }      
            
            {tasks.length > 0  &&
               <ul>
                {searchTask.map(render)}
               </ul>  
            }
            
        </Fragment>
     );
}
 
export default TodoList;