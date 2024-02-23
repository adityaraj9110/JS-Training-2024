import { useState } from "react";
import "./todoList.css";
import { useDispatch, useSelector } from "react-redux";
import TodoContainer from "../TodoContainer/TodoContainer";
import RootState from "../store/TodoReducer/rootType";
import { Input } from "../shared/Constants";

const TodoList = () => {
  const [todo, setTodo] = useState<string>("");

  // see ritesh code to making selector
  // DO not miss types, types is required
  const { todoList } = useSelector((state: RootState) => state.todoReducer);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: "addTodo",
      payload: todo,
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="container">
      <h1 className="title">Your Todo</h1>
      <Input name="name" type="text" onChange={handleInput} />{" "}
      <Input type="text" onChange={handleInput} />{" "}
      <Input type="text" onChange={handleInput} />{" "}
      <Input type="text" onChange={handleInput} />{" "}
      <Input type="text" onChange={handleInput} onBlur={handleBlur} />
      <button onClick={() => handleClick()}>Add Todo</button>
      {todoList.map((item: string, ind: number) => (
        <TodoContainer data={item} key={ind} index={ind} />
      ))}
    </div>
  );
};

export default TodoList;
