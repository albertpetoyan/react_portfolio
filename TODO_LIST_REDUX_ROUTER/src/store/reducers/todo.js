import {FILTER_ITEM, DELETE_ITEM, RESET_LIST, ADD_ITEM, IS_DONE, SORT_LIST, EDIT_ITEM } from "../actions/todo";

let data;
try {
  data = JSON.parse(localStorage.getItem('list')) || []
} catch (e) {
  data = []
}
const initialState = {
  sort: localStorage.getItem('sort') === '1',
  filter: localStorage.getItem('filter') || '',
  list: data,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const list = [...state.list, action.payload];
      localStorage.setItem('list', JSON.stringify(list));
      return {
        ...state,
        list,
      }
    }
    case DELETE_ITEM: {
      const list = state.list.filter(item => item.id !== action.payload.id)
      localStorage.setItem('list', JSON.stringify(list));
      return {
        ...state,
        list
      }
    }
    case RESET_LIST: {
      const list = state.list.filter(item => !item.isDone)
      localStorage.setItem('list', JSON.stringify(list));
      return {
        ...state,
        list,
      }
    }
    case IS_DONE: {
      const list = state.list.map(item =>
        item.id === action.payload.id
          ? { ...item, isDone: !action.payload.isDone }
          : item);
      localStorage.setItem('list', JSON.stringify(list));
      return {
        ...state,
        list,
      }
    }
    case SORT_LIST: {
      const sort = !state.sort;
      localStorage.setItem('sort', sort ? '1' : '0');
      return {
        ...state,
        sort
      }
    }
    case FILTER_ITEM: {
      let filter = action.payload;
      localStorage.setItem('filter', filter);
      return {
        ...state,
        filter
      }
    }
    case EDIT_ITEM: {
      let list = state.list.map(item => {
        if(item.id === action.id){
          item.text = action.value;
        }
        return item;
      });
      localStorage.setItem('list', JSON.stringify(list));
      return {
        ...state,
        list,
      }
    }
    default: {
      return state
    }
  }
}
