import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understanding()  {

    const history = useHistory();

    const onButtonClick = (event) => {
        event.preventDefault();
        
        
        history.push('/Support');


    }


    return  (
        <div>
            <h1>How well are you understanding the content?</h1>

            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input  type="radio" id="1" name="understanding" value="1"/>
            <input  type="radio" id="2" name="understanding" value="2"/>
            <input  type="radio" id="3" name="understanding" value="3"/>
            <input  type="radio" id="4" name="understanding" value="4"/>
            <input  type="radio" id="5" name="understanding" value="5"/>

            <button>NEXT</button>

            </form>

        </div>
    )
}

export default Understanding;