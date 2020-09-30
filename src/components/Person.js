import React from 'react';
import './css/Person.css';

const Person = (props) => {
    return(
        <div>
            <div className="jumbotron">
                <h3>Hello,</h3>
                <p>This is an example of Two Way Binding.</p>
            </div><br></br>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h6>Type text in the below textarea.</h6>
                    <textarea className="form-control" type="text" name="peron-name" onChange={props.changename} />
                </div>
                <div className="col-md-6 col-lg-6" id="display-result">
                    <h6>You typed.</h6>
                    <div className="px-3 py-2" id="resultbox"> {props.name} </div>
                </div>
            </div>
        </div>            
    )
};

export default Person;