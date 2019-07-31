import { createAction } from 'redux-starter-kit'

export const LIKE = createAction('like')

export const LIKE_LOADING = createAction('like_loading')

export const LIKE_ERROR = createAction('like_error')

export const SAVE = createAction('save')
export const SAVE_LOADING = createAction('save_loading')
export const SAVE_ERROR = createAction('save_error')

export const postLike = () => (dispatch) => {
    dispatch( LIKE_LOADING() )
    try {
        dispatch( LIKE() )
    }
    catch(error) {
        dispatch( LIKE_ERROR('error') )
    }
}

export const postSave = () => (dispatch) => {
    dispatch( SAVE_LOADING() )
    try {
        dispatch( SAVE() )
    }
    catch(error) {
        dispatch( SAVE_ERROR('error') )
    }
}