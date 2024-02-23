import { Suspense, lazy, useState } from "react";
import "./todoList.css";
import { Input } from "../shared/Input.const";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../redux/Constants";
import { todoSelector } from "../redux/reducers/TodoReducers";

const LazyTodoContainer = lazy(() => import("../TodoContainer/TodoContainer"));

const TodoList = () => {
  const [userTodo, setUserTodo] = useState<string>("");
  const dispatch = useDispatch();
  const todoList = useSelector(todoSelector);
  
  // please do make selector like this, i have already suggest you???????????????????????????????????????????????
  // already selector

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTodo(e.target.value);
  };

  const handleClick = () => {
    if (userTodo.trim().length) {
      // do short way, not complex (!!!!!!)
      dispatch({
        type: ADD_TODO,
        payload: userTodo,
      });
      setUserTodo("");
    } else {
      alert("please provide the input");
    }
  };
  console.log("todoList->", todoList);

  return (
    <div className="container">
      <h1 className="title">Your Todo</h1>
      <Input type="text" onChange={(e) => handleChange(e)} value={userTodo} />
      <button onClick={() => handleClick()}>Add Todo</button>
      <Suspense fallback={<div>Loading please wait....</div>}>
        {todoList.map((item: string, ind: number) => (
          <LazyTodoContainer data={item} key={ind} index={ind} />
        ))}
      </Suspense>
    </div>
  );
};

export default TodoList;
