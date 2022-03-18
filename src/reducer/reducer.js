import { ADD_PWD, REMOVE_PWD, UPDATE_PWD, FETCH_PWD_START, FETCH_PWD_SUCCESS, FETCH_PWD_FAIL } from '../actions/actions'

const initialState = {
    pwdData: [],
    isLoading: false,
    error: ""
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_PWD_START:
            return {
                ...state, pwdData: state.pwdData, error: "", isLoading: true
            }
        case FETCH_PWD_FAIL:
            return {
                ...state, pwdData: state.pwdData, error: action.payload, isLoading: false
            }
        case FETCH_PWD_SUCCESS:
            return {
                ...state, pwdData: action.payload, error: "", isLoading: false
            }
            case UPDATE_PWD:
                let updatedState=[]
                for (let i = 0; i< state.pwdData.length; i++){
                    if (state.pwdData[i]._id === action.payload._id){
                        updatedState.push(action.payload)
                    } else{
                        updatedState.push(state.pwdData[i])
                    }
                }
                return {
                    ...state, pwdData: updatedState
                }
        case ADD_PWD:
            return {
                ...state, pwdData: [...state.pwdData, action.payload], isLoading: false
            }
        case REMOVE_PWD:
            let newState = state.pwdData.filter(item => item !== action.payload)
            return {
                ...state, pwdData: newState
            }
        default:
            return state
    }
}