import React from "react"; //you can put more component in application
import { HashRouter, Route } from "react-router-dom"; //also can use Browser Router instead but hard to adopt in gh pages
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
