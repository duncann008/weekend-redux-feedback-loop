import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Support()  {

    const dispatch = useDispatch();

    const history = useHistory();

    const [valueToAdd, setValueToAdd] = useState({support: 0});

    // Sets state to the radio button value
    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            support: event.target.value
        });
    }

    // Dispatches the state to the reducer as a property of an object and its value, then routes to /Comment
    const onButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: valueToAdd
        });
        
        
        history.push('/Comment');


    }

    return  (
        <div>
            <h1>How well are you being supported?</h1>

            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input onChange={(event) => selectValue(event)} type="radio" id="1" name="support" value="1"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="2" name="support" value="2"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="3" name="support" value="3"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="4" name="support" value="4"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="5" name="support" value="5"/>

            <button>NEXT</button>

            </form>
        </div>
    )
}

export default Support;