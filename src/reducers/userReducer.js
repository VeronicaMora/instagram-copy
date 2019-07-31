import { 
    LOGIN, 
    LOADING_LOGIN, 
    ERROR_LOGIN, 
    SIGNUP, 
    LOADING_SIGNUP, 
    ERROR_SIGNUP 
} from '../actions/userActions'
import { createReducer } from 'redux-starter-kit'

const INITIAL_STATE = {
    user: {},
    loading: false,
    error: false
}

export const userReducer = createReducer(INITIAL_STATE, {
    [LOGIN]: (state, action) => {
        console.log(action.payload)
        return { 
            ...state, 
            user: action.payload,
            loading: false,
            error: false
        }
    },
    [LOADING_LOGIN]: (state, action) => {
        return { ...state, loading: true, error: false}
    },
    [ERROR_LOGIN]: (state, action) => {
        return { ...state, loading: false, error: true}
    },
    [SIGNUP]: (state, action) => {
        console.log(action.payload)
        return { 
            ...state, 
            user: action.payload,
            loading: false,
            error: false
        }
    },
    [LOADING_SIGNUP]: (state, action) => {
        return { ...state, loading: true, error: false}
    },
    [ERROR_SIGNUP]: (state, action) => {
        return { ...state, loading: false, error: true}
    },
})