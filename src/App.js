import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./Components/MainNav/MainNav";
import Home from "./Components/Home/Home";
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Events from './Components/Events/Events';

//import Calendar from './Components/Calendar/Calendar';

function App() {
  return (
    <div>
      <Router>
        <MainNav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/event" component={Events} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
