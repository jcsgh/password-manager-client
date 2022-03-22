import axios from 'axios'

export const FETCH_PASSWORD_START = "FETCH_PASSWORD_START"
export const FETCH_PASSWORD_SUCCESS = "FETCH_PASSWORD_SUCCESS"
export const FETCH_PASSWORD_FAIL = "FETCH_PASSWORD_FAIL"
export const ADD_PASSWORD = "ADD_PASSWORD"
export const UPDATE_PASSWORD = "UPDATE_PASSWORD"

export const REMOVE_PASSWORD = "REMOVE_PASSWORD"

export const fetchPassword = () => (dispatch) => {
  dispatch({ type: FETCH_PASSWORD_START })

  axios
    .get("https://localhost:3000/password")
    .then(data => {
      dispatch({ type: FETCH_PASSWORD_SUCCESS, payload: data.data.password_list })
    })
    .catch(err => {
      dispatch({ type: FETCH_PASSWORD_FAIL, payload: err.message })
    })
}

export const addPassword = (password) => (dispatch) => {
  dispatch({ type: FETCH_PASSWORD_START })
  console.log(password)
  axios
    .post("https://localhost:5000/passwordManager/passwords", password)
    .then(data => dispatch({ type: ADD_PASSWORD, payload: data.data.password_item }))
    .catch(err => dispatch({ type: FETCH_PASSWORD_FAIL, payload: err.message }))
  // 
}

export const removePassword = (id, password) => (dispatch) => {
  dispatch({ type: FETCH_PASSWORD_START })
  axios
    .delete(`https://localhost:3000/password/${id}`)
    .then(data => dispatch({ type: REMOVE_PASSWORD, payload: password }))
    .catch(err => dispatch({ type: FETCH_PASSWORD_FAIL, payload: err.message }))

}

export const updatePassword = (id, update) => (dispatch) => {
  dispatch({ type: FETCH_PASSWORD_START })
  axios
    .put(`https://localhost:3000/password/${id}`, update)
    .then(data => dispatch({ type: UPDATE_PASSWORD, payload: data.data.password_item }))
    .catch(err => dispatch({ type: FETCH_PASSWORD_FAIL, payload: err.message })
    )
}