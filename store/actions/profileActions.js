export const updateUsername = (username) => async (dispatch) => {

    const formdata = {
        username: username
    }

    if (username !== 'ERROR') {
        try {
            const res = await fetch('/api/firebase/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'token': localStorage.getItem('TOKEN'),
                },
                body: JSON.stringify(formdata)
            })

            const data = await res.json()

            console.log("DATA ", data)

            if (res.status === 401 || res.status === 500) {
                console.log('Heloo')
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
                payload: "ACTION: " + err.message
            })
        }
    } else {
        dispatch({
            type: 'USER_GITHUB_NOT_FOUND',
            payload: 'GITHUB ACCOUNT NOT FOUND'
        })
    }
}