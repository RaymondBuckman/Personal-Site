import React, { Component } from 'react';
import tennis from "../../images/tennis-mini.jpg";
import trance from "../../images/trance-mini.jpg";
import travel from "../../images/travel-mini.jpg";
import foreignLanguages from "../../images/foreign-languages-mini.jpg";
import weightLifting from "../../images/weight-lifting-mini.jpg";
import running from "../../images/running-mini.jpg";
import cars from "../../images/cars-mini.jpg";
import pingPong from "../../images/pingpong-mini.jpg";
import geography from "../../images/geography-mini.jpg";
import health from "../../images/health-mini.jpg";
import pets from "../../images/pets-mini.jpg";
import gaming from "../../images/gaming-mini.jpg";
import musicProduction from "../../images/music-production-mini.jpg";
import history from "../../images/history-mini.jpg";
import technology from "../../images/technology-mini.jpg";
import modernDesign from "../../images/modern-design-mini.jpg";
import reading from "../../images/reading-mini.jpg";
import dubstep from "../../images/dubstep-mini.jpg";

export default class Hobbies extends React.Component {
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
                        <img src={tennis} alt="David Ferrer hitting a forehand on a clay court"></img>
                        <span className="text-container">
                            <h2>Tennis</h2>
                            <p>Favorite players:<br/>Rafael Nadal<br/>Stan Wawrinka<br/>David Ferrer (pictured)<br/>Venus Williams<br/>Simona Halep</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={trance} alt="DJs performing at a music festival"></img>
                        <span className="text-container">
                            <h2>Trance</h2>
                            <p>What I'm listening to:<br/>Sail - Armin van Buuren<br/>Polygons - Tomac & Mad<br/>Musica - Giuseppe Ottaviani<br/>Ondine - Nhato</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={travel} alt="An airplane flying into the horizon"></img>
                        <span className="text-container">
                            <h2>Travel</h2>
                            <p>Bucket list:<br/>Croatia<br/>Turkey<br/>Japan<br/>Switzerland<br/>Georgia</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={foreignLanguages} alt="Black Chinese script written on white wooden planks"></img>
                        <span className="text-container">
                            <h2>Foreign Languages</h2>
                            <p>Вы можете читать это? Я могу! Check out my <a id="duolingo" href="https://www.duolingo.com/xKrankenhausx" target="_blank" rel="noopener" tabIndex="0">Duolingo</a> account</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={weightLifting} alt="Man lifting a heavy barbell"></img>
                        <span className="text-container">
                            <h2>Weight-Lifting</h2>
                            <p>Mind over matter</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={running} alt="Man running on a treadmill"></img>
                        <span className="text-container">
                            <h2>Running</h2>
                            <p>Treadmill hog</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={cars} alt="The Audi R18 e-tron quattro at Le Mans"></img>
                        <span className="text-container">
                            <h2>Cars & Auto Racing</h2>
                            <p>Favorite brands: Porsche, Audi, Mazda, McLaren</p>
                            <p>Favorite race: 24 hours of Le Mans</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={pingPong} alt="Two ping pong paddles & a ball laying on a ping pong table"></img>
                        <span className="text-container">
                            <h2>Ping Pong</h2>
                            <p>#KillerBackhand</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={geography}  alt="Map of Africa & Eurasia"></img>
                        <span className="text-container">
                            <h2>Geography</h2>
                            <p>Geography Now<br/>#NotificationSquad</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={health} alt="Vine of tomatoes & carrots on a table"></img>
                        <span className="text-container">
                            <h2>Health & Nutrition</h2>
                            <p>You are what you eat!</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={pets} alt="A white guinea pig"></img>
                        <span className="text-container">
                            <h2>Pets</h2>
                            <p>I love dogs & guinea pigs!</p>   
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={gaming} alt="A black Xbox One controller"></img>
                        <span className="text-container">
                            <h2>Gaming</h2>
                            <p>Favorite games:<br/>Metroid Prime 1-3<br/>Killer Instinct<br/>MK9/MKX<br/>Injustice 2<br/>Skyrim<br/>Super Smash Bros. Melee</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={musicProduction} alt="FruityLoops screenshot"></img>
                        <span className="text-container">
                            <h2>Music Production</h2>
                            <p>FL Studio novice</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={history} alt="Painting of Ivan the Terrible"></img>
                        <span className="text-container">
                            <h2>History</h2>
                            <p>Consumer of Knowledge</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={technology} alt="Close-up of a circuitboard"></img>
                        <span className="text-container">
                            <h2>Technology</h2>
                            <p>Vorsprung Durch Technik</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={modernDesign} alt="Black & white modern living room"></img>
                        <span className="text-container">
                            <h2>Modern Design</h2>
                            <p>Less is more</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={reading} alt="Books stacked face up"></img>
                        <span className="text-container">
                            <h2>Reading</h2>
                            <p>Favorite book: Les Miserables</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <img src={dubstep} alt="Close-up of a subwoofer"></img>
                        <span className="text-container">
                            <h2>Dubstep</h2>
                            <p>Favorite artists:<br/>Kromestar<br/>Von D<br/>Skream<br/>Distance</p>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="hobbies-2-div"></div>
            <div className="hobbies-3-div"></div>
        </div>
        );
    }
}
