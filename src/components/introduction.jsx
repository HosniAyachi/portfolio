import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{background: 'linear-gradient(#f2f3f7, #ffffff)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello world! <br />I'm Hosni</h1>
                          <h3>Have a look at my CV!</h3>
                          <p><a className="btn btn-primary btn-learn" href="https://pdfhost.io/v/ZQdhEOkVE_Hosni_Ayachi_ENGLISH" target="_blank" rel="noopener noreferrer">English<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{background: 'linear-gradient(#f2f3f7, #ffffff)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Data Analyst</h1>
                          <h4>with over 3 years of experience.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{background: 'linear-gradient(#f2f3f7, #ffffff)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Open for a<br/>permanent position as Data Analyst</h1>
                          <p><a className="btn btn-primary btn-learn" href="mailto: h.hosniayachi@gmail.com" target="_blank" rel="noopener noreferrer">Contact me <i className="icon-mail"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
