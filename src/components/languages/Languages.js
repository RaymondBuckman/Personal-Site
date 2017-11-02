import React, { Component } from 'react';


class Languages extends Component {
    render() {
        return(
        <div>
            <div className="Languages-1">
                <div className="container-fluid">
                    <div className="row">
                        <div id="divOutsideLanguages" className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
                            <header id="languages" className="scrollmagicFadeIn">
                                <span id="languages_L">L</span><span id="languages_an">an</span><span id="languages_gu">gu</span><span id="languages_ag">ag</span><span id="languages_e">e</span><span id="languages_s">s</span>
                            </header>
                            <br/><br/>
                        </div>
                        <ul id="languageList"  className="col-md-2 col-md-offset-5 col-xs-4 col-xs-offset-4 scrollmagicFadeIn">
                            <li>HTML5/CSS3</li><br/><span></span>
                            <li>Javascript</li><br/><span></span>
                            <li>JQuery</li><br/><span></span>
                            <li>Bootstrap</li><br/><span></span>
                            <li>Sass/Grunt</li><br/><span></span>
                            <li>React.js</li><br/><span></span>
                            <li>Webpack</li><br/><span></span>
                            <li>Java/mySQL</li>
                        </ul>
                    </div> 
                </div> 
            </div> 
            <div className="Languages-2"></div>
        </div>
        );
    }
}

export default Languages;
