import React from "react";
import "./styles.css";
import HCC from "./components/HooksCakeContainer";
import CC from "./components/cakeContainer";
import IC from "./components/IceContainer";
import TCC from "./components/NewCakeContainer";
import User from "./components/UserComponent";
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <CC />
        <HCC />
        <IC />
        <TCC />
      </div> */}
      <div>
        <User />
      </div>
    </Provider>
  );
}
