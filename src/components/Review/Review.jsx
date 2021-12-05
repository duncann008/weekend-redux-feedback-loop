import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Review()  {


    const reviewFeedback = useSelector(store => store.reviewFeedback);

    const history = useHistory();

    // Posts all the data as an object with the 4 states I dispatched to my reducer as the properties
    const postFeedback = () =>  {
        console.log('Is this thing on?');
        axios({
            method: 'POST',
            url: '/feedback',
            data:   {
                feeling: reviewFeedback.feeling,
                understanding: reviewFeedback.understanding,
                support: reviewFeedback.support,
                comments: reviewFeedback.comments
            }
        }).then(response => {
            console.log(response);
        }).catch(error =>   {
            console.log('POST Error:', error);
        })
    }
    
    // Calls the post and sends us to the /Success page
    const onButtonClick = (event) => {
        event.preventDefault();
        postFeedback();
        
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
            <button onClick={(event) => onButtonClick(event)}>SUBMIT</button>
        </div>
    )
}

export default Review;