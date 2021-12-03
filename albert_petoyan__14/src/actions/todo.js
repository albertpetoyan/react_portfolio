export const RESET_LIST = 'RESET_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const IS_DONE = 'IS_DONE';


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
export function done(isDone,id) {
  return {
    type: IS_DONE,
    payload: {
      isDone,
      id
    }
  }
  
}
