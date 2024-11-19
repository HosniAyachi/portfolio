import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Work & Projects
                </h2>
              </div>
            </div>
            <div className="row">
            <a
                href="https://www.sesamm.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/sesamm.png)`,
                    backgroundSize: "contain",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>Data Analyst</h3>
                      <span style={{ fontWeight: "bold" }}>
                        SESAMm | APR 2022 - Present
                      </span>
                      <br />
                      <span style={{ fontSize: "11.5px" }}>
                        Developed an automated annotation tool using OpenAI,
                        enhancing the efficiency of high-volume article
                        annotation processes.
                        <br />
                        Designed and implemented a Source Reliability Score
                        aligning with Sales team strategies, providing
                        data-driven insights for client onboarding.
                        <br />
                        Extended taxonomy by generating multilingual keywords,
                        identifying anomalies, and optimizing data quality
                        across various languages.
                        <br />
                        Created a centralized Databricks hub, empowering
                        non-technical users to automate repetitive workflows and
                        streamline data exploration.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </a>
              <a
                href="https://www.linkfluence.com/fr/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div
                    className="project"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/images/linkfluence.png)`,
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>Junior Data Analyst</h3>
                        <span style={{ fontWeight: "bold" }}>
                          Linkfluence, A Meltwater Company | APR 2021 - SEP 2021
                        </span>
                        <br />
                        <span style={{ fontSize: "11.5px" }}>
                          Set up a monthly report about Client's usage of
                          Linkfluence's Radarly (3 KPIs / 6 months period). The
                          report was set up using Pendo API calls through Python
                          and shared with everyone at Linkfluence. <br></br>Also
                          worked with Stellantis among others to provide them
                          with insightful visualization within an Excel report
                          about their performance on social media using Radarly
                          API calls through Python.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="row">
              <a
                href="https://public.tableau.com/app/profile/hosni1663/viz/AirbnbListings_16436384411200/Tableaudebord1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div
                    className="project"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/images/rbnb.jpg)`,
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>AIRBNB Listings Data Visualization</h3>
                        <span style={{ fontWeight: "bold" }}>
                          Personal Project
                        </span>
                        <br />
                        <span style={{ fontSize: "11.5px" }}>
                          Used Tableau to realize an insightful dashboard using
                          airbnb data for listings in the US (Data was found on
                          Kaggle).<br></br>
                          The analysis focuses on the factors affecting the
                          increase of the average price for the listings which
                          are mainly the number of bedrooms within the listing
                          and its geographic location. It also shows which
                          listings are the most profitable in terms of Total
                          Revenue and at which period of the year is that
                          Revenue at its peak.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://public.tableau.com/app/profile/hosni1663/viz/HMFrancestudy/Tableaudebord1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div
                    className="project"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/images/hm.jpg)`,
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>H&M Stores spread</h3>
                        <span style={{ fontWeight: "bold" }}>
                          Personal Project
                        </span>
                        <br />
                        <span style={{ fontSize: "11.5px" }}>
                          Used Tableau to realize an insightful dashboard using
                          the H&M Stores data found on Kaggle.<br></br>
                          The dashboard showcases the different countries that
                          have one or more H&M store(s), shows that France is
                          among the top10 countries with the most stores and
                          details their presence within the map of France then
                          compares the stores' class spread in France with the
                          one worldwide.
                        </span>
                        <span>
                          Deployed all the visualization realized into an
                          interactive <b>Shiny</b> application with four tabs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
