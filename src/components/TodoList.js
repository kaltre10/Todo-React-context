import { Fragment } from "react";

const TodoList = ({loading, tasks, searchTask, onLoading, onEmptyTodos, onSearchTask, sincronize, render, children}) => {
    const propsFunc = children || render;
    return (
        <Fragment>
            { loading && onLoading() }
            { tasks.length === 0 && !loading && onEmptyTodos() } 
            { searchTask.length === 0 && tasks.length > 0 && onSearchTask() }      
            
            {tasks.length > 0  && sincronize &&
               <ul>
                {searchTask.map(propsFunc)}
               </ul>  
            }
            
        </Fragment>
     );
}
 
export default TodoList;