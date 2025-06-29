import React from 'react';
import { Link } from 'react-router-dom';

function CareerCards() {
  const careers = [
    {
      heading: "Web Development",
      description: "HTML, CSS, JavaScript"
    },
    {
      heading: ".Net Technology Windows Development",
      description: "Console + WinForms"
    },
    {
      heading: "Data Analysis & Power BI",
      description: "Data structure in Java"
    },
    {
      heading: "Mobile App Development",
      description: "Flutter / React Native"
    },
    {
      heading: "UI/UX Design",
      description: "Figma, Adobe XD, Canva"
    },
    {
      heading: "Digital Marketing & SEO",
      description: "Social Media, Ads, Google SEO"
    },{
        heading: "Cloud Computing",
        description: "AWS, Azure, Google Cloud Basics"
    },
    {
        heading: "Cybersecurity Fundamentals",
        description: "Network Security, Ethical Hacking, Tools"
    }

  ];

  return (
    <div className="career-grid">
      {careers.map((career, index) => (
        <div key={index} className="career-card">
          <div className="career-content">
            <h3 className="career-title">{career.heading}</h3>
            <p className="career-description">{career.description}</p>
            <div className="career-buttons">
              {/* <Link to="/features" className="career-button">Product Features</Link> */}
              <Link to="/contact" className="career-button">Contact Us</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CareerCards;
