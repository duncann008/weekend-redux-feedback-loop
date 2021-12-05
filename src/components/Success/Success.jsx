import { useHistory } from 'react-router-dom';


function Success()  {

    const history = useHistory();

    // Routes back to /Feeling
    const onButtonClick = (event) => {
        event.preventDefault();
        
        
        history.push('/');
    }

    return  (
        <div>
            <h1>Thank You!</h1>
            <button onClick={(event) => onButtonClick(event)}>Leave New Feedback</button>
        </div>
    )
}

export default Success;