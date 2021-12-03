import { DELETE_ITEM, RESET_LIST, ADD_ITEM,IS_DONE } from "../actions/todo";

const initialState = {
  list : [
    {id:1,
    text:"first todo",
    isDone: false}
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        list:[...state.list, action.payload] 
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        list:state.list.filter(item => item.id !== action.payload.id)
      }
    }
    case RESET_LIST: {
      return {
        ...state,
        list:state.list.filter(item => !item.isDone) 
      }
    }
    case IS_DONE: {
      return {
        ...state,
        list : state.list.map(item =>
          item.id === action.payload.id 
          ? {...item, isDone :!action.payload.isDone}
          : item
        )
      }
    }
    default: {
      return state
    }
  }
}
