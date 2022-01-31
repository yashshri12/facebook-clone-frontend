import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';

class Imagelayout extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( <div className="imagelayout_container">
            
                <div className="imagelayout_imglay">
                   <Avatar className="imagelayout_img" src={this.props.image}/>   
                </div>
                <div className="imagelayout_text">
                   {this.props.text}
                </div>
            
        </div> );
    }
}
 
export default Imagelayout;