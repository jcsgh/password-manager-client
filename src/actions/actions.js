import axios from 'axios'

export const FETCH_PWD_START = "FETCH_PWD_START"
export const FETCH_PWD_SUCCESS = "FETCH_PWD_SUCCESS"
export const FETCH_PWD_FAIL = "FETCH_PWD_FAIL"
export const ADD_PWD = "ADD_PWD"
export const UPDATE_PWD = "UPDATE_PWD"

export const REMOVE_PWD = "REMOVE_PWD"

export const fetchPwd = () => (dispatch) => {
  dispatch({ type: FETCH_PWD_START })

  axios
    .get("https://josh-password-manager.herokuapp.com/passwordManager")
    .then(data => {
      console.log(data.data.pwd_item)
      dispatch({ type: FETCH_PWD_SUCCESS, payload: data.data.pwd_item })
    })
    .catch(err => {
      dispatch({ type: FETCH_PWD_FAIL, payload: err.message })
    })
}

export const addPwd = (pwd) => (dispatch) => {
  dispatch({ type: FETCH_PWD_START })
  console.log(pwd)
  const user = localStorage.getItem('user')
  axios
    .post(`https://josh-password-manager.herokuapp.com/passwordManager/${user}/createPassword`, pwd)
    .then(data => dispatch({ type: ADD_PWD, payload: data.data.pwd_item }))
    .catch(err => dispatch({ type: FETCH_PWD_FAIL, payload: err.message }))
  // 
}

export const removePwd = (id, pwd) => (dispatch) => {
  dispatch({ type: FETCH_PWD_START })
  axios
    .delete(`https://josh-password-manager.herokuapp.com/passwords/${id}`)
    .then(data => dispatch({ type: REMOVE_PWD, payload: pwd }))
    .catch(err => dispatch({ type: FETCH_PWD_FAIL, payload: err.message }))

}

export const updatePwd = (id, update) => (dispatch) => {
  dispatch({ type: FETCH_PWD_START })
  axios
    .put(`https://josh-password-manager.herokuapp.com/passwords/${id}`, update)
    .then(data => dispatch({ type: UPDATE_PWD, payload: data.data.pwd_item }))
    .catch(err => dispatch({ type: FETCH_PWD_FAIL, payload: err.message })
    )
}