import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review()  {


    const reviewFeedback = useSelector(store => store.reviewFeedback);

    console.log(reviewFeedback);

    const history = useHistory();

    const onButtonClick = (event) => {
        event.preventDefault();
        
        
        history.push('/Success');
    }

    return  (
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                    
                <li>Feeling: {reviewFeedback.feeling}</li>      
                <li>Understanding: {reviewFeedback.understanding}</li>
                <li>Support: {reviewFeedback.support}</li>
                <li>Comment: {reviewFeedback.comments}</li>
                    
            </ul>
            <button onClick={(event) => onButtonClick(event)} class="middle-buttons">SUBMIT</button>
        </div>
    )
}

export default Review;