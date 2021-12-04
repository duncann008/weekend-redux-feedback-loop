import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feeling()  {

    const history = useHistory();

    const onButtonClick = (event) => {
        event.preventDefault();
        
        
        history.push('/Understanding');


    }



    return  (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input  type="radio" id="1" name="feeling" value="1"/>
            <input  type="radio" id="2" name="feeling" value="2"/>
            <input  type="radio" id="3" name="feeling" value="3"/>
            <input  type="radio" id="4" name="feeling" value="4"/>
            <input  type="radio" id="5" name="feeling" value="5"/>

            <button>NEXT</button>

            </form>
        </div>
    )
}

export default Feeling;