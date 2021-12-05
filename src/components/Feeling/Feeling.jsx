import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling()  {

    const dispatch = useDispatch();

    const history = useHistory();

    const [valueToAdd, setValueToAdd] = useState({feeling: 0});

    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            feeling: event.target.value
        });
    }

    const onButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: valueToAdd
        });
        
        
        history.push('/Understanding');


    }



    return  (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input onChange={(event) => selectValue(event)} type="radio" id="1" name="feeling" value="1"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="2" name="feeling" value="2"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="3" name="feeling" value="3"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="4" name="feeling" value="4"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="5" name="feeling" value="5"/>

            <button>NEXT</button>

            </form>
        </div>
    )
}

export default Feeling;