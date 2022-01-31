import React, { Component } from 'react';
import Status from './Status';
import './StatusBar.css'
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            //uploader:true
        }
    }
   
    getData=()=>{
        const thisContext =this
 
        fetch('http://localhost:8080/api/statusService/getstatus').then(response=>response.json())
        .then(json=>{
            console.log(json)
             thisContext.setState({data:json})
        }).catch(err=>{
            console.log(err)
        })
         
     }

     componentDidMount(){
         this.getData()
     }
    render() { 
        return ( <div className="statusbar_container">
             <Status uploader="true"/>
            {
                
               
                this.state.data.map((item)=>(
                    <Status uploader="false"  key={item.statusID} object={item}/>
                ))
            }
            
          
        </div> );
    }
}
 
export default StatusBar;