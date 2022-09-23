import { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
      });
      setTodo("");
    }
  };
  return (
    <>
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />
        <button className="add-btn" onClick={() => add()}>
          +
        </button>
      </div>
      <div className="displaytodos">
        {props.todos.map((arrays) => {
          return <p key={arrays.id} style={{padding:"10px",backgroundColor:"white",margin:"5px"}} >{arrays.item}</p>;
        })}
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
