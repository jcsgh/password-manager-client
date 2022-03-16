import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useEffect } from 'react'

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
    <div className="App">
      <h1>Password Manager</h1>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
