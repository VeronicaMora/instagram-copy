import { createAction } from 'redux-starter-kit'

export const LOGIN = createAction('login')

export const LOADING_LOGIN = createAction('loading_login')

export const ERROR_LOGIN = createAction('error_login')

export const SIGNUP = createAction('signup')

export const LOADING_SIGNUP = createAction('loading_signup')

export const ERROR_SIGNUP = createAction('error_signup')

export const login = (username, password) => (dispatch) => {
    dispatch(
        LOADING_LOGIN()
    )
    try {
        console.log(username, password)
        const data = {
            username, 
            password
        }
        dispatch(LOGIN(data))
    }
    catch(error) {
        console.log(error)
        dispatch(ERROR_LOGIN(error))
    }
}

export const signup = (email, name, username, password) => async (dispatch) => {
    dispatch(
        LOADING_SIGNUP()
    )
    try {
        const data = await {
            email, 
            name,
            username, 
            password
        }
        dispatch(SIGNUP(data))
    }
    catch(error) {
        console.log(error)
        dispatch(ERROR_SIGNUP(error))
    }
}





















// export const signup = () => (dispatch) => {
//     dispatch({
//         type: LOADING
//     })
//     try {
//         dispatch({
//             type: SIGNUP,
//             payload: 'jkcd'
//         })
//     }
//     catch(error) {
//         console.log(error)
//         dispatch({
//             type: ERROR,
//             payload: 'Ha ocurrido un error, intenta mas tarde.'
//         })
//     }
// }