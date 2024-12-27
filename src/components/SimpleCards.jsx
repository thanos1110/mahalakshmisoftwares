import React from 'react';
import { Link } from 'react-router-dom';

function SimpleCards() {
  const Products = [
    {
      image : "/pos.svg",
      Heading: "SONIC POS",
      Description: "Efficient Windows POS for seamless sales, inventory, and customer management."
    },
    {
      image : "/erp.svg",
      Heading: "SONIC ERP",
      Description: "Comprehensive ERP software streamlining operations, inventory, finance, and reporting"
    }
  ];

  return (
    <div className='card-p'>
      {Products.map((product, index) => (
        <div key={index} className='div-card'>
          <img src={product.image} className='card-img' alt="" />
          <div>
            <h3>{product.Heading}</h3>
            <p className='card-desc'>{product.Description}</p>
            <button className='contact-button'><Link to="/features" className="contact-button">Product Features</Link></button>
            <button className='contact-button'><Link to="/contact" className="contact-button">Contact us</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimpleCards;
