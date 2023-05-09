import { API_DATA  } from "../Constant";


let initailState = {
    apiData: []
}
const Reducer = (state = initailState, action) => {
    switch (action.type) {
        case API_DATA:
            return {...state , apiData:action.payload}
        default: return state
    }
}

export default Reducer