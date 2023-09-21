import {Add_ToDo, Dlt_ToDo, Edit_ToDo} from './TDActionType';

const initialValue = {
  add: [],
  edit: [],
};

const TDReducer = (state = initialValue, action) => {
  switch (action.type) {
    case Add_ToDo: {
      const {parameter, id} = action.payload;

      console.log('Adding...=>', state.add);
      return {
        ...state,
        add: [...state.add, {id, parameter}],
      };
    }
    case Dlt_ToDo: {
      const {id} = action.payload;
      console.log('Dlt_ToDo==>');
      return {
        ...state,
        add: state.add.filter(todo => todo.id !== id),
      };
    }
    case Edit_ToDo: {
      const {id, parameter} = action.payload;
      console.log('Edit_ToDo==>', action.payload);
      return {
        ...state,
        add: [...state.add, {id, parameter}],
      };
    }
    default:
      return state;
  }
};

export default TDReducer;
