import { Paper } from '@material-ui/core';
import firebase from 'firebase';
import React, { Component } from 'react';
import uploadIcon from '../../../images/upload.png'

class Status extends Component {
    constructor(props) {
        super(props);
    }

    openBox=(event)=>{
       let image =event.target.files[0]

       if(image==undefined || image==null){
           return
       }

       const thisContext =this
         var uploadTask =firebase.storage().ref("status").child(image.name).put(image)
         uploadTask.on(
             "state_changed",
             function(snapshot){

             },
             function(error){

             },
             function(){
                 
                 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{

                 let payload ={
                     "userID": JSON.parse(localStorage.getItem('user')).userID ,
                     "userName":JSON.parse(localStorage.getItem('user')).userName,
                     "statusImageUrl":downloadURL ,
                 } 
                 
                 const requestOptions ={
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body: JSON.stringify(payload)
                }

                fetch('http://localhost:8080/api/statusService/save',requestOptions).then(response=>response.json())
           .then(data =>{
              
           console.log(data)
           }).catch((err)=>{
               console.log(err)
           })
                 })
             })
    }
    
    render() { 
        return ( <div>
            {
                this.props.uploader=='true' ?
                <Paper className='statusbar_status'>
                    
                    <label htmlFor="status_upload_tabs" className="status_upload_tabs">
                    <img src={uploadIcon} alt="upload" className="upload_button"></img>
                    <input type="file" id="status_upload_tabs" onChange={this.openBox} ></input>
                  </label>
                 
                </Paper>:
                <Paper className='statusbar_status'>
                   <img src={this.props.object.statusImageUrl} className="upload_image"></img>
                </Paper>
            }
           
        </div> );
    }
}
 
export default Status;