
const AddTask = ({ openModal }) => {
    
    return ( 
        <form>
            <button type='button' onClick={openModal} className='btn-add-task'>+</button>
        </form>
     );
}
 
export default AddTask;