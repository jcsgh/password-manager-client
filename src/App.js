import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import New from './components/New';
import Passwords from './components/Passwords';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import {
  Route,
  Switch,
  Link
} from "react-router-dom";

// import ToDoList from './ToDoList'
// import ToDoForm from './ToDoForm'
// import {fetchTodo} from './actions/actions'
// import {connect} from 'react-redux'

// const mapStateToProps = (state) => ({
//   isLoading: state.isLoading,
//   error: state.error
// })

function App() {

  //   useEffect(()=>{
  //     props.fetchTodo()
  // }, [])

  return (
    <div className="page-container">
      <div className="content-wrap">
      <Header/>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/passwords">
            <Passwords />
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
