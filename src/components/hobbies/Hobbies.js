import React, { Component } from 'react';
import tennis from "../../images/tennis.jpg";
import trance from "../../images/trance.jpg";
import travel from "../../images/travel.jpg";
import foreignLanguages from "../../images/foreign-languages.jpg";
import weightLifting from "../../images/weight-lifting.jpg";
import running from "../../images/running.jpg";
import cars from "../../images/cars.jpg";
import pingPong from "../../images/pingpong.jpg";
import geography from "../../images/geography.jpg";
import health from "../../images/health.jpg";
import pets from "../../images/pets.jpg";
import gaming from "../../images/gaming.jpg";
import musicProduction from "../../images/music-production.jpg";
import history from "../../images/history.jpg";
import technology from "../../images/technology.jpg";
import modernDesign from "../../images/modern-design.jpg";
import reading from "../../images/reading.jpg";
import dubstep from "../../images/dubstep.jpg";

export default class Hobbies extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-hobbies" className="hobbies-1-div">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="hobbies" className="scrollmagic-fade-in" tabIndex="0">
                            Hob<span id="hobbies-b">b</span>ies & In<span id="hobbies-t">t</span>ere<span id="hobbies-s">s</span>ts
                        </h1></li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={tennis}></img>
                        <span className="text-container">
                            <h2>Tennis</h2>
                            <p>Favorite players:<br/>Rafael Nadal<br/>Stan Wawrinka<br/>David Ferrer (pictured)<br/>Venus Williams<br/>Simona Halep</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={trance}></img>
                        <span className="text-container">
                            <h2>Trance</h2>
                            <p>What I'm listening to:<br/>Sail - Armin van Buuren<br/>Polygons - Tomac & Mad<br/>Musica - Giuseppe Ottaviani<br/>Ondine - Nhato</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={travel}></img>
                        <span className="text-container">
                            <h2>Travel</h2>
                            <p>Bucket list:<br/>Croatia<br/>Turkey<br/>Japan<br/>Switzerland<br/>Georgia</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={foreignLanguages}></img>
                        <span className="text-container">
                            <h2>Foreign Languages</h2>
                            <p>Вы можете читать это? Я могу! Check out my <a id="duolingo" href="https://www.duolingo.com/xKrankenhausx" target="_blank" tabIndex="0">Duolingo</a> account</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={weightLifting}></img>
                        <span className="text-container">
                            <h2>Weight-Lifting</h2>
                            <p>Mind over matter</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={running}></img>
                        <span className="text-container">
                            <h2>Running</h2>
                            <p>Treadmill hog</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={cars}></img>
                        <span className="text-container">
                            <h2>Cars & Auto Racing</h2>
                            <p>Favorite brands: Porsche, Audi, Mazda, McLaren</p>
                            <p>Favorite race: 24 hours of Le Mans</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={pingPong}></img>
                        <span className="text-container">
                            <h2>Ping Pong</h2>
                            <p>#KillerBackhand</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={geography}></img>
                        <span className="text-container">
                            <h2>Geography</h2>
                            <p>Geography Now<br/>#NotificationSquad</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={health}></img>
                        <span className="text-container">
                            <h2>Health & Nutrition</h2>
                            <p>You are what you eat!</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={pets}></img>
                        <span className="text-container">
                            <h2>Pets</h2>
                            <p>I love dogs & guinea pigs!</p>   
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={gaming}></img>
                        <span className="text-container">
                            <h2>Gaming</h2>
                            <p>Favorite games:<br/>Metroid Prime 1-3<br/>Killer Instinct<br/>MK9/MKX<br/>Injustice 2<br/>Skyrim<br/>Super Smash Bros. Melee</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={musicProduction}></img>
                        <span className="text-container">
                            <h2>Music Production</h2>
                            <p>FL Studio novice</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={history}></img>
                        <span className="text-container">
                            <h2>History</h2>
                            <p>Consumer of Knowledge</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={technology}></img>
                        <span className="text-container">
                            <h2>Technology</h2>
                            <p>Vorsprung Durch Technik</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={modernDesign}></img>
                        <span className="text-container">
                            <h2>Modern Design</h2>
                            <p>Less is more</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={reading}></img>
                        <span className="text-container">
                            <h2>Reading</h2>
                            <p>Favorite book: Les Miserables</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={dubstep}></img>
                        <span className="text-container">
                            <h2>Dubstep</h2>
                            <p>Favorite artists:<br/>Kromestar<br/>Von D<br/>Skream<br/>Distance</p>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="hobbies-2-div"></div>
            <div className="hobbies-3-div"></div>
            <div className="hobbies-4-div"></div>
        </div>
        );
    }
}
