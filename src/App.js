import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';

//import Calendar from './Components/Calendar/Calendar';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            {/* <Route path="/event" component={Events} /> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
