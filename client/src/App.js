import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch >
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
