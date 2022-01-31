import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import "./Layout.css"
import LeftSide from './LeftSidePanel/LeftSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    
    letUpdate= ()=>{
          // @ts-ignore
          this.refs.child.getData()
    }

    render() { 
        return ( 
            <div className="mainpage_container">
               <Grid container>
                   <Grid item xs={3}>
                       <LeftSide/>
                   </Grid>
                   <Grid item xs={6} className='status'>
                       <StatusBar/>
                       <UploadSection update={this.letUpdate}/>
                       <PostContainer ref="child"/>
                   </Grid>
                   <Grid item xs={3}>
                       <RightSide/>
                   </Grid>
               </Grid>
            </div>
         );
    }
}
 
export default Layout;