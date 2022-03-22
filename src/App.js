import './App.css';
import NavBar from './components/NavBar';
import Passwords from './components/Passwords';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Switch
} from "react-router-dom";

function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
      <NavBar/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/passwordManager/passwords">
            <Passwords />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/register">
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
