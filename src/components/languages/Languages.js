import React, { Component } from 'react';


class Languages extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-languages" className="Languages-1">
                <header id="languages" className="scrollmagicFadeIn">
                    <span id="languages_L">L</span><span id="languages_an">an</span><span id="languages_gu">gu</span><span id="languages_ag">ag</span><span id="languages_e">e</span><span id="languages_s">s</span>
                </header>
                <ul id="language-list"  className="scrollmagicFadeIn">
                    <li>HTML5/CSS3</li><br/>
                    <li>Javascript</li><br/>
                    <li>JQuery</li><br/>
                    <li>Bootstrap</li><br/>
                    <li>Sass/Grunt</li><br/>
                    <li>React.js</li><br/>
                    <li>Webpack</li><br/>
                    <li>Java/mySQL</li>
                </ul>
            </div> 
            <div className="Languages-2"></div>
        </div>
        );
    }
}

export default Languages;
