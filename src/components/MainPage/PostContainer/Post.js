import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import profilepic from '../../../images/yash.jpg'
import post from '../../../images/post.jpeg'
import like from '../../../images/like.png'
import likeButton from '../../../images/likebutton.png'
import comment from '../../../images/comment.png'
import share from '../../../images/share.png'

import './PostContainer.css'

class Post extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     comment:null
        // }
       // console.log(props)
    }
    imageAvailable= (data)=>{
      
       return data==""?false:true
    }

    submitComment= (event)=>{
        const thisContext =this
       if(event.key === 'Enter'){
        let payload ={
            "postID":this.props.object.postID ,
            "userID": JSON.parse(localStorage.getItem('user')).userID ,
            "userName":JSON.parse(localStorage.getItem('user')).userName,
            "comment":event.currentTarget.value ,
        }     
        
        const requestOptions ={
            method:"POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(payload)
        }

        fetch('http://localhost:8080/api/commentService/save',requestOptions).then(response=>response.json())
        .then(data=>{
         console.log(data)
        }).catch(err=>{
            console.log(err)
        })
       }
    }

    render() { 
        return ( <div>
           <Paper className='post_container' >
             <div className="post_header">
                <div className="post_header_img">
                    <Avatar src={profilepic} className="post_img"/>
                </div>
                <div className="post_header_text">
                   {this.props.object.user_name}
                </div>

             </div>

             <div>
                 <div className="post_description">
                 {this.props.object.description}
                 </div>
             </div>

             <div>
                 {
                 this.imageAvailable(this.props.object.postImgURL) ?
                 <img src={this.props.object.postImgURL} className="post_image" alt="post" width="600px"></img>
                 :<span></span>
                 }
                 
             </div>

             <div className="post_likeContainer">
                 <div className="post_like">
                   <img src={like} alt="like" className="post_like_img"  />
                 </div>
                 <div className="post_likeCount">
                 {   this.props.object.like}
                 </div>
             </div>

             <div className="post_likeshare">
                 <div className="post_tab">
                     <div className="post_tabFirst">
                         <img className="post_tab_img" src={likeButton} alt="like button" />
                     </div>
                     <div className="post_tabtext">
                         Like
                     </div>
                 </div>

                 <div className="post_tab">
                     <div className="post_tabFirst">
                         <img className="post_tab_img" src={comment} alt="like button" />
                     </div>
                     <div className="post_tabtext">
                         Comment
                     </div>
                 </div>

                 <div className="post_tab">
                     <div className="post_tabFirst">
                         <img className="post_tab_img" src={share} alt="like button" />
                     </div>
                     <div className="post_tabtext">
                         Share
                     </div>
                 </div>
             </div>

             <div className="upload_comment">
             <div className="upload_top">
             <div>
                 <Avatar className="upload_img" src={profilepic}/>
             </div>
             <div>
                 <input className="upload_box" onKeyPress={this.submitComment}  placeholder="Your Comment" type="text" ></input>
             </div>
           </div>
             </div>
           </Paper>
        </div> );
    }
}
 
export default Post;