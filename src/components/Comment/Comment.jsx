import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Comment()  {

    const dispatch = useDispatch();

    const history = useHistory();

    const [valueToAdd, setValueToAdd] = useState({comments: ''});


    // Sets comment
    const selectValue = (event) =>  {
        setValueToAdd({
            ...valueToAdd,
            comments: event.target.value
        });
    }

    // Sends comment and goes to the next page /Review
    const onButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENT',
            payload: valueToAdd
        });
        
        
        history.push('/Review');


    }

    return  (
        <div>
            <h1>Any comments you want to leave?</h1>

            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input onChange={selectValue} type="text" name="comment" placeholder="Comment"/>
            

            <button>NEXT</button>

            </form>

        </div>
    )
}

export default Comment;