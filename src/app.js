const css = require('./app.scss');
require('./images/favicon.ico');
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Sidebar';
import Intro from'./components/intro/Intro';
import Education from './components/education/Education';
import Languages from './components/languages/Languages';
import AdditionalSkills from './components/additionalSkills/additionalSkills';
import VolunteerWork from './components/volunteerWork/VolunteerWork';
import Hobbies from './components/hobbies/Hobbies';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import $ from "jquery";

import menu from './images/menu.png';
import tennis from './images/tennis.jpg';
import breakdance from './images/breakdance.jpg';
import gaming from './images/gaming.jpg';
import trance from './images/trance.jpg';
import travel from './images/travel.jpg';
import foreign from './images/foreignlanguages.jpg';
import weightlifting from './images/weight-lifting.jpg';
import running from './images/running.jpg';
import cars from './images/cars.jpg';
import pingpong from './images/pingpong.jpg';
import history from './images/history.jpg';
import health from './images/health.jpg';
import pets from './images/pets.jpg';

import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


ReactDOM.render(
    <div className="App">
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Sidebar />
            </div>
            <img id="menu" src="https://png.icons8.com/menu/androidL/73/000000" height="40px"></img>
            <span id="close" className="glyphicon glyphicon-remove"></span>
            <div id="page-content-wrapper">
                <Intro />
                <Education />
                <Languages />
                <AdditionalSkills />
                <VolunteerWork />
                <Hobbies />
                <Footer />
            </div>
        </div>
        <Modal />
    </div>,
    document.getElementById('root')
);



$(document).ready(function(){    
    $("#dArrow1").click(function() {
        $('html, body').animate({
            scrollTop: $(".Intro-2").offset().top
        }, 1200);
    });
    
    
    var borderRadius = "40px 20px 40px 20px";
    var controller = new ScrollMagic.Controller();
    
    /*----- navbar pin, push-up, & li animations -----*/    
    var navTween = TweenMax.staggerFrom(".navbar li", 0.7, { ease:  Power0.easeNone, x:20, opacity: 0, rotationY: 90, transformOrigin: "left top" }, 0.3);
    
    var navItemsAppearScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0.95,
        offset: 0,
        reverse: false
    })
    .setTween(navTween)
    .addTo(controller);
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .setPin('.navbar')
    .addTo(controller);
    
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0,
        duration: '789.15%'
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    
    var pushNavUpTween = TweenMax.to(".navbar", 0.05, {
        y: "-=50px",
        autoRound: false
    });
    
    var pushNavUpScene = new ScrollMagic.Scene({
        triggerElement: '.Hobbies-1',
        triggerHook: 0.07
    })
    .setTween(pushNavUpTween)
    .addTo(controller);
    
    $('.scrollmagicFadeIn').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    
    
    /*----- Border radius scenes -----*/
    var nameBorderTween = TweenMax.to("#name", 1, { 
        borderRadius:"80px 40px 80px 40px",
        ease:Power1.easeIn
    });

	var nameBorderscene = new ScrollMagic.Scene({
        triggerElement: "#name",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(nameBorderTween)
    .addTo(controller);
    
    var aboutMeBorderTween = TweenMax.to("#aboutMe", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var aboutMeBorderscene = new ScrollMagic.Scene({
        triggerElement: "#aboutMe",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(aboutMeBorderTween)
    .addTo(controller);
    
    var educationBorderTween = TweenMax.to("#education", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var educationBorderscene = new ScrollMagic.Scene({
        triggerElement: "#education",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(educationBorderTween)
    .addTo(controller);
    
    var onlineBorderTween = TweenMax.to("#online-courses", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var onlineBorderscene = new ScrollMagic.Scene({
        triggerElement: "#online-courses",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(onlineBorderTween)
    .addTo(controller);
    
    var languagesBorderTween = TweenMax.to("#languages", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var languagesBorderscene = new ScrollMagic.Scene({
        triggerElement: "#languages",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(languagesBorderTween)
    .addTo(controller);
    
    var additionalSkillsBorderTween = TweenMax.to("#additionalSkills", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var additionalSkillsBorderscene = new ScrollMagic.Scene({
        triggerElement: "#additionalSkills",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(additionalSkillsBorderTween)
    .addTo(controller);
    
    var vWorkBorderTween = TweenMax.to("#vWork", 1, { 
        borderRadius:"40px 20px 40px 20px",
        ease:Power1.easeIn
    });

	var vWorkBorderscene = new ScrollMagic.Scene({
        triggerElement: "#vWork",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(vWorkBorderTween)
    .addTo(controller);
    
    var hobbiesBorderTween = TweenMax.to("#hobbies", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var hobbiesBorderscene = new ScrollMagic.Scene({
        triggerElement: "#hobbies",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(hobbiesBorderTween)
    .addTo(controller);
        
        
    /*----- List fade in scenes -----*/
    var courseListOddScene = new ScrollMagic.Scene({
        triggerElement: '#courseList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#courseList li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var courseListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#courseList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#courseList li:nth-child(even)', 'fade-in')
    .addTo(controller);
    
    var onlineListOddScene = new ScrollMagic.Scene({
        triggerElement: '#online-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#online-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var onlineListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#online-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#online-list li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var languageListOddScene = new ScrollMagic.Scene({
        triggerElement: '#languageList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#languageList li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var languageListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#languageList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#languageList li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var skillListOddScene = new ScrollMagic.Scene({
        triggerElement: '#skillList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#skillList li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var skillListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#skillList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#skillList li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var vListOddScene = new ScrollMagic.Scene({
        triggerElement: '#vList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#vList li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var vListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#vList li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#vList li:nth-child(even)', 'fade-in')
    .addTo(controller);

    /* ----Background Scroll animations -----*/    
    var firstParallaxTween = TweenMax.to(".Intro-1", 1, {
        backgroundSize: "+=200px +=133.3px", //changes bg image size without changing proportions
        backgroundPositionX: "-=50%",
        autoRound:false, 
        ease:Power1.ease0ut
    });

	var firstParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Intro-1", 
        duration: "100%",
        triggerHook:0
    })
    .setTween(firstParallaxTween)
    .addTo(controller);
     
    var firstBrighterTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(150%)",
        autoRound:false, 
        ease:Power0.linear
    });

    
    var firstBrighterScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.9
    })
    .setTween(firstBrighterTween)
    .addTo(controller);
    
    var firstEvenBrighterTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(200%)",
        autoRound:false, 
        ease:Power0.linear
    });
    
    var firstEvenBrighterScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.7
    })
    .setTween(firstEvenBrighterTween)
    .addTo(controller);
    
    var firstBrightestTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(300%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var firstBrightestScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.5,
        
    })
    .setTween(firstBrightestTween)
    .addTo(controller);
    
    var thirdParallaxTween = TweenMax.to(".Education-1", 1, { 
        backgroundPositionX: "+=80%",
        autoRound:false, 
        ease:Power1.easeIn
    });

	var thirdParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Education-1",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(thirdParallaxTween)
    .addTo(controller);
    
    var fifthParallaxTween = TweenMax.to(".Languages-2", 1, { 
        backgroundPositionX: "-=30%",
        autoRound:false, 
        ease:Power0.linear
    });

	var fifthParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Languages-2",
        triggerHook: 1,
        duration: "250%"
    })
    .setTween(fifthParallaxTween)
    .addTo(controller);
    
    var fifthInvertTween = TweenMax.to(".Languages-2", 0.01, {
        filter: "invert(300%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var fifthInvertScene = new ScrollMagic.Scene({
        triggerElement: ".Languages-2",
        triggerHook: 0.25,
    })
    .setTween(fifthInvertTween)
    .addTo(controller);
    
    var seventhParisParallaxTween = TweenMax.to(".Skills-2", 1, { 
        backgroundSize: "+=500px +=332.25px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power0.easeOut
    });

	var seventhParisParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Skills-2",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(seventhParisParallaxTween)
    .addTo(controller);
    
    var seventhBerlinParallaxTween = TweenMax.to(".Skills-3", 1, { 
        backgroundPositionX: "-=100%",
        autoRound:false, 
        ease:Power0.easeOut
    });

	var seventhBerlinParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Skills-3",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(seventhBerlinParallaxTween)
    .addTo(controller);
    
    var ninthParallaxTween = TweenMax.from(".VWork-2", 1, { 
        backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeOut
    });

	var ninthParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".VWork-2",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(ninthParallaxTween)
    .addTo(controller);
    
    var ninthBlurredParallaxTween = TweenMax.from(".VWork-2-blurred", 1, { 
        backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeOut
    });

	var ninthBlurredParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".VWork-2-blurred",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(ninthBlurredParallaxTween)
    .addTo(controller);
    
    var ninthDisappearParallaxTween = TweenMax.to(".VWork-2-blurred", 1, { 
        opacity: "1",
        autoRound:false, 
        ease:Power1.easeOut
    });

	var ninthDisappearParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".VWork-2-blurred",
        triggerHook: 0.2,
        duration: "50%"
    })
    .setTween(ninthDisappearParallaxTween)
    .addTo(controller);
    
    var eleventhParallaxTween = TweenMax.from(".Hobbies-2", 1, { 
        backgroundSize: "+=300px +=199.65px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeIn
    });

	var eleventhDisappearParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Hobbies-2",
        triggerHook: 1,
        duration: "150%"
    })
    .setTween(eleventhParallaxTween)
    .addTo(controller);
    

    /*----- Navbar highlight animations -----*/ 
    var heightOfEducation = $('.Languages-1').offset().top - $('.Education-1').offset().top;
    var heightOfLanguages = $('.Skills-1').offset().top - $('.Languages-1').offset().top;
    var heightOfSkills = $('.VWork-1').offset().top - $('.Skills-1').offset().top;
    var heightOfVWork = $('.Hobbies-1').offset().top - $('.VWork-1').offset().top;
    var heightOfHobbies = $('.Hobbies-2').offset().top - $('.Hobbies-1').offset().top;
    
    
    var nav1Tween = new ScrollMagic.Scene({
        triggerElement: ".Education-1",
        triggerHook: 0.5,
        duration: heightOfEducation
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(1)", "active") // add class toggle
    .addTo(controller);
    
	var nav2Tween = new ScrollMagic.Scene({
        triggerElement: ".Languages-1",
        triggerHook: 0.5,
        duration: heightOfLanguages
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
    .addTo(controller);
    
	var nav3Tween = new ScrollMagic.Scene({
        triggerElement: ".Skills-1",
        triggerHook: 0.5,
        duration: heightOfSkills
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
    .addTo(controller);
    
	var nav4Tween = new ScrollMagic.Scene({
        triggerElement: ".VWork-1",
        triggerHook: 0.5,
        duration: heightOfVWork
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
    .addTo(controller);
    
    var nav5Tween = new ScrollMagic.Scene({
        triggerElement: ".Hobbies-1",
        triggerHook: 0.5,
        duration: heightOfHobbies
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
    .addTo(controller);


    /*
    function rotate(event) 
    {
        var x = event.clientX;
        var wwidth = window.innerWidth;
        var horizmidpoint = wwidth / 2;
        var xpos = x - horizmidpoint;
        var xval = (xpos / horizmidpoint) * 2;
        
        var y = event.clientY;
        var wheight = window.innerHeight;
        var vertmidpoint = wheight / 2;
        var ypos = y - vertmidpoint;
        var yval = (ypos / vertmidpoint) * 2;
        
        var tilt0 = document.getElementById("window-1");
        console.log(ypos);
        
        tilt0.style.transform = "translateX(" + (-xval) + "vw)";
    }

    document.addEventListener("mousemove", function (event)
    {
        rotate(event)
    }, false);
    */

     /*================Remove down arrow when in Landscape layout on mobile devices================*/
     var sm = window.matchMedia( "(max-width: 991px)" );
     if(sm.matches && (window.outerWidth > window.outerHeight)){
          $("#dArrow1").remove();
     }
     /*================Sidebar toggle & page-content-wrapper enable/disable================*/
     var menuRotate = 0;

     $('#page-content-wrapper, #close').click(function(){
          $('#wrapper').removeClass('menuDisplayed');
          $('#page-content-wrapper *').removeClass('disabled');
          $('#close').css({
               'opacity' : "0",
               'transform' : 'translateX(0px)',
               'transform' : 'rotateY(90deg)'
          });
     });

     $('#menu').click(function(){
          $('#wrapper').addClass('menuDisplayed');
          $('#page-content-wrapper *').addClass('disabled');
          $('#close').css({
               'transform' : 'translateX(30px)',
               'opacity' : '1'
          });
          menuRotate += 360;
         $('#menu').css({
             '-webkit-transform': 'rotateY(' + menuRotate   + 'deg)',
             '-moz-transform': 'rotateY(' +  menuRotate   + 'deg)',
             'transform': 'rotateY('  + menuRotate   + 'deg)'
         });
    });

    /*================Pre-load Hobby Images================*/
    var images = new Array()
			function preload() {
				for (var i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"images/tennis.jpg",
				"images/gaming.jpg",
				"images/trance.jpg",
                "images/travel.jpg",
                "images/foreignlanguages.jpg",
                "images/weight-lifting.jpg",
                "images/running.jpg",
                "images/cars.jpg",
                "images/pingpong.jpg",
                "images/history.jpg",
                "images/health.jpg",
                "images/pets.jpg"
			)
            
            
            
            
            

})

$(window).scroll(function(){
     var wScroll = $(this).scrollTop();
     var sm = window.matchMedia( "(max-width: 991px)" );
     var md = window.matchMedia( "(min-width: 992px)" );

     if(wScroll > 0){
          $('#dArrow1').css('opacity', '0');
     }

     //Parallax doesn't work as well on mobile devices
     if(md.matches){
          //Zoom in & pan-left effects on background

          /*====================Change background-image on icon hover====================*/
          /*Hides #hobbies header on icon hover*/
          $('#hobby-icons *').hover(function(){
               $('#hobbies').css({
                    'opacity' : '0'
               })
          }, function(){
               $('#hobbies').css({
                    'opacity' : '1'
               })
          });

          $('#hobby-icons img:first-child').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + tennis + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(2)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + gaming + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(3)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + trance + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(4)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + travel + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(5)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + foreign + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(6)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + weightlifting + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(7)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + running + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(8)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + cars + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(9)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + pingpong + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(10)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + history + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(11)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + health + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });

          $('#hobby-icons img:nth-child(12)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + pets + ')'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(' + breakdance + ')'
               })
          });
     }

/*=============================================================FOR SMALL & X-SMALL SCREENS in Portrait Orienetation=============================================================*/
     if(sm.matches && (window.outerWidth < window.outerHeight)){
          $('.Intro-1').css({
              'filter': 'brightness(' + (100 + wScroll/2.8) + '%'
          })

          $('#name').css({
               'transform' : 'translate(0px, ' + wScroll/4 + '%)'
          })
          $('#name').css('opacity', Math.pow(280/wScroll, 7));
          

          $('.window1').css({
               'background-position' : '47%'+ (-900+wScroll) + 'px', //complicated logic!!!
               'opacity': Math.pow(750/wScroll, 15)
          })

          $('#divOutsideAboutMe').removeClass('col-xs-offset-4');
          $('#divOutsideAboutMe').addClass('col-xs-offset-3');

          $('#aboutMe').removeClass('col-xs-2 col-xs-offset-5');
          $('#aboutMe').addClass('col-xs-6 col-xs-offset-3');


          //Pan-left effect on background
          $('.Education-1').css({
               'background-position' : (23 + (wScroll/50)) + '% 30%'
          })

          $('header + header').css('opacity', Math.pow(wScroll/1400,35));

          $('#divOutsideProjecsButton').addClass('col-xs-offset-2');

          $('.Languages-2').css({
               'background-position' : (wScroll-1500)/80 + '% 20%',
               'filter': 'invert(' + Math.pow((wScroll/2750), 50) + '%)'
          })

          $('#divOutsideLanguages').removeClass('col-xs-4 col-xs-offset-4');
          $('#divOutsideLanguages').addClass('col-xs-8 col-xs-offset-2');


          $('#divOutsideAdditionalSkills').removeClass('col-xs-6 col-xs-offset-3');

          $('.Skills-2').css({
               'background-size' : (100 + wScroll/2.9) + 'px'
          })

          if(wScroll > $('#french').offset().top-440){
               $('#french').css('opacity', '1');
          }

          if(wScroll > $('#german').offset().top-440){
               $('#german').css('opacity', '1');
          }

          $('#vWork').removeClass('col-xs-6 col-xs-offset-3');
          $('#vWork').addClass('col-xs-10 col-xs-offset-1');

          $('#divOutsideHobibes').removeClass('col-xs-4 col-xs-offset-4');
          $('#divOutsideHobibes').addClass('col-xs-6 col-xs-offset-3');

          $('#hobby-icons *').removeClass('col-xs-1');
          $('#hobby-icons *').addClass('col-xs-2 hobby-icons-buffer');

          /*====================Change background-image on icon hover====================*/
          /*Hides #hobbies header on icon hover*/
          $('#hobby-icons *').hover(function(){
               $('#hobbies').css({
                    'opacity' : '0'
               })
          }, function(){
               $('#hobbies').css({
                    'opacity' : '1'
               })
          });

          $('#hobby-icons img:first-child').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/tennis.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(2)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/gaming.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(3)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/trance.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(4)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/travel.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(5)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/foreignlanguages.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(6)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/weight-lifting.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(7)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/running.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(8)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/cars.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(9)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/pingpong.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(10)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/history.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(11)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/health.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('#hobby-icons img:nth-child(12)').hover(function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/pets.jpg)'
               })
          }, function(){
               $('.Hobbies-1').css({
                    'background-image' : 'url(images/breakdance.jpg)'
               })
          });

          $('.Hobbies-2').css({
               'background-size' : 2900 - wScroll/3.9 + 'px'
          })
     }

     /*=============================================================FOR SMALL & X-SMALL SCREENS in Landscape Orienetation=============================================================*/
          if(sm.matches && (window.outerWidth > window.outerHeight)){
               $('.Intro-1').css({
                    'filter': 'brightness(' + (100 + wScroll/2.8) + '%'
               })

               $('#name').css({
                    'transform' : 'translate(0px, ' + wScroll/4 + '%)'
               })
               $('#name').css('opacity', Math.pow(150/wScroll, 7));

               $('#aboutMe').removeClass('col-xs-6 col-xs-offset-3');
               $('#aboutMe').addClass('col-xs-2 col-xs-offset-5');
              

               $('#divOutsideProjecsButton').removeClass('col-xs-offset-2');

               $('#divOutsideLanguages').removeClass('col-xs-8 col-xs-offset-2');
               $('#divOutsideLanguages').addClass('col-xs-4 col-xs-offset-4');

               $('#divOutsideAdditionalSkills').addClass('col-xs-6 col-xs-offset-3');

               $('#skillList').removeClass('col-xs-6 col-xs-offset-3');
               $('#skillList').addClass('col-xs-4 col-xs-offset-4');

               if(wScroll > $('#french').offset().top-440){
                    $('#french').css('opacity', '1');
               }

               if(wScroll > $('#german').offset().top-440){
                    $('#german').css('opacity', '1');
               }

               $('#vWork').removeClass('col-xs-10 col-xs-offset-1');
               $('#vWork').addClass('col-xs-6 col-xs-offset-3');

               $('#divOutsideHobibes').removeClass('col-xs-6 col-xs-offset-3');
               $('#divOutsideHobibes').addClass('col-xs-4 col-xs-offset-4');

               $('#hobby-icons *').removeClass('col-xs-2 hobby-icons-buffer');
               $('#hobby-icons *').addClass('col-xs-1');

               /*====================Change background-image on icon hover====================*/
               /*Hides #hobbies header on icon hover*/
               $('#hobby-icons *').hover(function(){
                    $('#hobbies').css({
                         'opacity' : '0'
                    })
               }, function(){
                    $('#hobbies').css({
                         'opacity' : '1'
                    })
               });

               $('#hobby-icons img:first-child').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/tennis.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(2)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/gaming.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(3)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/trance.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(4)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/travel.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(5)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/foreignlanguages.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(6)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/weight-lifting.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(7)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/running.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(8)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/cars.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(9)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/pingpong.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(10)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/history.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(11)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/health.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });

               $('#hobby-icons img:nth-child(12)').hover(function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/pets.jpg)'
                    })
               }, function(){
                    $('.Hobbies-1').css({
                         'background-image' : 'url(images/breakdance.jpg)'
                    })
               });
          }
})
