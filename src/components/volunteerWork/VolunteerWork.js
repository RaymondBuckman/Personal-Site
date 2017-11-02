import React, { Component } from 'react';


class VolumteerWork extends Component {
    render() {
        return(
        <div>
            <div className="VWork-1">
                    <ul className="flex-container">
                        <li className="flex-item">
                            <div className="scrollmagicWindow window2"></div>
                        </li>
                        <li className="flex-item">
                            <header id="vWork"  className="scrollmagicFadeIn">Volunteer Work</header>
                            <ul id="vList" className="scrollmagicFadeIn">
                                <li>Cameraman</li><br/>
                                <li>Average of 2 hours/week since February 2016</li><br/>
                                <li>Food Packer @ San Diego Food Bank</li><br/>
                                <li>4 hours/day for 2 months</li>
                            </ul>
                        </li>
                    </ul>
            </div>
            <div className="VWork-2">
                <div className="VWork-2-blurred"></div>
            </div>
        </div>         
        );
    }
}

export default VolumteerWork;

            
