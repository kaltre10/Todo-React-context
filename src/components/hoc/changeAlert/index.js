import withStorageListener from './withStorageListener';
import { Fragment } from 'react';

const changeAlert = ({show, toggleShow}) => {
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

const ChangeAlertWithStorageListener = withStorageListener(changeAlert)
 
export default ChangeAlertWithStorageListener;