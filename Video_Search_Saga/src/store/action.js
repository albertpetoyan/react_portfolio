
export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const POPULAR_REQ = 'POPULAR_REQ'
export const PUPULAR_SUC = 'PUPULAR_SUC'
export const API_REQ = 'API_REQ'
export const API_SUC = 'API_SUC'


export function videoReq(text) {
    return {
        type: API_REQUEST,
        payload: text
    }
  }
  export function videoR(text) {
    return {
        type: API_REQ,
        payload: text
    }
  }
  export function popularR() {
    return {
        type: POPULAR_REQ
    }
  }