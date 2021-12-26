import { useState } from "react";
import useLocalStarege from '../hooks/useLocalstorage';
import { v4 as uuidv4 } from 'uuid';

const useTodo = () => {

    const [ search, setSearch ] = useState('');

    const [ stateModal, setModal ] = useState(false);

    const [ tasks, setTasks, loading, error, sincronize,  activeSincronize ] = useLocalStarege('tasksLocal', []);
 
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

    return  [
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
            ];

}

export default useTodo;