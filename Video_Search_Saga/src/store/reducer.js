import { API_SUCCESS,API_SUC,PUPULAR_SUC } from "./action";

const initialState = {
    data:[],
    video:[]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case API_SUCCESS: {
            return{
                ...state,
                data:action.payload
            }
        }
        case API_SUC: {
            return{
                ...state,
                video:action.payload
            }
        }
        case PUPULAR_SUC: {
            return{
                ...state,
                data:action.payload
            }
        }
        default:
            return state
    }
}