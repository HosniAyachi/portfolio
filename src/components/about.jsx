import React, { Component } from "react";
// import "./About.css"; // Make sure to link your custom CSS

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-9">
                    <div className="about-desc">
                      <span className="heading-meta">About me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a motivated Data Analyst with over three years of
                        experience in fintech SaaS environments. I hold an
                        engineering diploma in Data Science from ESPRIT,
                        Tunisia, and an MSc. in Intelligent Systems and
                        Applications from Université Gustave Eiffel, France, as
                        part of a double-degree mobility program.
                      </p>
                      <p>
                        Passionate about data, I thrive on solving complex
                        problems through automation, analysis, and
                        visualization. I am proficient in Python, SQL, and R,
                        and skilled in leveraging tools like Databricks and
                        Power BI/Tableau. My experience includes developing an automated
                        annotation tool, extending multilingual taxonomy, and
                        designing a Source Reliability Score.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://i.giphy.com/media/bcKmIWkUMCjVm/giphy.gif"
                      alt=""
                      className="profile-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">My Data Analysis Expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-6 text-center animate-box">
                <div className="desc">
                  <h3>Data Analysis & Insights</h3>
                  <p>
                    <strong>Programming Languages:</strong> Python (Pandas,
                    NumPy, Scikit-Learn)
                  </p>
                  <p>
                    <strong>Data Exploration:</strong> Statistical Analysis,
                    Feature Engineering, Data Cleaning
                  </p>
                  <p>
                    <strong>Visualization:</strong> Tableau, Power BI,
                    Matplotlib
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-center animate-box">
                <div className="desc">
                  <h3>Data Management & Automation</h3>
                  <p>
                    <strong>Data Warehousing:</strong> AWS S3, Athena for
                    large-scale data storage & querying
                  </p>
                  <p>
                    <strong>Relational Databases:</strong> SQL (Advanced
                    Queries, Joins, Indexing)
                  </p>
                  <p>
                    <strong>Data Platforms:</strong> Databricks, Apache Spark
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-pt-md logo-row">
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill1.png`}
                    alt="Python"
                  />
                </div>
              </div>
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill2.png`}
                    alt="SQL"
                  />
                </div>
              </div>
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill3.png`}
                    alt="Databricks"
                  />
                </div>
              </div>
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill4.png`}
                    alt="AWS"
                  />
                </div>
              </div>
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill5.png`}
                    alt="Tableau"
                  />
                </div>
              </div>
              <div className="col-md-2 image-center animate-box">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/skill6.png`}
                    alt="Power BI"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
