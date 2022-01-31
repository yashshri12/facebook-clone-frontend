import Layout from 'components/MainPage/Layout';
import Navbar from 'components/Navbar/Navbar';
import React, { Component } from 'react';

class FullPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (<div>
            <Navbar/>
            <Layout/>
        </div>  );
    }
}
 
export default FullPage;