import React, { Component } from 'react';
import "./RightSide.css"
import Imagelayout from '../ImageLayout';
import dp0 from '../../../images/dp0.png'
import dp1 from '../../../images/dp1.png'
import dp2 from '../../../images/dp2.png'
 
class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state={ 
            data:[] 
        }
    }
  

    getData = ()=>{
        const thisContext=this
       fetch('http://localhost:8080/api/userService/getUserDetails').then(response=>response.json())
       .then(json=>{
           thisContext.setState({data:json})
          // console.log(json)
       }).catch(err=>{
           console.log(err)
       })
    }
    
       componentDidMount(){
           this.getData();
       }
    


    render() { 
        return (
        <div className="rightside_container">
           <div className="rightside_contact">
               Contacts
           </div>
           <div className="rightside_content">
           <div>
             {
                 this.state.data.map((item)=>(
                     
               <Imagelayout className="left_side" key={item.userID} image={item.userImage} text={item.userName} />
                 ))
               
          
           }
           
        </div>
           </div>
        </div> 
         );
    }
}
 
export default RightSide;