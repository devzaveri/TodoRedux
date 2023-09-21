import {Add_ToDo, Edit_ToDo, Dlt_ToDo} from './TDActionType';
let newToID = 0;
export const addTodo = parameter => {
  return {
    type: Add_ToDo,
    payload: {
      id: ++newToID,
      parameter,
    },
    // text,
  };
};

export const Dlttodo = id => {
  return {
    type: Dlt_ToDo,
    payload: {
      id,
    },
  };
};

export const editTodo = (id, P) => {
  return {
    type: Edit_ToDo,
    payload: {
      id: id,
      P,
    },
  };
};
