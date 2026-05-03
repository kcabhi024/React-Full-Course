import AppName from './components/AppName'
import AppTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

function App() {

  return (
    <center class="todo-center">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItem></TodoItem>

    </center>
  );
}

export default App;
