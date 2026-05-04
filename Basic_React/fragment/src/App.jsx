import react from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Item from "./components/Item";

function App() {
  let foodItems = ["salad", "boiled egg", "green vegetable", "milk", "carrot"];

  return (
    <div>
      <h1>Healthy Food</h1>
      <ErrorMsg></ErrorMsg>
      <FoodItems></FoodItems>
    </div>
  );
}
export default App;
