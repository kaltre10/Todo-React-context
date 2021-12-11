import { useContext } from 'react';
import { TodoContext } from '../todoContext';

const AddTask = () => {

    const { openModal } = useContext(TodoContext);
    
    return ( 
        <form>
            <button type='button' onClick={openModal} className='btn-add-task'>+</button>
        </form>
     );
}
 
export default AddTask;