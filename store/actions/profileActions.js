import axios from "axios"

export const updateUsername = (username) => async (dispatch) => {

    try {
        const res = await fetch('/api/firebase/profile', {
            method: 'PUT',
            headers: {
                token: localStorage.getItem('TOKEN'),
            },
            body: {
                username: username
            }
        })

        const data = await res.json()

        if (res.status === 401) {
            dispatch({
                type: 'USER_AUTH_LOGIN_FAIL',
                payload: err.message
            })
        } else {
            dispatch({
                type: 'USER_AUTH_LOGIN_SUCCESS',
                payload: data
            })
        }

    } catch (err) {
        dispatch({
            type: 'USER_AUTH_LOGIN_FAIL',
            payload: err.message
        })
    }
}

export const detailProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })

        const { data } = await axios.get(`/api/products/${id}`, {
            headers: {
                id: id
            }
        })

        dispatch({
            type: 'PRODUCT_DETAIL_SUCCESS',
            payload: data
        })

    } catch (err) {
        dispatch({
            type: 'PRODUCT_DETAIL_FAIL',
            payload: err.message
        })
    }
}