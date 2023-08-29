import axios from 'axios'
import { pause } from '../helpers'
import { FETCHUSERPROFILE, LOADINGSTATE, SETINVENTORIES } from "../actionType";
import { API_URL } from '../config/index'
export function setProfile(payload) {
    return {
        type: FETCHUSERPROFILE,
        payload
    }
}

export function setUserInventories(payload) {
    return {
        type: SETINVENTORIES,
        payload
    }
}

export function setLoading(payload) {
    return {
        type: LOADINGSTATE,
        payload
    }
}


export function fetchUserProfile() {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data } = await axios.get(API_URL + '/profile',
                {
                    headers:
                        { access_token: localStorage.getItem('access_token') }
                })

            dispatch(setProfile(data))
            dispatch(setUserInventories(data.Inventories))
        } catch (error) {
            dispatch(setErrorMessage(error.response.data.message))
            // error handle
        } finally {
            await pause()
            dispatch(setLoading(false))
        }
    }
}

export function setUserSelectedItem(payload) {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const data = await axios.put(API_URL + '/update', payload, {
                headers: {
                    'access_token': localStorage.getItem('access_token')
                }
            })
            dispatch(fetchUserProfile())
        } catch (error) {
            dispatch(setErrorMessage(error.response.data.message))
            // error handle
        } finally {
            pause()
            dispatch(setLoading(false))
        }
    }
}