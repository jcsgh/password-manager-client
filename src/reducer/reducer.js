import { ADD_PASSWORD, REMOVE_PASSWORD, UPDATE_PASSWORD, FETCH_PASSWORD_START, FETCH_PASSWORD_SUCCESS, FETCH_PASSWORD_FAIL } from '../actions/actions'

const initialState = {
    passwordData: [],
    isLoading: false,
    error: ""
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_PASSWORD_START:
            return {
                ...state, passwordData: state.passwordData, error: "", isLoading: true
            }
        case FETCH_PASSWORD_FAIL:
            return {
                ...state, passwordData: state.passwordData, error: action.payload, isLoading: false
            }
        case FETCH_PASSWORD_SUCCESS:
            return {
                ...state, passwordData: action.payload, error: "", isLoading: false
            }
            case UPDATE_PASSWORD:
                let updatedState=[]
                for (let i = 0; i< state.passwordData.length; i++){
                    if (state.passwordData[i]._id === action.payload._id){
                        updatedState.push(action.payload)
                    } else{
                        updatedState.push(state.passwordData[i])
                    }
                }
                return {
                    ...state, passwordData: updatedState
                }
        case ADD_PASSWORD:
            return {
                ...state, passwordData: [...state.passwordData, action.payload], isLoading: false
            }
        case REMOVE_PASSWORD:
            let newState = state.passwordData.filter(item => item !== action.payload)
            return {
                ...state, passwordData: newState
            }
        default:
            return state
    }
}