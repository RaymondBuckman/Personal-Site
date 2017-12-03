import React, { Component } from 'react';

class Languages extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-languages" className="Languages-1">
                <h1 id="languages" className="scrollmagic-fade-in" tabIndex="0">
                    Lan<span id="languages-g">g</span>uag<span id="languages-e">e</span>s & Li<span id="languages-b">b</span>ra<span id="languages-r">r</span>ies
                </h1>
                <ul id="language-list"  className="scrollmagic-fade-in">
                    <li>HTML5/CSS3</li><br/>
                    <li>Javascript</li><br/>
                    <li>JQuery</li><br/>
                    <li>Bootstrap 3 & 4</li><br/>
                    <li>Sass (Scss)</li><br/>
                    <li>React.js</li><br/>
                    <li>Java</li><br/>
                    <li>mySQL</li>
                </ul>
            </div> 
            <div className="Languages-2"></div>
        </div>
        );
    }
}

export default Languages;
