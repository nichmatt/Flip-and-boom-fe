const initialState = {
    token: '',
    loading: false,
    status: ''
}


const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'midtrans/token':
            return {
                ...state,
                token: action.payload
            }
        case 'midtrans/statusPayment':
            return {
                ...state,
                status: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default paymentReducer