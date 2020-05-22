import React from "react";
import "./styles.css";
import CC from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CC />
      </div>
    </Provider>
  );
}
