import axios from 'axios';
import { API_URL } from '../config';
import { FETCHNEWS } from '../actionType';
import { setLoading } from './fetchUserProfile';

export function setNewsData(payload) {
    return {
        type: FETCHNEWS,
        payload
    }
}



export function fetchNews() {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data } = await axios.get(API_URL + '/news',
                {
                    headers: {
                        'access_token': localStorage.getItem('access_token')
                    }
                }
            )
            dispatch(setNewsData(data))
        } catch (error) {
            // error handle
        } finally {
            dispatch(setLoading(false))
        }
    }
}