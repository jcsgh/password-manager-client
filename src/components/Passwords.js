import PasswordList from '../passwordList.js'
import PasswordForm from '../passwordForm'
import { useEffect } from 'react'
import {fetchPassword} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function Passwords(props) {
  useEffect(()=>{
    props.fetchPassword()
}, [])
  return (
    <div className="App">
      <PasswordForm />
      {props.isLoading ? "password LIST IS LOADING" : "password LIST LOADED" }
      <PasswordList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

export default connect(mapStateToProps, {fetchPassword})(Passwords)