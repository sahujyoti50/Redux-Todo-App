import "./css/main.css";

import Todo from "./component/Todo";


function App() {
  return (
    <div className="App">
       <h1>
        Todo App
       </h1>
       <div>
        <Todo/>
       </div>
    </div>
  );
}

export default App;