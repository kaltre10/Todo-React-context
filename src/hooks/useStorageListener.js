import {useState} from "react";

const useStorageListener = (activeSincronize) => {
    
        const [ show, setShow ] = useState(false);

        window.addEventListener('storage', change => {
            if(change.key === 'tasksLocal'){
                setShow(true);
            }
        });

        const toggleShow = () => {
            activeSincronize();
            setShow(false);
        }

        return {
            show, 
            toggleShow
        }
}
 
export default useStorageListener;