import React, { Component } from 'react'
import { Avatar, Grid } from '@material-ui/core'
import fblogo from '../../images/logo.png'
import home from '../../images/home.svg'
import pages from '../../images/pages.svg'
import groups from '../../images/groups.svg'
import watch from '../../images/watch.svg'
import market from '../../images/market.svg'
import profilepicture from '../../images/yash.jpg'

import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Grid container className='navbar_main'>
                    <Grid item xs ={3}>
                        <div className="navbar_left">
                            <img className="navbar_logo" alt="Facebook logo" src={fblogo} width="35px" />
                            <input className="navbar_search" type="text" placeholder="Search Facebook"/>
                        </div>
                    </Grid>
                    <Grid item xs ={6} className='navbar_container'>
                        <div className='navbar_tabs active'>
                            <img src={home} alt="Facebook home" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tabs'>
                            <img src={pages} alt="Facebook pages" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tabs'>
                            <img src={watch} alt="Facebook watch" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tabs'>
                            <img src={market} alt="Facebook market" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tabs'>
                            <img src={groups} alt="Facebook group" height="35px" width="35px"/>
                        </div>
                    </Grid>
                    <Grid item xs ={3}>
                        <div className="navbar_right">
                            <div className="navbar_righttab">
                               <Avatar className="navbar_rightimg" src={profilepicture}/>
                               <div className="navbar_profilename">Yash</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
