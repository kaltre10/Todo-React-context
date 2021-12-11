import { useState, useContext } from 'react';
import Search from './Search';
import TodoItem from './TodoItem';
import AddTask from './AddTask';
import { TodoContext } from '../todoContext';
import Modal from '../modals';

const TodoIU = () => {

    const {
        setSearch,
        tasks,
        loading,
        searchTask,
        tasksCompleted,
        tasksDelete,
        stateModal,
        openModal,
        addTaskContext,
        addCompleted
    } = useContext(TodoContext);

    const [ input, setInput ] = useState('');

    const onChangeInput = e => setInput(e.target.value);
    
    return ( 

        <div className="App">

            <h1>Todo React</h1>

            {(searchTask.length > 0 && !loading)
              ?<p>Has completado {tasksCompleted()} de {searchTask.length} tareas</p>
              : null}

            <Search 
              setSearch={setSearch} 
            />

            { loading 
              ? <p> loading... </p>
              : (
                  <ul>
                    {tasks.length > 0
                      ? ( searchTask.map( task => 
                            <TodoItem
                              key={task.id}
                              task={task}
                              tasksDelete={tasksDelete}
                              addCompleted={addCompleted}
                            />)   
                        )
                      : <p> No hay Tareas Agregadas..!</p>
                    }
                  </ul>
                )
            }
            { stateModal
              ? (
                  <Modal>
                    <div className='modal'>
                      <h3>Agregra una nueva Tarea</h3>
                      <form>
                        <div><textarea onChange={onChangeInput}></textarea></div>
                        <button type='button' onClick={ () => addTaskContext(input)}>Añadir</button>
                        <button type='button' onClick={openModal}>Cancelar</button>
                      </form>
                    </div>
                  </Modal>
                )
              : null
            }
            
            <AddTask />
        </div>
     );
}
 
export default TodoIU;