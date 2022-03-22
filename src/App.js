import './App.css';
import NavBar from './components/NavBar';
import Passwords from './components/Passwords';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import {
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
      {/* <Header/> */}
      <NavBar/>
        <Switch>
        <Route exact path="/">
            <h1>Main Page</h1>
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />

    </div>
  );
}

export default App;
