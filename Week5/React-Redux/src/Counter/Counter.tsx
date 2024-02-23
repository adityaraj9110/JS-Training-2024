
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter-store/CounterReducers";

const Counter = () => {
    const count: number = useSelector((state:CounterStateType) => state.counterReducer.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    
      <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "incrementByPayload",
            payload: 25
          });
        }}
      >
        Increase By 25
      </button>
    </div>
  )
}

export default Counter
