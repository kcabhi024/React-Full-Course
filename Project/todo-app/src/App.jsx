import AppName from './components/AppName'
import AppTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import "./App.css";

function App() {

  return (
    <center class="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>

      <div class = "item-container">
      <TodoItem></TodoItem>
      </div>

    </center>
  );
}

export default App;
