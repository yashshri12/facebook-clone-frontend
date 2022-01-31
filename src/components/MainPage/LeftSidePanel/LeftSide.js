import React, { Component } from 'react';
import Imagelayout from '../ImageLayout';
import covid from '../../../images/covid.png'
import memories from '../../../images/memories.png'
import groups from '../../../images/groups.png'
import ads from '../../../images/ads.png'
import admanager from '../../../images/admanager.png'
import blood from '../../../images/blood.png'
import business from '../../../images/business.png'
import "./LeftSide.css"

class LeftSide extends Component {
    constructor(props) {
        super(props);

        this.state={ 
            data:[] 
        }
    }
    
getData = ()=>{
    let jsondata=[
        {
            "id":1,
            "image":covid,
            "text":"Covid Information Center"
        },
        {
            "id":2,
            "image":memories,
            "text":"Memories"
        },
        {
            "id":4,
            "image":ads,
            "text":"Ads"
        },
        {
            "id":5,
            "image":admanager,
            "text":"admanager"
        },
        {
            "id":6,
            "image":blood,
            "text":"Blood"
        },
        {
            "id":7,
            "image":business,
            "text":"Business"
        },
        {
            "id":8,
            "image":groups,
            "text":"Groups"
        },
        
    ];
  this.setState({data:jsondata})
}

   componentDidMount(){
       this.getData();
   }

    render() { 
        return (<div>
             {
                 this.state.data.map((item)=>(
                     <Imagelayout className="left_side" key={item.id} image={item.image} text={item.text} />
                 ))
               
          
           }
           
        </div> 
         );
    }
}
 
export default LeftSide;