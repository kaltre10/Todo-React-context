import { useState } from 'react';
import Search from './components/Search';
import TodoItem from './components/TodoItem';
import AddTask from './components/AddTask';
import Modal from './modals';
import useTodo from './hooks/useTodo';

function App() {

  const [
        search,
        setSearch,
        tasks,
        setTasks,
        loading,
        error,
        searchTask,
        tasksCompleted,
        tasksDelete,
        stateModal,
        openModal,
        addTaskContext,
        addCompleted
    ] = useTodo();

    const [ input, setInput ] = useState('');
    const [ errorInput, setErrorInput] = useState(false);

    const onChangeInput = e => {
      setErrorInput(false);
      setInput(e.target.value);
    };

    const addTask = () => {

      if(input.trim() === ''){
        setErrorInput(true);
        setInput('');
        return;
      }
      
      setInput('');
      addTaskContext(input);
      setErrorInput(false);
    }
    
    const { inputValue } = input; 

    return ( 

        <div className="App">

            <h1>Todo React</h1>
            {(searchTask.length > 0 && !loading)
              ?<p>Has completado {tasksCompleted()} de {searchTask.length} tareas</p>
              : null}

            <Search>
              <form>
                  <input 
                      type="text" 
                      placeholder='Search...'
                      onChange={e => setSearch(e.target.value)}
                  />
              </form>
            </Search>

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
                        <div>
                              <textarea 
                                className={ errorInput ? 'error-input' : ''}
                                onChange={onChangeInput} 
                                value={inputValue}>
                              </textarea>
                        </div>
                        <button type='button' onClick={addTask}>Añadir</button>
                        <button type='button' onClick={openModal}>Cancelar</button>
                      </form>
                    </div>
                  </Modal>
                )
              : null
            }
            
            <AddTask>
              <form>
                <button type='button' onClick={openModal} className='btn-add-task'>+</button>
              </form>
            </AddTask>
        </div>
     );
}

export default App;