import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
        <div className="footer-1-div">
            <ul className="flex-container">
                <li className="flex-item">
                    <header id="thanks">Thanks for visiting!</header>
                </li>
                <li className="flex-item">
                    <h1 id="fin" className="scrollmagic-fade-in" tabIndex="0">
                        <span id="fin-F">F</span><span id="fin-i">i</span>n
                    </h1>
                </li>
                <li className="flex-item">
                    <a id="icons8" href="https://icons8.com" target="_blank">Icon pack By Icons8</a>
                </li>
            </ul> 
        </div>
        );
    }
}
