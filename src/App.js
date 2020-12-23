import React from "react"; //you can put more component in application
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;
