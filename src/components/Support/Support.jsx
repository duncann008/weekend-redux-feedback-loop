function Support()  {



    return  (
        <div>
            <h1>How well are you being supported?</h1>

            <form onSubmit={(event) => onButtonClick(event)}>
      
            <input  type="radio" id="1" name="support" value="1"/>
            <input  type="radio" id="2" name="support" value="2"/>
            <input  type="radio" id="3" name="support" value="3"/>
            <input  type="radio" id="4" name="support" value="4"/>
            <input  type="radio" id="5" name="support" value="5"/>

            <button>NEXT</button>

            </form>
        </div>
    )
}

export default Support;