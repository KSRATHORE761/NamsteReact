import { CDN_URL } from "./utils/constants";
const RestaurantCard = ({Title,Description,Rating,Price,CloudinaryImageId}) => {
    return (
      <div class="food-card">
        <img
          src= {`${CDN_URL}/${CloudinaryImageId}`}
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

  export default RestaurantCard