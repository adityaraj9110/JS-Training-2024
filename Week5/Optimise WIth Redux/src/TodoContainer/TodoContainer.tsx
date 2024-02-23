import { useDispatch } from "react-redux";
import "./todoContainer.css";
import { useState } from "react";
import { REMOVE_TODO } from "../redux/Constants";
import { TodoType } from "../redux/reducers/TodoReducers";

export type PropType = {
  data: TodoType;
};

const TodoContainer = ({ data }: PropType) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(false);

  const handleRemove = () => {
    dispatch({
      type: REMOVE_TODO,
      payload: data,
    });
  };

  const handleDone = () => {
    setDone(!done);
  };

  return (
    <div className="todo-text-container">
      <h1 className={done ? "line todo-text" : "todo-text"}>{data.userTodo}</h1>
      <div className="btn-fam">
        <button className="remove-btn" onClick={() => handleDone()}>
          {done ? "Not Done" : "Done "}
        </button>
        <button className="remove-btn" onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoContainer;
