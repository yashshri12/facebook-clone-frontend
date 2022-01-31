// @ts-nocheck
import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import profilepic from '../../../images/yash.jpg'
import live from '../../../images/video.png'
import feelings from '../../../images/feelings.png'
import image from '../../../images/image.png'
import './UploadSection.css'
import firebase from 'firebase';


class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false,
            uploadImage:null,
            description:null
        }
    }

    handleClose = ()=>{
        this.setState({open:false})
    }

    openDailog =(event)=>{
        this.setState({open:true})
        this.setState({uploadImage:URL.createObjectURL(event.target.files[0])})
        this.setState({image:event.target.files[0]})
    }

    uploadFirebaseImage=(event)=>{
        const thisContext =this
         var uploadTask =firebase.storage().ref("images").child(this.state.image.name).put(this.state.image)
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
                     "description": thisContext.state.description ,
                     "postImgURL":downloadURL ,
                 } 
                 
                 const requestOptions ={
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body: JSON.stringify(payload)
                }

                fetch('http://localhost:8080/api/postService/save',requestOptions).then(response=>response.json())
           .then(data =>{
               thisContext.setState({open:false})
               thisContext.props.update()
          // console.log(data)
           }).catch((err)=>{
               console.log(err)
           })
                 })
             })
    }
 
    render() { 
        return (<div>
             <Dialog className='dailog_box' onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
              <div className="dailog_header">Create Post</div>
              <input type="text" onChange={(event)=>{this.state.description=event.currentTarget.value}} className="dailog_text" placeholder="What's in your mind"></input>
              <img src={this.state.uploadImage} className="dailog_img"></img>
              <input type="submit" onClick={this.uploadFirebaseImage} className="dailog_button" value="Post"></input>
             </Dialog>
           <Paper className='upload_container'>
           <div className="upload_top">
             <div>
                 <Avatar className="upload_img" src={profilepic}/>
             </div>
             <div>
                 <input className="upload_box" placeholder="What's on your mind?" type="text" ></input>
             </div>
           </div>
           <div className="upload_bottom">
              <div className="upload_tabs">
                  <img alt="live" src={live} width="35px" />
                  <div className="upload_text">Live Video</div>
              </div>
              <div className="upload_tabs">
                  <label htmlFor="file-upload" className="upload_tabs">
                  <img  alt="Fb image" src={image}  width="35px"/>
                  <div className="upload_text">Photo/Videos</div>
                  </label>
                  <input type="file" id="file-upload" onChange={this.openDailog} ></input>
              </div>
              <div className="upload_tabs">
                  <img  alt="feelings" src={feelings}  width="35px" />
                  <div className="upload_text">Feelings/Acivity</div>
              </div>
           </div>
           </Paper>
        </div>);
    }
}
 
export default UploadSection;