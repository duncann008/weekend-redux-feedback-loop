import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Understanding()  {

    const [valueToAdd, setValueToAdd] = useState({understanding: 0});

    const history = useHistory();

    const dispatch = useDispatch();

    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            understanding: event.target.value
        });
    }

    const onButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: valueToAdd
        });
        
        history.push('/Support');


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