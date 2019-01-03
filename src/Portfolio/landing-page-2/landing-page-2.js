import React, { Component } from 'react';
import styleLanding2 from './prod-assets/style-landing-2.css';
import CSSModules from 'react-css-modules';
import GoogleMapReact from 'google-map-react';
//import video file
import vfx_design from './video/vfx_design.mp4';
//import images
import logo from './images/logo.png';
import icon_1 from './images/icons/icon-1.png';
import icon_2 from './images/icons/icon-2.png';
import icon_3 from './images/icons/icon-3.png';
import icon_4 from './images/icons/icon-4.png';
import proj_1 from './images/projects/proj-1.jpg';
import proj_2 from './images/projects/proj-2.jpg';
import proj_3 from './images/projects/proj-3.jpg';
import proj_4 from './images/projects/proj-4.jpg';
import team_1 from './images/team/team-1.jpg';
import team_2 from './images/team/team-2.jpg';
import team_3 from './images/team/team-3.jpg';
import client_1 from './images/clients/client-1.jpg';
import apo from './images/clients/apo.jpg';
import carousel from './images/clients/carousel.jpg';
import brand_1 from './images/brands/brand-1.jpg';
import brand_2 from './images/brands/brand-2.jpg';
import brand_3 from './images/brands/brand-3.jpg';
import brand_4 from './images/brands/brand-4.jpg';
import brand_5 from './images/brands/brand-5.jpg';
import brand_6 from './images/brands/brand-6.jpg';
import premium_1 from './images/premium/premium-1.jpg';
import premium_icon from './images/premium/premium-icon.jpg';
//import CSSModules from 'react-css-modules';

class Landing2 extends Component {
    static defaultProps = {
      center: {
        lat: 51.0900,
        lng: 17.0159
      },
      zoom: 12
    };
    render() {
      return (   
        <div className="landing-nr2-container">  
          <div className="landing-page-2-container">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&subset=latin-ext" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&subset=latin-ext" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <header className="t-site-header">
              <div className="t-site-header__black">
                <div className="o-container">
                  <div className="t-site-header__top">
                    <div className="o-row o-row--center-y">
                      <div className="o-col o-col--md2 o-col--lg1 t-site-header__logo">
                        <a href="#"> <img src={logo} alt="logo" /></a>
                      </div>
                      <div className="o-col o-col--md10 o-col--lg11 t-site-header__menu">
                        <nav className="c-nav">
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Home</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">About Us</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Services</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Our Projects</a>                            
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Our Team</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Happy Clients</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Price</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Some Facts</a>
                          <a href="#" className="c-nav__item c-nav__item--underline-hover">Contact</a>
                        </nav>
                      </div>
                    </div>                
                  </div>
                </div> 
              </div>
              <div className="o-container">
                <div className="t-site-header__hero u-text-center">                
                  <h1 className="c-header c-header--level0 c-header--white c-header--upper u-mb-3">Design is about <br /><span className="u-primary-site">Communication</span> </h1>
                  <h2 className="c-header c-header--white t-site-header__intro-text u-mb-3">Call Us: +00 0 1234 4563</h2>
                  <a href="#" className="c-btn c-btn--primary">Tell me more</a>
                </div>
              </div>
            </header>  
            <section className="t-about u-mt-2">
              <div className="o-container">
                <div className="o-row ">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary"> About Us </h1>
                    <h2 className="c-label c-label__secondary"> Who We Are?</h2>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--lg7 t-about__content-lp2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nulla aspernatur dolor possimus assumenda amet autem delectus, reprehenderit vel libero alias illum, qui distinctio deleniti reiciendis porro consequatur. Optio, eveniet! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, aliquid! Repellat, hic est harum amet cumque perspiciatis expedita accusantium culpa ratione? Facilis corrupti, fugit numquam aliquid quis labore sed nobis!</p>
                    <div className="t-about__btn">
                      <a href="#" className="c-btn c-btn--primary u-mt-3">Learn more</a>
                    </div>
                  </div>
                  <div className="o-col o-col--lg5 t-about__vid">
                    <video className="u-box-shadow" width={500} controls>
                      <source src={vfx_design} type="video/mp4" />
                      <source src={vfx_design} type="video/ogg" />                                
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-services">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary u-white">Services</h1>
                    <h2 className="c-label c-label__secondary "> Services that We Provide</h2>
                  </div>   
                </div>
                <div className="o-row ">
                  <div className="o-col o-col--md6 o-col--lg3 t-services__divider">
                    <div className="c-icon-box">
                      <div className="c-icon-box__image">
                        <img className="c-icon-box__icon" src={icon_1} alt />
                      </div>
                      <h4 className="c-header--level2 u-white">Hight quality Design</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-services__divider">
                    <div className="c-icon-box">
                      <div className="c-icon-box__image">
                        <img className="c-icon-box__icon" src={icon_2} alt />
                      </div>
                      <h4 className="c-header--level2 u-white">Modern Design</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-services__divider">
                    <div className="c-icon-box">
                      <div className="c-icon-box__image">
                        <img className="c-icon-box__icon" src={icon_3} alt />
                      </div>
                      <h4 className="c-header--level2 u-white">Regular Updates</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit  dolor sit amet.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-services__divider">
                    <div className="c-icon-box">
                      <div className="c-icon-box__image">
                        <img className="c-icon-box__icon" src={icon_4} alt />
                      </div>
                      <h4 className="c-header--level2 u-white">Fast and free support</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit  dolor sit amet.</p>                        
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-projects">
              <div className="o-container"> 
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary">Our Projects</h1>
                    <h2 className="c-label c-label__secondary"> What We create</h2>
                  </div>
                </div>           
                <div className="o-row">
                  <div className="o-col o-col--md12 o-col--lg12 t-projects__m-row u-mt-3">
                    <nav className="c-menu t-projects__menu-container">
                      <a href="#" className="c-menu__item c-menu__item--underline-hover c-menu__item--no-border-left">All</a>
                      <a href="#" className="c-menu__item c-menu__item--underline-hover">Photos</a>
                      <a href="#" className="c-menu__item c-menu__item--underline-hover">Branding</a>
                      <a href="#" className="c-menu__item c-menu__item--underline-hover">Adverts</a>                            
                      <a href="#" className="c-menu__item c-menu__item--underline-hover">Development</a>
                      <a href="#" className="c-menu__item c-menu__item--underline-hover c-menu__item--no-border-right">Misc</a>                        
                    </nav>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_1} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_2} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_3} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_4} alt="cyber" />
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_1} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_2} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_3} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_4} alt="cyber" />
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_1} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_2} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                        
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_3} alt="cyber" />
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3 t-projects__img-container">
                    <div className="t-projects__layer">
                      <h2 className="c-header--level2 c-header--white">About</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <img className="u-fit-cover t-projects__img" src={proj_4} alt="cyber" />
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col u-mt-2 u-flex-c">                                      
                    <a href="#" className="c-btn c-btn--primary">More Projects</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-team">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary u-white">Our Team</h1>
                    <h2 className="c-label c-label__secondary ">Our co-workers</h2>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--lg4">
                    <div className="t-team__box">
                      <div className="t-team__image">                    
                        <img className="t-team__icon" src={team_2} alt />
                      </div>
                      <h4 className="c-header--level2">Kim UnDzon</h4>
                      <p className="t-team__text">Marketer</p>
                      <div className="social t-team__social">			
                        <button className="ic-btn b-tw">
                          <i className="fa fa-twitter" />
                        </button>
                        <button className="ic-btn b-fb">
                          <i className="fa fa-facebook" />
                        </button>
                        <button className="ic-btn b-gplus">
                          <i className="fa fa-google-plus" />
                        </button>
                        <button className="ic-btn b-inst">
                          <i className="fa fa-instagram" />
                        </button>
                        <button className="ic-btn b-gh">
                          <i className="fa fa-github" />
                        </button>
                      </div>  
                    </div>                  
                  </div>
                  <div className="o-col o-col--lg4">
                    <div className="t-team__box">
                      <div className="t-team__image">                    
                        <img className="t-team__icon" src={team_1} alt />
                      </div>
                      <h4 className="c-header--level2">Kamil Kovalsky</h4>
                      <p className="t-team__text">CEO</p>
                      <div className="social t-team__social">			
                        <button className="ic-btn b-tw">
                          <i className="fa fa-twitter" />
                        </button>
                        <button className="ic-btn b-fb">
                          <i className="fa fa-facebook" />
                        </button>
                        <button className="ic-btn b-gplus">
                          <i className="fa fa-google-plus" />
                        </button>
                        <button className="ic-btn b-inst">
                          <i className="fa fa-instagram" />
                        </button>
                        <button className="ic-btn b-gh">
                          <i className="fa fa-github" />
                        </button>
                      </div>  
                    </div>                  
                  </div>
                  <div className="o-col o-col--lg4">
                    <div className="t-team__box">
                      <div className="t-team__image">                    
                        <img className="t-team__icon" src={team_3} alt />
                      </div>
                      <h4 className="c-header--level2">Hans Klos</h4>
                      <p className="t-team__text">Programmer</p>
                      <div className="social t-team__social">			
                        <button className="ic-btn b-tw">
                          <i className="fa fa-twitter" />
                        </button>
                        <button className="ic-btn b-fb">
                          <i className="fa fa-facebook" />
                        </button>
                        <button className="ic-btn b-gplus">
                          <i className="fa fa-google-plus" />
                        </button>
                        <button className="ic-btn b-inst">
                          <i className="fa fa-instagram" />
                        </button>
                        <button className="ic-btn b-gh">
                          <i className="fa fa-github" />
                        </button>
                      </div>  
                    </div>                  
                  </div>  
                </div>
              </div>
            </section>
            <section className="t-happy">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary">Happy Clients</h1>
                    <h2 className="c-label c-label__secondary">Client Revievs</h2>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col">                    
                    <div className="t-happy__image">                    
                      <img className="t-happy__icon" src={client_1} alt />
                    </div>
                    <h4 className="t-happy__name u-mt-3">Mr Stock</h4>
                    <h4 className="t-happy__status">Head of MeM Departament</h4>
                    <img src={apo} alt="apostrof" />                    
                    <p className="t-happy__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi optio, cumque non libero temporibus dolorum aperiam aspernatur a molestias. Dolorem excepturi optio, cumque non libero temporibus dolorum aperiam aspernatur a molestias repellendus sed iusto odio beatae quia tempora! Provident, harum expedita.</p>  
                    <img src={carousel} className="u-mt-3" alt="apostrof" />       
                  </div>
                </div>
              </div>
            </section>
            <section className="t-brands">
              <div className="o-container">
                <div className="o-row">                
                  <div className="o-col o-col--lg4 t-brands__box">
                    <img src={brand_1} className="t-brands__item" alt="brand" />
                    <img src={brand_2} className="t-brands__item" alt="brand" />                    
                  </div>
                  <div className="o-col o-col--lg4 t-brands__box">
                    <img src={brand_3} className="t-brands__item" alt="brand" />
                    <img src={brand_4} className="t-brands__item" alt="brand" />                    
                  </div>
                  <div className="o-col o-col--lg4 t-brands__box">
                    <img src={brand_5} className="t-brands__item" alt="brand" />
                    <img src={brand_6} className="t-brands__item" alt="brand" />                    
                  </div>
                </div>
              </div>
            </section>
            <section className="t-price">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary">price</h1>
                    <h2 className="c-label c-label__secondary">Pricing table</h2>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col o-col--md6 o-col--lg3 ">
                    <div className="t-price__container">
                      <h1 className="t-price__head">Express</h1>
                      <h2 className="t-price__price">$ 9.99</h2>
                      <p className="t-price__month">/ Month</p>
                      <div className="o-col t-price__list">
                        <p>Tracking Issues</p>
                        <p>-</p>
                        <p>Add bugs trough email</p>
                        <p>-</p>
                        <p>Notifications</p>
                        <p>-</p>
                        <p>Time tracking</p>
                        <p>-</p>
                        <p>Custom vievs</p>                         
                      </div>
                      <a href="#" className="c-btn c-btn--primary t-price__btn">Choose</a>
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="t-price__container">
                      <h1 className="t-price__head">Standard</h1>
                      <h2 className="t-price__price">$ 14.99</h2>
                      <p className="t-price__month">/ Month</p>
                      <div className="o-col t-price__list">
                        <p>Tracking Issues</p>
                        <p>-</p>
                        <p>Add bugs trough email</p>
                        <p>-</p>
                        <p>Notifications</p>
                        <p>-</p>
                        <p>Time tracking</p>
                        <p>-</p>
                        <p>Custom vievs</p>                         
                      </div>
                      <a href="#" className="c-btn c-btn--primary t-price__btn">Choose</a>
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="t-price__container">
                      <h1 className="t-price__head">Luxe</h1>
                      <h2 className="t-price__price">$ 19.99</h2>
                      <p className="t-price__month">/ Month</p>
                      <div className="o-col t-price__list">
                        <p>Tracking Issues</p>
                        <p>-</p>
                        <p>Add bugs trough email</p>
                        <p>-</p>
                        <p>Notifications</p>
                        <p>-</p>
                        <p>Time tracking</p>
                        <p>-</p>
                        <p>Custom vievs</p>                         
                      </div>
                      <a href="#" className="c-btn c-btn--primary t-price__btn">Choose</a>
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="t-price__container">
                      <h1 className="t-price__head">Premium</h1>
                      <h2 className="t-price__price">$ 24.99</h2>
                      <p className="t-price__month">/ Month</p>
                      <div className="o-col t-price__list">
                        <p>Tracking Issues</p>
                        <p>-</p>
                        <p>Add bugs trough email</p>
                        <p>-</p>
                        <p>Notifications</p>
                        <p>-</p>
                        <p>Time tracking</p>
                        <p>-</p>
                        <p>Custom vievs</p>                         
                      </div>
                      <a href="#" className="c-btn c-btn--primary t-price__btn u-bg-primary">Choose</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-premium">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head u-mb-5">
                    <h1 className="c-label c-label__primary">Premium</h1>
                    <h2 className="c-label c-label__secondary">Even more features aviable</h2>
                  </div>
                </div>
                <div className="o-row t-premium--divider">
                  <div className="o-col o-col--md5 t-premium__img">
                    <img className="t-premium__item" src={premium_1} alt="Premium Box" />
                  </div>
                  <div className="o-col o-col--md7 t-premium__features">
                    <div className="o-row u-direction-row">
                      <div className="o-col--sm2 t-premium__icon-box">
                        <img src={premium_icon} alt="ok" />
                      </div>
                      <div className="o-col--sm10">
                        <h2 className="features-lp2">First Feature</h2>
                        <p>Paresent ipsum lorem patriae nostra lex. Deus abitus.</p>
                        <p>- FEATURE ONE</p>
                        <p>- FEATURE TWO</p>
                        <p>- FEATURE THREE</p>
                      </div>
                    </div>
                    <div className="o-row u-direction-row">
                      <div className="o-col--sm2 t-premium__icon-box">
                        <img src={premium_icon} alt="ok" />
                      </div>
                      <div className="o-col--sm10">
                        <h2 className="features-lp2">Second Feature</h2>
                        <p>Paresent ipsum lorem patriae nostra lex. Deus abitus.</p>                            
                      </div>
                    </div>
                    <div className="o-row u-direction-row">
                      <div className="o-col--sm2 t-premium__icon-box">
                        <img src={premium_icon} alt="ok" />
                      </div>
                      <div className="o-col--sm10">
                        <h2 className="features-lp2">Third feature</h2>
                        <p>Paresent ipsum lorem patriae nostra lex. Deus abitus.</p>                            
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col t-premium__footer u-mt-3">
                    <img src={carousel} alt />                    
                  </div>
                  <div className="o-col t-premium__footer">                    
                    <a href="#" className="c-btn c-btn--primary">Get in touch</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-facts">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head">
                    <h1 className="c-label c-label__primary u-white">Some facts</h1>
                    <h2 className="c-label c-label__secondary ">About our work</h2>
                  </div>   
                </div>
                <div className="o-row ">
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="c-icon-box">                        
                      <h1 className="t-facts__number u-mb-2">1000</h1>
                      <h4 className="c-header--level2 u-white">Design Projects</h4>                        
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="c-icon-box">                        
                      <h1 className="t-facts__number u-mb-2">900</h1>
                      <h4 className="c-header--level2 u-white">Photos</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="c-icon-box">                        
                      <h1 className="t-facts__number u-mb-2">500</h1>
                      <h4 className="c-header--level2 u-white">Marketing Ideas</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                  <div className="o-col o-col--md6 o-col--lg3">
                    <div className="c-icon-box">                        
                      <h1 className="t-facts__number u-mb-2">1000</h1>
                      <h4 className="c-header--level2 u-white">Exhibitions</h4>
                      <p className="c-icon-box__text u-secondary-color">Lorem ipsum dolor sit amet consectetur  dasf adipisicing elit.</p>                        
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-contact-lp2">
              <div className="o-container">
                <div className="o-row">
                  <div className="o-col t-about__head u-mb-5">
                    <h1 className="c-label c-label__primary">COntact Us</h1>
                    <h2 className="c-label c-label__secondary">Our Agency located in Wroclove, Poland</h2>
                  </div>
                </div>
                <div className="o-row">
                  <div className="o-col t-contact-lp2__form-container">
                    <form action="#" id="Form">  
                      <div className="o-row">
                        <div className="o-col o-col--md6">
                          <div className="input-container">
                            <input id="Input-Name" name="input-name" type="text" />
                            <label htmlFor="Input-Name">Name</label>
                          </div>                                
                        </div>
                        <div className="o-col o-col--md6">                                
                          <div className="input-container">
                            <input id="Input-Email" name="input-email" type="text" />
                            <label htmlFor="Input-Email">E-Mail</label>
                          </div>                                                            
                        </div>
                      </div>   
                      <div className="input-container">
                        <input id="Input-Subject" name="input-subject" type="text" />
                        <label htmlFor="Input-Subject">Subject</label>
                      </div>
                      <div className="input-container input-container__message">
                        <input id="Input-message" name="input-message" type="text" />
                        <label htmlFor="Input-message">Message</label>
                      </div>
                      <div className="input-container u-flex-c u-mt-3">
                        <a href="#" className="c-btn c-btn--primary">Send Email</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section className="t-map">
              <div id="page-wrapper" className="t-map__container">  
                                                   
                  <div id="map">
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyCJUTPydGAimC-c88u_WQ1kCTegpHY52eM' }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                      >
                      <div className="o-container"  lat={51.1400} lng={16.8000}>
                        <div className="o-row t-map__cart u-direction-row">                    
                          <div className="o-col o-col--sm2 t-map__icon-container">
                            <i className="far fa-envelope c-icon-fa" />
                          </div>
                          <div className="o-col o-col--sm10 t-map__text-container">
                            <p className="t-map__text">O Box 16524 Collins Street West Victoria</p>
                          </div>   
                          <div className="o-col o-col--sm2 t-map__icon-container">
                            <i className="fas fa-location-arrow c-icon-fa" />
                          </div>
                          <div className="o-col o-col--sm10 t-map__text-container">
                            <p className="t-map__text">1764  King Street, Melboure Australia</p>
                          </div>   
                          <div className="o-col o-col--sm2 t-map__icon-container">
                            <i className="fas fa-phone c-icon-fa" />
                          </div>
                          <div className="o-col o-col--sm10 t-map__text-container">
                            <p>+00 0 124 4565</p>
                          </div>  
                          <div className="o-col o-col--sm2 t-map__icon-container">
                            <i className="fas fa-at c-icon-fa" />
                          </div>
                          <div className="o-col o-col--sm10 t-map__text-container">
                            <p>bukingdesign@umail.com</p>
                          </div> 
                          <div className="o-col o-col--sm2 t-map__icon-container">
                            <i className="fas fa-globe-americas c-icon-fa" />
                          </div>
                          <div className="o-col o-col--sm10 t-map__text-container">
                            <p>www.envato.com</p>
                          </div>  
                        </div>
                      </div>
                    </GoogleMapReact>
                  </div>
              </div>  
            </section>
            <footer className="t-footer">
              <div className="o-container">
                <div className="o-row t-footer__row">
                  <div className="o-col o-col--lg4">
                    <div className="social social--v2 t-footer__social">			
                      <button className="ic-btn b-tw">
                        <i className="fa fa-twitter" />
                      </button>
                      <button className="ic-btn b-fb">
                        <i className="fa fa-facebook" />
                      </button>
                      <button className="ic-btn b-gplus">
                        <i className="fa fa-google-plus" />
                      </button>
                      <button className="ic-btn b-inst">
                        <i className="fa fa-instagram" />
                      </button>
                      <button className="ic-btn b-gh">
                        <i className="fa fa-github" />
                      </button>                            
                    </div>
                    <div className="t-footer__awax">                        
                      <h1 className="c-header c-header--level3 c-header--white awax-footer-text">Awax c 2018</h1>
                    </div>
                  </div>
                  <div className="o-col o-col--lg4 t-footer__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus sint architecto necessitatibus ullam excepturi commodi vero, reprehenderit, nesciunt illum molestiae consequatur labore amet. Repudiandae voluptatibus iure dolorum sint. Corporis repellendus sint architecto necessitatibus ullam excepturi commodi verolum molestiae consequatu.</p>
                  </div>
                  <div className="o-col o-col--lg4">
                    <div className="t-footer__subscribe">
                      <p className="t-footer__p">E-Mail to subscribe</p>
                      <div className="t-footer__divider" />
                      <a href="#" className="c-btn c-btn--primary">Subscribe</a>
                    </div>
                  </div>  
                </div>
              </div>
            </footer>    
        </div>
        </div>   
      );
    }
  };

  export default CSSModules(Landing2, styleLanding2);