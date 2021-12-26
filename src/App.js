import { useState } from 'react';
import Search from './components/Search';
import TodoItem from './components/TodoItem';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Modal from './modals';
import useTodo from './hooks/useTodo';
import Loader from './components/Loader';
import ChangeAlertWithStorageListener from './components/hoc/changeAlert';

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
        addCompleted,
        sincronize,
        activeSincronize
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
            {searchTask.length > 0 &&
              <p>Has completado {tasksCompleted()} de {searchTask.length} tareas</p>}

            <Search>
              <form>
                  <input 
                      type="text" 
                      placeholder='Search...'
                      onChange={e => setSearch(e.target.value)}
                      disabled={loading}
                  />
              </form>
            </Search>

            <TodoList
               loading={loading}
               tasks={tasks}
               searchTask={searchTask} 
               sincronize={sincronize} 
               onLoading={() =>  <Loader />}
               onEmptyTodos={() =>  <p> No hay Tareas Agregadas..!</p>}
               onSearchTask={() => <p> No hay Resultados..!</p>}
               tasks={tasks}
               render={ task => 
                <TodoItem
                  key={task.id}
                  task={task}
                  addCompleted={addCompleted}
                  tasksDelete={tasksDelete}
                />}
            >
              {/* {task => 
                <TodoItem
                  key={task.id}
                  task={task}
                  addCompleted={addCompleted}
                  tasksDelete={tasksDelete}
                />} */}
            </TodoList>
                
            {stateModal &&
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
              </Modal>}
            
            <AddTask 
              loading={loading}
              openModal={openModal}
            />

            <ChangeAlertWithStorageListener activeSincronize={activeSincronize} />
        </div>
     );
}

export default App;