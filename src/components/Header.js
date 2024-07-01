import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;