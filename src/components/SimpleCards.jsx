import React from 'react';
import { Link } from 'react-router-dom';

function SimpleCards() {
  const productList = [
    {
      image: "/pos.svg",
      heading: "SONIC POS",
      description: "Efficient Windows POS for seamless sales, inventory, and customer management."
    },
    {
      image: "/erp.svg",
      heading: "SONIC ERP",
      description: "Comprehensive ERP software streamlining operations, inventory, finance, and reporting."
    },
    {
      image: "/restaurent.png",
      heading: "SONIC KOT",
      description: "Restaurant KOT system for real-time kitchen/bar order management via mobile/tablet."
    },
    {
      image: "/crm.png",
      heading: "SONIC CRM",
      description: "Customer Relationship Management system with lead tracking and employee tasks."
    },
    {
      image: "/banquet.png",
      heading: "Banquet Manager",
      description: "Banquet hall booking and billing system with calendar, contracts and auto-reminders."
    },
    {
      image: "/bill.png",
      heading: "Retail Billing System",
      description: "Barcode-enabled billing software with GST reports, inventory, and returns."
    },
    {
      image: "/Hotel.png",
      heading: "Hotel Management",
      description: "Hotel PMS with room booking, guest check-in/out, and channel manager integration."
    },
    {
      image: "/sms.png",
      heading: "Bulk SMS Email & WhatsApp",
      description: "Marketing tool to send offers & alerts via SMS or WhatsApp to customers."
    },{
      image: "/web.png",
      heading: "Website Development",
      description: "Responsive and SEO-friendly websites for businesses, portfolios, eCommerce and more."
    },
    {
      image: "/mobile.png",
      heading: "Mobile App Development",
      description: "Android/iOS apps with sleek UI/UX for POS, CRM, booking, and custom solutions."
    },
    {
      image: "/custom.png",
      heading: "Custom Software Development",
      description: "Tailored software solutions to automate your business workflows and operations."
    },
    {
      image: "/bi.png",
      heading: "Business Intelligence Dashboard",
      description: "Advanced reporting and visual dashboards for better decision making and performance tracking."
    },
    {
      image: "/payroll.png",
      heading: "Attendance & HRMS",
      description: "Employee attendance, payroll, and HR management system integrated with biometric devices."
    },{
    image: "/seo.png",
    heading: "SEO Optimization",
    description: "Boost your website ranking with technical SEO, keyword optimization, and analytics tools."
  },
  {
    image: "/ui.png",
    heading: "UI/UX Design",
    description: "Modern, user-friendly interfaces with focus on smooth user experience and branding."
  },
  {
    image: "/data.png",
    heading: "Data & Analytics",
    description: "Business dashboards, reports, and analytics to help you make data-driven decisions."
  },

  ];

  return (
    <div className="product-grid">
      {productList.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} className="product-image" alt={product.heading} />
          <div className="product-content">
            <h3 className="product-title">{product.heading}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-buttons">
              <Link to="/features" className="product-button">Product Features</Link>
              <Link to="/contact" className="product-button">Contact Us</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimpleCards;
