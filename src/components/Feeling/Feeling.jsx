import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling()  {

    const dispatch = useDispatch();

    const history = useHistory();

    const [valueToAdd, setValueToAdd] = useState({feeling: 0});

    // Sets the state to the value of the clicked radio button as a property of an object and its value
    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            feeling: event.target.value
        });
    }

    // Sends the state as payload to our reducer as a property of an object then routes to /Understanding
    const onButtonClick = (event) => {
        event.preventDefault();

        if (valueToAdd.feeling > 0) {
            dispatch({
                type: 'SET_FEELING',
                payload: valueToAdd
            });
            
            history.push('/Understanding');
        }
        else    {
            alert('Please select a value.');
            return;
        }

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