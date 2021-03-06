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

            <div id="checkboxes">
                <div class="checkboxgroup">
                    <label for="1">1</label>
                    <input onChange={(event) => selectValue(event)} type="radio" id="1" name="understanding" value="1"/>
                </div>
                <div class="checkboxgroup">
                    <label for="2">2</label>
                    <input onChange={(event) => selectValue(event)} type="radio" id="2" name="understanding" value="2"/>
                </div>
                <div class="checkboxgroup">
                    <label for="3">3</label>
                    <input onChange={(event) => selectValue(event)} type="radio" id="3" name="understanding" value="3"/>
                </div>
                <div class="checkboxgroup">
                    <label for="4">4</label>
                    <input onChange={(event) => selectValue(event)} type="radio" id="4" name="understanding" value="4"/>
                </div>
                <div class="checkboxgroup">
                    <label for="5">5</label>
                    <input onChange={(event) => selectValue(event)} type="radio" id="5" name="understanding" value="5"/>
                </div>
            </div>

            <button className="radio">NEXT</button>

            </form>

        </div>
    )
}

export default Understanding;