import { useState, createContext } from "react";
import useLocalStarege from '../hooks/useLocalstorage';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const TodoProvider = props => {

    const [ search, setSearch ] = useState('');

    const [ stateModal, setModal ] = useState(false);

    const [ tasks, setTasks, loading, error ] = useLocalStarege('tasksLocal', []);

    let searchTask;

    search !== ''
        ? searchTask = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()))
        : searchTask = tasks

    const tasksCompleted = () => 
        tasks.filter(task => task.completed === true).length;

    const tasksDelete = id => setTasks([ ...tasks.filter(task => task.id !== id )]);

    const openModal = () => setModal(stateModal ? false : true);

    const addTaskContext = task =>  {
        const newTaks = { 
            id: uuidv4(),
            name: task,
            completed: false
         }
        setTasks( [ ...tasks, newTaks ] );
        openModal();
    };

    const addCompleted = id => {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed ? task.completed = false : task.completed = true;
            }
            return task;
        });
        setTasks(newTasks);
    }

    return(
        <TodoContext.Provider
            value={{
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
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }