import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/me.jpg)` }} />
              <h1 id="colorlib-logo"><a href="index.html">Hosni AYACHI</a></h1>
              <span className="email"><i className="icon-mail"></i> h.hosniayachi@gmail.com</span>
            </div><br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li><br />
                  <li><a href="#about" data-nav-section="about">About</a></li><br />
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/hosni-ayachi-17629712a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>          <a href="https://github.com/HosniAyachi" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
          
              </ul>
            </nav>
            <div className="colorlib-footer">
              
              <p><small>
                <b>Open</b> for a permanent position as Data Analyst, starting from February 2025 <br />
                <b>Ouvert</b> à un poste en CDI en tant que Data Analyst à partir de Février 2025 <br/>
                
              </small></p>
              <p><small>
                Feel free to contact me: <br />
                <b>Phone:</b> +33 7 58 54 57 99<br/>
                <b>E-mail:</b> h.hosniayachi@gmail.com  <br/>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
