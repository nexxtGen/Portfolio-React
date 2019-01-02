import React, { Component } from 'react';
import styleLanding1 from './prod-assets/style-landing-1.css';
import CSSModules from 'react-css-modules';
//import images
import icon_1 from './images/icons/icon-1.jpg';
import icon_2 from './images/icons/icon-2.jpg';
import icon_3 from './images/icons/icon-3.jpg';
import portfolio_1 from './images/portfolio/portfolio-1.jpg';
import portfolio_2 from './images/portfolio/portfolio-2.jpg';
import portfolio_3 from './images/portfolio/portfolio-3.jpg';
import about_1 from './images/about/about-1.jpg';
import about_2 from './images/about/about-2.jpg';
import about_3 from './images/about/about-3.jpg';
import about_4 from './images/about/about-4.jpg';
import about_5 from './images/about/about-5.jpg';
import team_1 from './images/team/team-1.jpg';
import team_2 from './images/team/team-2.jpg';
import team_3 from './images/team/team-3.jpg';
import logoLp1 from './images/logo-lp1.png';
import brand1 from './images/brands/brand-1.jpg';
import brand2 from './images/brands/brand-2.jpg';
import brand3 from './images/brands/brand-3.jpg';
import brand4 from './images/brands/brand-4.jpg';
//import CSSModules from 'react-css-modules';

class Landing1 extends Component{
    render() {
      return (        
        <div className="landing-page-1-container">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&subset=latin-ext" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&subset=latin-ext" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
          <title>Golden</title>
          <link rel="stylesheet" href="prod-assets/style.css" />    
          <header className="t-site-header-lp1 u-bg-dark">
            <div className="o-container">
              <div className="t-site-header__top">
                <div className="o-row o-row--center-y">
                  <div className="o-col o-col--md3">
                    <a href="#"> <img src={logoLp1} alt="logo" /></a>
                  </div>
                  <div className="o-col o-col--md9 t-site-header__menu">
                    <nav className="c-nav">
                      <a href="#" className="c-nav__item-lp1 c-nav__item--underline-hover-lp1">Home</a>
                      <a href="#" className="c-nav__item-lp1 c-nav__item--underline-hover-lp1">Services</a>
                      <a href="#" className="c-nav__item-lp1 c-nav__item--underline-hover-lp1">Portfolio</a>
                      <a href="#" className="c-nav__item-lp1 c-nav__item--underline-hover-lp1">About</a>
                      <a href="#" className="c-nav__item-lp1 c-nav__item--underline-hover-lp1">Contact</a>
                    </nav>
                  </div>
                </div>                
              </div> 
              <div className="t-site-header__hero u-text-center">
                <h2 className="c-heading-lp1 c-heading-lp1--white t-site-header__intro-text-lp1 u-mb-3">Welcome To Our Studio!</h2>
                <h1 className="c-heading-lp1 c-heading-lp1--level0 c-heading-lp1--white c-heading-lp1--upper u-mb-3">It's nice to meet You</h1>
                <a href="#" className="c-btn-lp1 c-btn--primary-lp1">Tell me more</a>
              </div>
            </div>
          </header>  
          <section className="t-services-1">
            <div className="o-container">
              <div className="o-row o-row--center-y">
                <div className="o-col u-mb-6">
                  <div className="t-services__header">                    
                    <h1 className="c-heading-lp1 c-heading-lp1--level1 c-heading-lp1--upper">Services</h1>
                    <p className="u-text-italic">Proin iaculis purus consequat sem cure</p>
                  </div>                    
                </div>
              </div>
              <div className="o-row o-row--center-y">
                <div className="o-col o-col--md4">
                  <div className="c-icon-box">
                    <div className="c-icon-box__image">
                      <img className="c-icon-box__icon" src={icon_1} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">E-Commerce</h4>
                    <p className="c-icon-box__text-lp1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, libero nobis aliquam minus magnam nihil illo totam accusamus costamtos ala.</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-icon-box">
                    <div className="c-icon-box__image">
                      <img className="c-icon-box__icon" src={icon_2} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Responsive Web</h4>
                    <p className="c-icon-box__text-lp1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, libero nobis aliquam minus magnam nihil illo totam accusamus costamtos ala.</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-icon-box">
                    <div className="c-icon-box__image">
                      <img className="c-icon-box__icon" src={icon_3} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Web Security</h4>
                    <p className="c-icon-box__text-lp1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, libero nobis aliquam minus magnam nihil illo totam accusamus costamtos ala.</p>                        
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="t-portfolio">
            <div className="o-container">
              <div className="o-row o-row--center-y">
                <div className="o-col u-mb-6">
                  <div className="t-services__header">                    
                    <h1 className="c-heading-lp1 c-heading-lp1--level1 c-heading-lp1--upper">Our Portfolio</h1>
                    <p className="u-text-italic">Proin iaculis purus consequat sem cure</p>
                  </div>                    
                </div>
              </div>  
              <div className="o-row">
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_1} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Ebony &amp; Ivory</h4>
                    <p className="c-portfolio-box__text-lp1">Branding</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_2} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Branding</h4>
                    <p className="c-portfolio-box__text-lp1">Print Design</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_3} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Clever Poster</h4>
                    <p className="c-portfolio-box__text-lp1">Print Design</p>                        
                  </div>
                </div>
              </div>
              <div className="o-row u-mt-3">
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_3} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Ebony &amp; Ivory</h4>
                    <p className="c-portfolio-box__text-lp1">Branding</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_2} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Branding</h4>
                    <p className="c-portfolio-box__text-lp1">Print Design</p>                        
                  </div>
                </div>
                <div className="o-col o-col--md4">
                  <div className="c-portfolio-box">
                    <div className="c-portfolio-box__image u-mb-2">
                      <img className="c-portfolio-box__icon" src={portfolio_2} alt />
                    </div>
                    <h4 className="c-heading-lp1--level2">Clever Poster</h4>
                    <p className="c-portfolio-box__text-lp1">Print Design</p>                        
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="t-about">
            <div className="o-container">
              <div className="o-row ">
                <div className="o-col o-col--md12 u-mb-6">
                  <div className="t-about__header-lp1">                    
                    <h1 className="c-heading-lp1 c-heading-lp1--level1 c-heading-lp1--upper">About Us</h1>
                    <p className="u-text-italic">Proin iaculis purus consequat sem cure</p>
                  </div>                    
                </div>
              </div>
              <div className="o-row o-col o-col--md12 t-about__row">  
                <div className="t-about__content o-col o-col--md6 o-col--lg4">                    
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 c-heading-lp1--upper">July 2010</h1>
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 ">Our Humble Beginnins</h1>
                  <p className="t-about__text-lp1">Proin iaculis purus consequat sem cure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quaerat deserunt optio facilis minima possimus reiciendis repudiandae. </p>
                </div>                                  
                <div className="o-col o-col--md4 t-about__image">
                  <img className="t-about__item" src={about_1} alt="About" />
                </div>                
              </div>
              <div className="o-row o-col o-col--md12 t-about__row">                                  
                <div className="o-col o-col--md4 t-about__image t-about__image--offset">
                  <img className="t-about__item" src={about_2} alt="About" />
                </div>
                <div className="t-about__content--rev o-col--md4">                    
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 c-heading-lp1--upper">January 2011</h1>
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 ">Facing Startup battles</h1>
                  <p className="t-about__text-lp1">Proin iaculis purus consequat sem cure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quaerat deserunt optio facilis minima possimus reiciendis repudiandae. </p>
                </div>  
              </div>
              <div className="o-row o-col o-col--md12 t-about__row">  
                <div className="t-about__content o-col o-col--md6 o-col--lg4">                    
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 c-heading-lp1--upper">July 2010</h1>
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 ">Our Humble Beginnins</h1>
                  <p className="t-about__text-lp1">Proin iaculis purus consequat sem cure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quaerat deserunt optio facilis minima possimus reiciendis repudiandae. </p>
                </div>                                  
                <div className="o-col o-col--md4 t-about__image">
                  <img className="t-about__item" src={about_3} alt="About" />
                </div>                
              </div>
              <div className="o-row o-col o-col--md12 t-about__row">                                  
                <div className="o-col o-col--md4 t-about__image t-about__image--offset">
                  <img className="t-about__item" src={about_4} alt="About" />
                </div>
                <div className="t-about__content--rev o-col--md4">                    
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 c-heading-lp1--upper">January 2011</h1>
                  <h1 className="c-heading-lp1 c-heading-lp1--level3 ">Facing Startup battles</h1>
                  <p className="t-about__text-lp1">Proin iaculis purus consequat sem cure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quaerat deserunt optio facilis minima possimus reiciendis repudiandae. </p>
                </div>  
              </div>
              <div className="o-row o-col o-col--md12 t-about__row">  
                <div className="t-about__content o-col o-col--md4">                    
                </div>                                  
                <div className="o-col o-col--md4 t-about__image">
                  <img className="t-about__item" src={about_5} alt="About" />
                </div>                
              </div>
            </div>
          </section>
          <section className="t-team-1">
            <div className="o-container">
              <div className="o-row ">
                <div className="o-col o-col--md12 u-mb-6">
                  <div className="t-about__header-lp1">                    
                    <h1 className="c-heading-lp1 c-heading-lp1--level1 c-heading-lp1--upper">Our Amazing team</h1>
                    <p className="u-text-italic">Proin iaculis purus consequat sem cure</p>
                  </div>                    
                </div>
              </div>
              <div className="o-row">
                <div className="o-col o-col--lg4 t-team__box">
                  <div className="t-team__image">                    
                    <img className="t-team__icon-lp1" src={team_1} alt />
                  </div>
                  <h4 className="c-heading-lp1--level2">Hans Urlich</h4>
                  <p className="t-team__text-lp2">Marketer</p>
                  <div className="social-lp1">			
                    <button className="ic-btn-lp1 b-tw-lp1">
                      <i className="fa fa-twitter" />
                    </button>
                    <button className="ic-btn-lp1 b-fb-lp1">
                      <i className="fa fa-facebook" />
                    </button>
                    <button className="ic-btn-lp1 b-gplus-lp1">
                      <i className="fa fa-google-plus" />
                    </button>
                  </div>                    
                </div>
                <div className="o-col o-col--lg4 t-team__box">
                  <div className="t-team__image">                    
                    <img className="t-team__icon-lp1" src={team_2} alt />
                  </div>
                  <h4 className="c-heading-lp1--level2">Yama Chan-Gu</h4>
                  <p className="t-team__text-lp2">Coder</p>
                  <div className="social-lp1">			
                    <button className="ic-btn-lp1 b-tw-lp1">
                      <i className="fa fa-twitter" />
                    </button>
                    <button className="ic-btn-lp1 b-fb-lp1">
                      <i className="fa fa-facebook" />
                    </button>
                    <button className="ic-btn-lp1 b-gplus-lp1">
                      <i className="fa fa-google-plus" />
                    </button>
                  </div>                    
                </div>
                <div className="o-col o-col--lg4 ">
                  <div className="t-team__image">                    
                    <img className="t-team__icon-lp1" src={team_3} alt />
                  </div>
                  <h4 className="c-heading-lp1--level2">Sam Gimp</h4>
                  <p className="t-team__text-lp2">Graphics Designer</p>
                  <div className="social-lp1">			
                    <button className="ic-btn-lp1 b-tw-lp1">
                      <i className="fa fa-twitter" />
                    </button>
                    <button className="ic-btn-lp1 b-fb-lp1">
                      <i className="fa fa-facebook" />
                    </button>
                    <button className="ic-btn-lp1 b-gplus-lp1">
                      <i className="fa fa-google-plus" />
                    </button>
                  </div>                    
                </div>
                <div className="o-row ">
                  <div className="o-col o-col--md12 t-team__footer">                        
                    <p className>Proin iaculis purus consequat sem cure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias voluptas vitae officiis. Architecto ea explicabo ipsam eveniet, modi commodi corporis assumenda? Natus vero hic at eaque deserunt veritatis libero.</p>                                         
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="t-brands-lp1">
            <div className="o-container">
              <div className="o-row">
                <div className="o-col o-col--md6 o-col--lg3 t-brands-lp1__box">
                  <img src={brand1} alt />
                </div>
                <div className="o-col o-col--md6 o-col--lg3 t-brands-lp1__box">
                  <img src={brand2} alt />
                </div>
                <div className="o-col o-col--md6 o-col--lg3 t-brands-lp1__box">
                  <img src={brand3} alt />
                </div> 
                <div className="o-col o-col--md6 o-col--lg3 t-brands-lp1__box">
                  <img src={brand4} alt />
                </div>   
              </div> 
            </div>  
          </section>
          <section className="t-contact">
            <div className="o-container">
              <div className="o-row">
                <div className="o-col t-contact__header">
                  <h1 className="c-heading-lp1 c-heading-lp1--level1 c-heading-lp1--upper u-white">Contact Us</h1>
                  <p className="u-text-italic">Proin iaculis purus consequat sem cure</p>
                </div>
              </div>
              <div className="o-row t-contact__form-box">                
                <div className="o-col o-col--lg6">  
                  <form action="#">                  
                    <div className="t-contact__form-group">    						
                      <input type="email" className="t-contact__form" id="email" placeholder="YOUR EMAIL *" />
                    </div>
                    <div className="t-contact__form-group">                                
                      <input type="text" className="t-contact__form" id="name" placeholder="YOUR NAME *" />
                    </div>
                    <div className="t-contact__form-group">                            
                      <input type="text" className="t-contact__form" id="subject" placeholder="SUBJECT *" />
                    </div>  
                  </form>        
                </div>
                <div className="o-col o-col--lg6">
                  <form action="#">
                    <div className="t-contact__form-group">                                
                      <textarea type="text" className="t-contact__form" placeholder="YOUR MESSAGE *" id="text" rows={10} defaultValue={""} />   							
                    </div> 
                  </form>
                </div>                  
              </div>
              <div className="o-row">
                <div className="o-col u-flex-c">
                  <a href="#" className="c-btn-lp1 c-btn--primary-lp1 u-mt-2 ">Send Message</a>
                </div>
              </div>
            </div>
          </section>
          <footer className="t-footer-lp1">
            <div className="o-container">
              <div className="o-row">
                <div className="o-col o-col--md4 t-footer-lp1__copyright">
                  <p>© Copyright 2014 FreebiesXpress.com</p>
                </div>
                <div className="o-col o-col--md4">
                  <div className="social-lp1">			
                    <button className="ic-btn-lp1 b-tw-lp1">
                      <i className="fa fa-twitter" />
                    </button>
                    <button className="ic-btn-lp1 b-fb-lp1">
                      <i className="fa fa-facebook" />
                    </button>
                    <button className="ic-btn-lp1 b-gplus-lp1">
                      <i className="fa fa-google-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>   
          </footer>
        </div>        
      );
    }
  };

  export default CSSModules(Landing1, styleLanding1);