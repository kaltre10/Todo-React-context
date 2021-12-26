import {useState} from "react";

const withStorageListener = (WrapperComponent) => {
    return function WrapperComponentWithStorageListener(props){
        const [ show, setShow ] = useState(false);
        window.addEventListener('storage', change => {
            if(change.key === 'tasksLocal'){
                setShow(true);
            }
        });

        const toggleShow = () => {
            props.activeSincronize();
            setShow(false);
        }
        return (
            <WrapperComponent show={show} toggleShow={toggleShow} />
        )
    }
}
 
export default withStorageListener;