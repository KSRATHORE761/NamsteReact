import RestaurantCard from "../RestaurantCard";
import RESTAURANTS_LIST from "../utils/mock-data";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANTS_LIST);
  const handleTopRatedRestaurant = (e) => {
    e.preventDefault();

    const listofRestaurants = restaurants;
    const topRatedRestaurants = listofRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(topRatedRestaurants);
    setRestaurants(topRatedRestaurants);
  };

  return (
    <div className="body">
      <div class="filter-bar">
        <button type="button" onClick={(e) => handleTopRatedRestaurant(e)}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for food..." />
        <button type="button">Search</button>
      </div>
      <div className="food-container">
        {restaurants.map((res, i) => (
          <RestaurantCard
            key={res.info.id}
            Title={res.info.name}
            Description={res.info.cuisines.slice(0, 2).join(" , ")}
            Rating={res.info.avgRating}
            CloudinaryImageId={res.info.cloudinaryImageId}
            Price={res.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
