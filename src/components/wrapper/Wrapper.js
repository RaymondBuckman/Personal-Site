import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Intro from'../intro/Intro';
import Education from '../education/Education';
import Languages from '../languages/Languages';
import Employment from '../employment/Employment';
import AdditionalSkills from '../additionalSkills/additionalSkills';
import VolunteerWork from '../volunteerWork/VolunteerWork';
import Hobbies from '../hobbies/Hobbies';
import Footer from '../footer/Footer';
import $ from 'jquery';

var styles = {
    visibleSidebar: {
        transform: 'translateX(170px)'
    },
    hiddenSidebar: {
        transtorm: 'translateX(0px)'
    },   
    visibleMenu: {
        transform: 'rotateY(0deg)'
    },
    hiddenMenu: {
        transform: 'rotateY(90deg)'
    },
    visibleClose: {
        transform: 'translateX(30px) rotateY(0deg)',
        opacity: '1'
    },
    hiddenClose: {
        transform: 'translateX(0px) rotateY(90deg)',
        opacity: '0'
    },
    brightMainContentWrapper: {
        opacity: "1",
    },
    darkenedMainContentWrapper: {
        opacity: "0.1",
    },
    transparentMenu: {
        opacity: '0.5'
    },
    opaqueMenu: {
        opacity: '1'
    }, 
    enableInteraction:{
        pointerEvents: "auto"
    },
    disableInteraction:{
        pointerEvents: "none"
    }    
};

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar_state: 'hiddenSidebar',
            menu_state: 'visibleMenu',
            close_state: 'hiddenClose',
            main_content_wrapper_state: 'brightMainContentWrapper',
            menu_opacity: 'transparentMenu'
        };
    }
    
    openSidebar(){
        this.setState({
            sidebar_state: 'visibleSidebar',
            menu_state: 'hiddenMenu',
            close_state: 'visibleClose',
            main_content_wrapper_state: 'darkenedMainContentWrapper'
        });
    }
    
    closeSidebar(){
        this.setState({
            sidebar_state: 'hiddenSidebar',
            menu_state: 'visibleMenu',
            close_state: 'hiddenClose',
            main_content_wrapper_state: 'brightMainContentWrapper'
        });
    }
    
    opaqueMenu(){
        this.setState({
            menu_opacity: 'opaqueMenu'
        });
    }
    
    transparentMenu(){
        this.setState({
            menu_opacity: 'transparentMenu'
        });  
    }
    
    render() {
        return(
        <div id="wrapper">
            <div id="sidebar-wrapper" style={styles[this.state.sidebar_state]}>
                <Sidebar />
            </div>
            <img id="menu" src="https://png.icons8.com/xbox-menu/ios7/73/ffffff" tabIndex="0" style={styles[this.state.menu_state, this.state.menu_opacity]} onClick={this.openSidebar.bind(this)} onMouseEnter={this.opaqueMenu.bind(this)} onMouseLeave={this.transparentMenu.bind(this)}></img>
            <img id="close" src="https://png.icons8.com/cancel/ios7/73/ffffff" height="40px" style={styles[this.state.close_state]} onClick={this.closeSidebar.bind(this)}></img>
            <div id="main-content-wrapper" style={styles[this.state.main_content_wrapper_state]} onClick={this.closeSidebar.bind(this)}>
                <Intro />
                <Education />
                <Languages />
                <Employment />
                <AdditionalSkills />
                <VolunteerWork />
                <Hobbies />
                <Footer />
            </div>
        </div>
        );
    }
}
