import React, { Component } from 'react';


class Education extends Component {
    render() {
        return(
        <div className="third">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-offset-1 col-xs-8 col-xs-offset-1">
                        <header id="education" className="scrollmagicFadeIn">
                            <span id="education_E">E</span><span id="education_d">d</span><span id="education_u">u</span><span id="education_ca">ca</span><span id="education_ti">ti</span><span id="education_on">on</span>
                        </header>
                        <header className="scrollmagicFadeIn">Bachelor's of Science<br/>
                                Computer Engineering<br/>
                                San Jose State University
                        </header>
                    </div>
                    <ul id="courseList" className="col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-1 scrollmagicFadeIn">
                        <li>Operating Systems</li>
                        <li>Database Systems I</li>
                        <li>Computer Architecture</li>
                        <li>Digital Design I & II</li>
                        <li>Algorithms & Data Structures</li>
                        <li>Computer Networking</li>
                        <li>Advanced Algorithm Design</li>
                        <li>Microprocessor Design</li>
                        <li>Embedded Systems</li>
                    </ul>
                    <div id="divOutsideProjecsButton" className="col-md-2 col-md-offset-9 col-xs-2 col-xs-offset-2 scrollmagicFadeIn">
                        <button id="projects-button" type="button" className="btn btn-lg" data-toggle="modal" data-target="#projectsModal">Senior Project</button>
                    </div>
                </div> 
            </div>
        </div>
        );
    }
}

export default Education;