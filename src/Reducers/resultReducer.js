import axios from 'axios';

const initialState = {
    flightData: [],
    userSearch: {},
    searchDone: false
}

export const fetchFlightDetails = () => dispatch => {
    axios.get('./data.json')
        .then((data) => {
            dispatch({ type: 'FETCH_FLIGHTDETAILS', value: data })
        })
        .catch((err) => {
            console.error(err)
        })
}

function resultReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_FLIGHTDETAILS":
            return { ...state, flightData: action.value.data.flightDetails }
        case "IS_SEARCH_DONE":
            return { ...state, searchDone: !state.searchDone }
        case "STORE_USER_SEARCH":
            return { ...state, userSearch: action.value }
        default:
            return state
    }
}

export default resultReducer;