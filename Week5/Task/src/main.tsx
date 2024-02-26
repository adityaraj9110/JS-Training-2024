import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


import { Provider } from "react-redux";
import { store } from "./shared/redux/store.tsx";

store.subscribe(() => console.log("This is store--->", store.getState()));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
