import React, { Component } from 'react';
import Post from './Post';
import './PostContainer.css'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    
   getData=()=>{
       const thisContext =this

       fetch('http://localhost:8080/api/postService/getPost').then(response=>response.json())
       .then(json=>{
            thisContext.setState({data:json})
       }).catch(err=>{
           console.log(err)
       })
        
    }

    componentDidMount(){
        this.getData()
    }
    render() { 
        return (<div>
             {
                 this.state.data.map((item)=>(
                     <Post key={item.postID} object={item}/>
                 ))
             }
        </div>  );
    }
}
 
export default PostContainer;