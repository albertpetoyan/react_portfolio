export const RESET_LIST = 'RESET_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const IS_DONE = 'IS_DONE';
export const SORT_LIST = 'SORT_LIST';
export const EDIT_ITEM = 'EDIT_ITEM';
export const SAVE_EDIT_ITEM = 'SAVE_EDIT_ITEM';
export const FILTER_ITEM = 'FILTER_ITEM';


export function addItem(todo) {
  return {
    type: ADD_ITEM,
    payload: todo
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: {
      id
    }
  }
}

export function resetList() {
  return {
    type: RESET_LIST
  }
}

export function sortAlphabetically() {
  return {
    type: SORT_LIST
  }
}
export function editItem(id,value) {
  return {
    type: EDIT_ITEM,
    id,
    value
  }
}
export function filterItem(filter) {
  return {
    type: FILTER_ITEM,
    payload:filter
  }
}
export function done(isDone,id) {
  return {
    type: IS_DONE,
    payload: {
      isDone,
      id
    }
  }
  
}
