import { Fragment } from "react";

const ChangeAlert = ({show, toggleShow}) => {
    if(show){
        return (
            <Fragment>
                <p>Hubo cambios en tasksLocal</p>
                <button onClick={() => toggleShow(false)}>Refrescar</button>
            </Fragment>
        )
    }else{
        return null;
    }
    
}
 
export default ChangeAlert;