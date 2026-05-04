import Item from "./Item";

const FoodItems = () => {


    let foodItems =["Boiled Egg", "Salad", "carrot", "Pineapple"]
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
       <Item key={items} foodItems={items}></Item>
      ))}

      {/* <li class="list-group-item">Salad</li>
          <li class="list-group-item">Green vegetable</li>
          <li class="list-group-item">Milk</li>
          <li class="list-group-item">Boiled Egg</li>
          <li class="list-group-item">Carrot</li> */}
    </ul>
  );
};
export default FoodItems;
