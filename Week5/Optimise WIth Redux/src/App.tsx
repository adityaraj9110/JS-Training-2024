import { Suspense, lazy } from "react";
// import TodoList from "./TodoList/TodoList";

const LazyTodoList = lazy(() => import("./TodoList/TodoList"));
const App = () => {
  return (
    // <Counter />
    <Suspense fallback={<h1>Site is loading please wait for sometime...</h1>}>
      <LazyTodoList />
    </Suspense>
    // <UserInfo/>
  );
};

export default App;
