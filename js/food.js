// const pizzaItem = React.createElement("li", {}, "Pizza");
const pizzaItem = <li>Pizza</li>;

// const foodList = React.createElement("ul",{className: "food"}, pizzaItem);
const foodList = <ul className="food">{pizzaItem}</ul>;