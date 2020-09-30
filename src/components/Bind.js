import React, { Component } from 'react';
import Person from './Person';

class Bind extends Component {
    state = {
        person: [
            {name: " "}
        ]
    };
    
    changenamedata = (event) => {
        this.setState({
            person: [
                {name: event.target.value}
            ]
        })
    }

    render() {
        return(
            <div>
                <Person 
                name={this.state.person[0].name} 
                age={this.state.person[0].age} 
                changename={this.changenamedata}
                />
            </div>
        );
    }
}


export default Bind;