import '../App.css';
import PwdList from '../PwdList'
import PwdForm from '../PwdForm'
import { useEffect } from 'react'
import {fetchPwd} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function Passwords(props) {
  useEffect(()=>{
    props.fetchPwd()
}, [])
    return (
      <div className="container">
       <h3>Passwords</h3>
       <PwdForm />
      {props.isLoading ? "pwd LIST IS LOADING" : "pwd LIST LOADED" }
      <PwdList />
      {props.error !== "" ? props.error : ""}
      </div>
    );
  }
  
  export default connect(mapStateToProps, {fetchPwd})(Passwords)