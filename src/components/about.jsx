import React, { Component } from "react";

export default class About extends Component {
  render() {
    const imgstyle = { 
        height: "100%",
        width: "100%",
        objectFit: "contain",

      };
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
                        I am a freshly graduated Data Scienctist from the Gustave Eiffel
                        University (as part of a double degree mobility program
                        with ESPRIT, Tunisia).
                      </p>
                      <p>
                        Passionate and driven, I am always looking forward to
                        new learning opportunities and challenges being a
                        problem solving maniac. I am autonomous, proactive and a
                        team player. I have worked with many teams on different
                        projects before and most of the people I have worked
                        with say that I am a good listener, decision maker and a
                        cheerful addition to the working environment which
                        pushes them forward.
                      </p>
                      <p>
                        I would be very much interested in working on ambitious
                        projects and learning from it within a very supportive
                        and professional environment.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <img src="https://i.giphy.com/media/bcKmIWkUMCjVm/giphy.gif" style={imgstyle}></img>
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
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="desc">
                  <h3>Data Science</h3>
                  <p>Data Visualization tools: Tableau, Excel</p>
                  <p>Unsupervised Learning: ACP, KMeans...</p>
                  <p>
                    Supervised Learning: KNN, SVM, Linear/Logistic Regression...
                  </p>
                  <p>Deep Learning: (ANN, CNN, RNN, LSTM...)</p>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="desc">
                  <h3>Theory</h3>
                  <p>Graph Theory</p>
                  <p>
                  Markov Chains
                  </p>
                  <p>Linear Algebra</p>
                  <p>Linear/Non-Linear Programming</p>
                  <p>Time Series</p>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="desc">
                  <h3>Data & Programming</h3>
                  <p>Relational Database: SQL</p>
                  <p>Programming Languages: Python, R, Java, Scala, HTML/CSS, JavaScript</p>
                  <p>
                    Non-Relational Database: MongoDB, Cassandra, Neo4j
                  </p>
                  <p>Big Data: Apache Spark</p>
                </div>
              </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-2 image-center animate-box" ><img src="images/skill1.png" style={imgstyle}></img></div>
            <div className="col-md-2 image-center animate-box" ><img src="images/skill2.png" style={imgstyle}></img></div>
            <div className="col-md-2 image-center animate-box" ><img src="images/skill3.png" style={imgstyle}></img></div>
            <div className="col-md-2 image-center animate-box" ><img src="images/skill4.png" style={imgstyle}></img></div>
            <div className="col-md-2 image-center animate-box" ><img src="images/skill5.png" style={imgstyle}></img></div>
            <div className="col-md-2 image-center animate-box" ><img src="images/skill6.png" style={imgstyle}></img></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
