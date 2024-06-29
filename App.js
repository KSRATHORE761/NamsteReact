import React from "react";
import ReactDOM from "react-dom/client";
import RESTAURANTS_LIST from './data';

/**
 * 1. Header
 *      Logo
 *      Nav links
 *
 * 2. Body
 *      Search
 *      FoodContainer
 *      FoodCard
 *
 * 3. Footer
 *      Copyright
 *      Links
 *      Address
 *      Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="data:image/jpeg;base64,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" />
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

const RestaurantCard = ({Title,Description,Rating,Price,CloudinaryImageId}) => {
  return (
    <div class="food-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${CloudinaryImageId}`}
        alt="Food Image 1"
      />
      <h3>{Title}</h3>
      <p>
       {Description}
      </p>
      <div id="card__price__rating">
        <p class="rating">Rating: {Rating}</p>
        <p class="price">{Price}</p>
      </div>
    </div>
  );
};

const Body = () => {
  // const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime} = RESTAURANTS_LIST;
  const restaurants = RESTAURANTS_LIST;
  console.log(restaurants);
  return (
    <div className="body">
      <div class="search-bar">
        <input type="text" placeholder="Search for food..." />
        <button type="button">Search</button>
      </div>
      <div className="food-container">
      {
        restaurants.map((res,i)=>(
         <RestaurantCard
          key = {res.info.id}
          Title={res.info.name}
          Description={res.info.cuisines.slice(0,2).join(" , ")}
          Rating = {res.info.avgRating}
          CloudinaryImageId = {res.info.cloudinaryImageId}
          Price={res.info.costForTwo}
         />
        ))
      }
        {/* <RestaurantCard Title="Food item 1" 
        Description="This is a description of food item 1. It's delicious and nutritious." 
        Rating="3.8"
        Price="10.00"
        /> */}
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <ul class="social-media">
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="quick-links">
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
        </div>
      </div>
    </footer>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
