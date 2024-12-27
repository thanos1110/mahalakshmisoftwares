import { Link } from 'react-router-dom';
import './App.css';
import Logo from '/Mahalakshmi.svg';
import HomeImg from '/HOMEPAGE.svg';

function App() {
  return (
    <div id="left-right-parent">
      <div id="left">
        <div>
          <img src={Logo} alt="Logo" className="BrandLogo" />
          <h2 style={{ fontFamily: 'Nunito', margin: '10px 40px', color: '#2036cd' }}>
            Our Billing Products
          </h2>
          <button className="btn-home">
            <Link to="/products" className="contact-button">Sonic POS</Link>
          </button>
          <button className="btn-home">
            <Link to="/products" className="contact-button">Sonic ERP</Link>
          </button>
        </div>
      </div>
      <div id="right">
        <div>
          <img src={HomeImg} alt="Homepage" />
        </div>
      </div>
    </div>
  );
}

export default App;
