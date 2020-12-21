import React from "react"; //you can put more component in application
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    rating: 4.0,
  },
  {
    id: 3,
    name: "udon",
    rating: 3.5,
  },
];

function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>{rating} / 5.0</h3>
    </div>
  );
}

Food.potato = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
