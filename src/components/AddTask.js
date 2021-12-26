import { Fragment } from "react";

const AddTask = ({ loading, openModal }) => 
    <form>
        <button type='button' onClick={openModal} className='btn-add-task'>+</button>
    </form>
export default AddTask;