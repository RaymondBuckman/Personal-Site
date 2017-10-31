import React, { Component } from 'react';


class VolumteerWork extends Component {
    render() {
        return(
        <div>
            <div className="eighth">
                    <ul className="flex-container">
                        <li className="flex-item">
                            <div className="scrollmagicWindow window2"></div>
                        </li>
                        <li className="flex-item">
                            <header id="vWork"  className="scrollmagicFadeIn">Volunteer Work</header>
                            <ul id="vList" className="col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1 scrollmagicFadeIn">
                                <li>Cameraman</li>
                                <li>Average of 2 hours/week since February 2016</li>
                                <li>Food Packer @ San Diego Food Bank</li>
                                <li>4 hours/day for 2 months</li>
                            </ul>
                        </li>
                    </ul>
            </div>
            <div className="ninth">
                <div className="ninth-blurred"></div>
            </div>
        </div>         
        );
    }
}

export default VolumteerWork;

            