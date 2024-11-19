import React from "react";
// import "./references.css"; // Make sure to link your custom CSS

const References = () => {
  const contacts = [
    {
      name: "Victoria Musatova",
      position: "Head of Data at SESAMm",
      email: "v.musatova@sesamm.com",
      linkedin: "https://www.linkedin.com/in/victoria-musatova-39750b65/",
      description: "Victoria has been my manager for 6 months and previously (and still) my head of data, she supervised many projects I took part on and therefore could provide a lot of insight regarding me.",
    },
    {
      name: "Nicolas Forté",
      position: "Program Manager/Head of Agile at SESAMm",
      email: "n.forte@sesamm.com",
      linkedin: "https://www.linkedin.com/in/nicolas-fort%C3%A9-6aab5a53/",
      description: "Nicolas was my manager for the first two years at SESAMm and we exchanged a lot, whether it is work and tasks related or even personal matters for a long time so I am confident he could give you an idea on how I work.",
    },
  ];

  return (
    <section className="colorlib-work" data-section="references">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">References</span>
            <h2 className="colorlib-heading animate-box">People You Can Reach</h2>
          </div>
        </div>
        <div className="row">
          {contacts.map((contact, index) => (
            <div className="col-md-6 animate-box" key={index}>
              <div className="reference-card">
                <h3>{contact.name}</h3>
                <span style={{ fontWeight: "bold" }}>{contact.position}</span>
                <p>{contact.description}</p>
                <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p>
                  LinkedIn:{" "}
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
