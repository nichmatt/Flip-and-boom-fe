import axios from "axios";

export const getTokenMidtrans = (payload) => {
    return {
        type: 'midtrans/token',
        payload
    }
}

export function fetchGetTokenMidtrans(amount) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3000/user/token-midtrans', { amount }, { headers: { access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJqaG9uIiwiZW1haWwiOiJqaG9uQG1haWwuY29tIiwiaWF0IjoxNjkzMTg5MDQ2fQ.S4m8rnxjXaa4DxVu6pucjth0-QXD_DiLw6hd1JRo6UA' } })
            console.log(data.token, 'ini response axios');
            dispatch(getTokenMidtrans(data.token))
        } catch (error) {
            console.log(error);
        }
    }
}


export function fetchSuccesPayment(payload) {
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:3000/user/topup', payload, { headers: { access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJqaG9uIiwiZW1haWwiOiJqaG9uQG1haWwuY29tIiwiaWF0IjoxNjkzMTg5MDQ2fQ.S4m8rnxjXaa4DxVu6pucjth0-QXD_DiLw6hd1JRo6UA' } })
            // dispatch user
            dispatch()
            // dispatch profile lagi
        } catch (error) {
            console.log(error);
        }
    }
}