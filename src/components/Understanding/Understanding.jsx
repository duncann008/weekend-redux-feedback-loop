import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Understanding()  {

    const [valueToAdd, setValueToAdd] = useState({understanding: 0});

    const history = useHistory();

    const dispatch = useDispatch();

    // Sets state to the radio button value
    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            understanding: event.target.value
        });
    }
    // Dispatches the state to the reducer as a property of an object and its value, then routes to /Support
    const onButtonClick = (event) => {
        
        event.preventDefault();

        if (valueToAdd.understanding > 0)   {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: valueToAdd
            });
            
            history.push('/Support');
            }
        else    {
            alert('Please select a value.');
            return;
        }

    }


    return  (
        <div>
            <h1>How well are you understanding the content?</h1>

            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input onChange={(event) => selectValue(event)} type="radio" id="1" name="understanding" value="1"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="2" name="understanding" value="2"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="3" name="understanding" value="3"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="4" name="understanding" value="4"/>
            <input onChange={(event) => selectValue(event)} type="radio" id="5" name="understanding" value="5"/>

            <button>NEXT</button>

            </form>

        </div>
    )
}

export default Understanding;