import axios from 'axios';
import { API_URL } from '../config';
import { FETCHNEWS } from '../actionType';
import { setLoading } from './fetchUserProfile';
import { setErrorMessage } from './messageModal';
import { redirect } from 'react-router-dom';

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
            const token = localStorage.getItem('access_token')
            if (!token) {
                redirect('/')
                throw { message: 'Invalid session' }
            }
            const { data } = await axios.get(API_URL + '/news',
                {
                    headers: {
                        'access_token': token
                    }
                }
            )
            dispatch(setNewsData(data))
        } catch (error) {
            let messageError = error.response.data.message || error.message
            dispatch(setErrorMessage(messageError))
            // error handle
        } finally {
            dispatch(setLoading(false))
        }
    }
}